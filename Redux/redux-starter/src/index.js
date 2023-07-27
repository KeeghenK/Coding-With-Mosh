import configureStore from "./store/configureStore";
import { addBug, bugsRequested, loadBugs, resolveBug } from "./store/bugs";

const store = configureStore();

store.dispatch(addBug({ description: "b" }));
store.dispatch(resolveBug(1690305194564));
