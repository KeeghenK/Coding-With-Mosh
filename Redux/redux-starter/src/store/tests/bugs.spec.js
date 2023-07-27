import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import bugs, {
	addBug,
	bugsRecieved,
	bugsRequested,
	bugsRequestFailed,
	getUnresolvedBugs,
	resolveBug,
} from "../bugs";
import configureStore from "../configureStore";

describe("bugSlice", () => {
	let fakeAxios;
	let store;

	beforeEach(() => {
		fakeAxios = new MockAdapter(axios);
		store = configureStore();
	});

	const bugsSlice = () => store.getState().entities.bugs;

	const creatState = () => ({
		entities: {
			bugs: {
				list: [],
			},
		},
	});

	it("should add bug to the store if it is saved to the server", async () => {
		const bug = { description: "a" };
		const savedBug = { ...bug, id: 1 };
		fakeAxios.onPost("/bugs").reply(200, savedBug);

		await store.dispatch(addBug(bug));

		expect(bugsSlice().list).toContainEqual(savedBug);
	});

	it("should not add bug to the store if it is not saved to the server", async () => {
		const bug = { description: "a" };
		fakeAxios.onPost("/bugs").reply(500);

		await store.dispatch(addBug(bug));

		expect(bugsSlice().list).toHaveLength(0);
	});

	it("should mark the bug as resolved if it is saved to the server", async () => {
		fakeAxios.onPatch("/bugs/1").reply(200, { id: 1, resolved: false });
		fakeAxios.onPost("/bugs").reply(200, { id: 1 });

		await store.dispatch(addBug({}));
		await store.dispatch(resolveBug(1));

		expect(bugsSlice().list[0].resolved).toBeTruthy();
	});

	it("should not mark the bug as resolved if it is not saved to the server", async () => {
		fakeAxios.onPatch("/bugs/1").reply(500);
		fakeAxios.onPost("/bugs").reply(200, { id: 1 });

		await store.dispatch(addBug({}));
		await store.dispatch(resolveBug(1));

		expect(bugsSlice().list[0].resolved).not.toBeTruthy();
	});

	describe("selectors", () => {
		it("getUnresolvedBugs", () => {
			const state = creatState();
			state.entities.bugs.list = [
				{ id: 1, resolved: true },
				{ id: 2 },
				{ id: 3 },
			];

			const result = getUnresolvedBugs(state);

			expect(result).toHaveLength(2);
		});
	});

	describe("loading bugs ", () => {
		it("should be loading when bugs are requested", () => {
			store.dispatch(bugsRequested());

			expect(bugsSlice().loading).toBeTruthy();
		});

		it("should not be loading when bugs are received", () => {
			store.dispatch(bugsRecieved());

			expect(bugsSlice().loading).toBeFalsy();
		});

		it("should not be loading when request fails", () => {
			store.dispatch(bugsRequestFailed());

			expect(bugsSlice().loading).toBeFalsy();
		});
	});
});
