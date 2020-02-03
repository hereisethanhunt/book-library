import { ADD_BOOK } from "./constants";

export function addBook(values) {
  return {
    type: ADD_BOOK,
    payload: values
  };
}
