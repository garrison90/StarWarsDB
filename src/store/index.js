import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

function createSagaInjector(runSaga, rootSaga) {
  const injectedSagas = new Map();
  const isInjected = (key) => injectedSagas.has(key);
  const injectSaga = (key, saga) => {
    if (isInjected(key)) {
      return;
    }
    const task = runSaga(saga);
    injectedSagas.set(key, task);
  };
  const ejectSaga = (key) => {
    const task = injectedSagas.get(key);
    if (task.isRunning()) {
      task.cancel();
    }
    injectedSagas.delete(key);
  };
  injectSaga("root", rootSaga);
  return { injectSaga, ejectSaga };
}

export default function compileStore({ history }) {
  const sagaMiddleware = createSagaMiddleware({ context: { history } });

  const middleware = [
    ...getDefaultMiddleware({ serializableCheck: false, thunk: false }),
    sagaMiddleware,
  ];

  const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools:
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  });
  Object.assign(store, createSagaInjector(sagaMiddleware.run, rootSaga));
  return store;
}
