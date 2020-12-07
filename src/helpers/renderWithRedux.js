import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "../store/reducers/rootReducer";

export const renderWithRedux = (
  component,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

export const renderWithReduxAndRoute = (
  component,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
    initialState,
    store = createStore(rootReducer, initialState),
    ...options
  } = {}
) => ({
  ...render(
    <Provider store={store}>
      <Router history={history}>{component}</Router>
    </Provider>,
    options
  ),
  history,
});
