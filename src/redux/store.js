import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger]; //In middlewares, we store the logger array, which intercept the set of actions that are being actionated.

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); //Now, we actually create the store with the root reducer (thus the collection of states) and the logger (actions)

export const persistor = persistStore(store);

export default { store, persistor };
