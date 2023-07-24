import {
	bugAdded,
	bugRemoved,
	bugResolved,
	bugAssignedToUser,
	getUnresolvedBugs,
	getBugsByUser,
} from "./store/bugs";
import { projectAdded } from "./store/projects";
import { userAdded } from "./store/users";
import configureStore from "./store/configureStore";

const store = configureStore();

store.subscribe(() => {
	console.log("Store changed!");
});

store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));

store.dispatch(projectAdded({ name: "project 1" }));

store.dispatch(bugAdded({ description: "Bug1" }));
store.dispatch(bugAdded({ description: "Bug2" }));
store.dispatch(bugAdded({ description: "Bug3" }));
store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugRemoved({ id: 2 }));

const bugs = getBugsByUser(1)(store.getState());
console.log(bugs);
