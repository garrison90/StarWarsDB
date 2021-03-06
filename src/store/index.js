import createSagaMiddleware from "redux-saga";
import rootReducer from "store/reducers/rootReducer";
import rootSaga from "store/sagas/rootSaga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

export default function compileStore({ history }) {
  const sagaMiddleware = createSagaMiddleware({ context: { history } });

  const middleware = [
    ...getDefaultMiddleware({ serializableCheck: false, thunk: false }),
    sagaMiddleware,
  ];

  const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: true,
  });

  sagaMiddleware.run(rootSaga);

  return store;
}
