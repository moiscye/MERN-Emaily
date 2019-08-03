import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
//ReactDOM.render(<App />, document.getElementById("root"));

console.log("STRIPE_KEY", process.env.REACT_APP_STRIPE_KEY);

serviceWorker.unregister();
