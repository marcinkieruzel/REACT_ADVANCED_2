import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const countReducer = (store = {count: 0}, action) => {

  console.log(action);

  if (action.type === "INCREMENT") {
    return { count: store.count + 1 };
  }

  return store;
};

const nameReducer = (store = "Marcin", action) => {

  console.log(action);

  // if (action.type === "INCREMENT") {
  //   return { count: store.count + 1 };
  // }

  return store;
};

const reducers = combineReducers({
  count: countReducer,
  name: nameReducer
})

const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
