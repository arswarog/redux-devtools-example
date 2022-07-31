import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";
import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  devToolsEnhancer({
    name: "sss",
    trace: true,
    features: {
      pause: true, // start/pause recording of dispatched actions
      lock: true, // lock/unlock dispatching actions and side effects
      persist: true, // persist states on page reloading
      export: true, // export history of actions in a file
      import: "custom", // import history of actions from a file
      jump: true, // jump back and forth (time travelling)
      skip: true, // skip (cancel) actions
      reorder: true, // drag and drop actions in the history list
      dispatch: true, // dispatch custom actions or action creators
      test: true // generate tests for the selected actions
    }
  })
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
