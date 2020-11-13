import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import configureStore from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const store = configureStore({ history });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
