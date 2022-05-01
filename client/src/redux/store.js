import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]; //In middlewares, we store the logger array, which intercept the set of actions that are being actionated.

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); //Now, we actually create the store with the root reducer (thus the collection of states) and the logger (actions)

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
