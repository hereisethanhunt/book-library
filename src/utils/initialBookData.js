// import image01 from "../images/defaultBook.png";

const BookData = [
  {
    id: 0,
    name: "Harry Potter 1",
    author: "Vishal",
    count: 5,
    genre: "Horror",
    description: "Harry Potter is a noob."
  },
  {
    id: 1,
    name: "Harry Potter 2",
    author: "Vishal",
    count: 5,
    genre: "Horror",
    description: "Harry Potter is a noob."
  },
  {
    id: 2,
    name: "Harry Potter 3",
    author: "Vishal",
    count: 5,
    genre: "Horror",
    description: "Harry Potter is a noob."
  },
  {
    id: 3,
    name: "Harry Potter 4",
    author: "Vishal",
    count: 5,
    genre: "Horror",
    description: "Harry Potter is a noob."
  }
];

const LoadInitialBookData = () => {
  localStorage.setItem("BookData", JSON.stringify(BookData));
  return BookData;
};

export default LoadInitialBookData;
