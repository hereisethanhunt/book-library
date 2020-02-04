import { EDIT_BOOK } from "../../container/BookLibrary/constants";

export function editBook(obj, key) {
  return {
    type: EDIT_BOOK,
    payload: [obj, key]
  };
}
