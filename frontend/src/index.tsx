import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./sass/app.scss";
import { Provider } from "react-redux";
import { store } from "./state/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);