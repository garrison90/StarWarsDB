import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

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

export default function configureStore({ history }) {
  const sagaMiddleware = createSagaMiddleware({ context: { history } });

  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  Object.assign(store, createSagaInjector(sagaMiddleware.run, rootSaga));

  return store;
}
