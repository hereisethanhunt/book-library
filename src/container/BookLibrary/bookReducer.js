import { ADD_BOOK, EDIT_BOOK } from "./constants";

export default function(state = {}, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const newEntry = action.payload;
      let existDataSize = state.length;
      let newData = [...state, { id: parseInt(existDataSize), ...newEntry }];
      localStorage.setItem("BookData", JSON.stringify(newData));
      return [...newData];
    }
    case EDIT_BOOK: {
      const editedEntry = action.payload[0];
      const key = action.payload[1];

      let prevData = [...state];
      const removeOldData = prevData.filter(el => el.id !== key);
      let newData = [...removeOldData, editedEntry];
      localStorage.setItem("BookData", JSON.stringify(newData));
      return [...newData];
    }
    default:
      return state;
  }
}
