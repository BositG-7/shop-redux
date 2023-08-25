import { createStore, Store } from "redux";

import shopReducer from "./shopreducer";

const store: Store = createStore(shopReducer);

export default store;
