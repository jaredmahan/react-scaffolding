// Import React and React DOM
import * as React from "react";
import { render } from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "app/reducers";
import * as a from "app/actions";

// Import the Hot Module Reloading App Container – more on why we use "require" below
const { AppContainer } = require("react-hot-loader");

// Import our App container (which we will create in the next step)
import App from "app/components/app";

// Tell Typescript that there is a global variable called module - see below
declare var module: { hot: any };

// Get the root element from the HTML
const rootEl = document.getElementById("app");

// Create the redux store from the reducers


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// Uses thunk and thunk middleware to dispatch an asyn action
// Action gets the data and then passes data off to the pure reducer method to update the state
store.dispatch(a.fetchPosts());


// And render our App into it, inside the HMR App ontainer which handles the hot reloading
render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootEl
);

// Handle hot reloading requests from Webpack
if (module.hot) {
  module.hot.accept("./app/components/app", () => {

    // If we receive a HMR request for our App container, then reload it using require (we can"t do this dynamically with import)
    const NextApp = require("./app/components/app").default;

    // And render it into the root element again
    render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      rootEl
    );
  });
}