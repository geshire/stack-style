import React from "react";
import { render } from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import Layout from "layout/Layout";
import rootReducer from "state/rootReducer";
import initialState from "state/initialState";

import "styles/_base/manifest.less";

/* eslint-disable no-underscore-dangle */
const composeEnhancers = typeof window !== "undefined" && (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);
/* eslint-enable */

const history = createHistory();
const middleware = routerMiddleware(history);

// mount the redux store
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(),
  applyMiddleware(middleware),
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Layout />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("guide"),
);
