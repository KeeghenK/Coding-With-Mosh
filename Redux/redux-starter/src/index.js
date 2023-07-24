import { bugAdded, bugResolved } from "./actions";
import store from "./store";

store.dispatch(bugAdded("Bug1"));
store.dispatch(bugResolved(1));

console.log(store.getState());
