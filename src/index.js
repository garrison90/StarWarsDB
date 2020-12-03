import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from "history";
import compileStore from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const AppContainer = () => {
  return <App />;
};

export const history = createBrowserHistory();
export const store = compileStore({ history });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <AppContainer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
