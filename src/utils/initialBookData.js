import image01 from "../images/defaultBook.png";

const BookData = [
  {
    name: "Harry Potter 0",
    author: "Vishal",
    ratings: 5,
    genre: ["Horror", "Mystery"],
    description: "Harry Potter is a noob.",
    date: "2019-12-13",
    image: image01
  },
  {
    name: "Harry Potter 1",
    author: "Vishal",
    ratings: 5,
    genre: ["Horror", "Mystery"],
    description: "Harry Potter is a noob.",
    date: "2019-12-13",
    image: image01
  },
  {
    name: "Harry Potter 2",
    author: "Vishal",
    ratings: 5,
    genre: ["Horror", "Mystery"],
    description: "Harry Potter is a noob.",
    date: "2019-12-13",
    image: image01
  },
  {
    name: "Harry Potter 3",
    author: "Vishal",
    ratings: 5,
    genre: ["Horror", "Mystery"],
    description: "Harry Potter is a noob.",
    date: "2019-12-13",
    image: image01
  }
];

const LoadInitialBookData = () => {
  localStorage.setItem("BookData", JSON.stringify(BookData));
  return BookData;
};

export default LoadInitialBookData;
