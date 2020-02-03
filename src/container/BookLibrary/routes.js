import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import BookLibraryEdit from "../../component/BookLibraryEdit";
import BookLibraryView from "../../component/BookLibraryView";
import BookLibraryAdd from "../../component/BookLibraryAdd";
import BookLibrary from "./bookLibrary";

const bookLibraryRoutes = () => (
  <BrowserRouter>
    <Route exact path="/book-library" component={BookLibrary} />
    <Route exact path="/book-library/add" component={BookLibraryAdd} />
    <Route exact path="/book-library/edit" component={BookLibraryEdit} />
    <Route exact path="/book-library/edit" component={BookLibraryView} />
  </BrowserRouter>
);

export default bookLibraryRoutes;
