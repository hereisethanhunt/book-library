import { ADD_BOOK } from "../../container/BookLibrary/constants";

export function addBook(values) {
  return {
    type: ADD_BOOK,
    payload: values
  };
}
