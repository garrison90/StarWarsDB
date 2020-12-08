import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import compileStore from "store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { history } from "helpers/history";
import App from "./App";

const AppContainer = () => {
  return <App />;
};

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
