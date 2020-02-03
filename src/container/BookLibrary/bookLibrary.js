import React from "react";
import Tabs from "./tabs";
import BookLibraryEdit from "../../component/BookLibraryEdit";
import BookLibraryView from "../../component/BookLibraryView";
import BookLibraryAdd from "../../component/BookLibraryAdd";
import "./bookLibrary.css";

function BookLibrary() {
  return (
    <div className="BookLibrary">
      <Tabs>
        <div label="Add Books" icon="fas fa-folder-plus">
          <BookLibraryAdd />
        </div>
        <div label="View Books" icon="fas fa-list">
          <BookLibraryView />
        </div>
        <div label="Edit Books" icon="fas fa-edit">
          <BookLibraryEdit />
        </div>
      </Tabs>
    </div>
  );
}

export default BookLibrary;
