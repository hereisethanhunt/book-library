import { ADD_BOOK } from "../../component/BookLibraryAdd/constants";

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const newEntry = action.payload;
      let newData = [...state, newEntry];
      localStorage.setItem("BookData", JSON.stringify(newData));
      return [...newData];
    }
    default:
      return state;
  }
}
