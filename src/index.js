import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import AppReducer from "./container/App/rootReducer";
import "./container/App/app.css";
import * as serviceWorker from "./serviceWorker";

import bookLibraryRoutes from "./container/BookLibrary/routes";
import LoadInitialBookData from "./utils/initialBookData";

let loadData = {
  BookData:
    localStorage.getItem("BookData") &&
    Object.keys(localStorage.getItem("BookData")).length > 0
      ? JSON.parse(localStorage.getItem("BookData"))
      : LoadInitialBookData()
};

const bookRoutes = bookLibraryRoutes(); // book - container

ReactDOM.render(
  <Provider store={createStore(AppReducer, loadData)}>
    {bookRoutes}
    {/* Other Container Routes */}
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
