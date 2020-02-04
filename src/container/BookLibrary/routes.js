import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import BookLibrary from "./bookLibrary";

const bookLibraryRoutes = () => (
  <BrowserRouter>
    {/* <Route exact path="/" render={() => <Redirect to="/book-library" />} /> */}
    <Route exact path="/" component={BookLibrary} />
  </BrowserRouter>
);

export default bookLibraryRoutes;
