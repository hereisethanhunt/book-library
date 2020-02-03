import React from "react";
import Tabs from "./tabs";
import BookLibraryEdit from "../../component/BookLibraryEdit";
import BookLibraryView from "../../component/BookLibraryView";
import BookLibraryAdd from "../../component/BookLibraryAdd";
import "./bookLibrary.css";

function BookLibrary() {
  return (
    <div className="BookLibrary">
      <h1>Book Library</h1>
      <Tabs>
        <div label="Add">
          <BookLibraryAdd />
        </div>
        <div label="View">
          <BookLibraryView />
        </div>
        <div label="Edit">
          <BookLibraryEdit />
        </div>
      </Tabs>
    </div>
  );
}

export default BookLibrary;
