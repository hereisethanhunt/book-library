import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addBook } from "./actions";

class BookLibraryAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addBook = () => {
    let newBook = {
      name: "Harry Potter 5",
      author: "Vishal",
      ratings: 5,
      genre: ["Horror", "Mystery"],
      description: "Harry Potter is a noob.",
      date: "2019-12-13",
      image: "Lallu"
    };
    console.log("trigger action", newBook);
    this.props.addBook(newBook);
  };

  render() {
    return <div onClick={this.addBook}>Add</div>;
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addBook }, dispatch);
}

export default connect(null, mapDispatchToProps)(BookLibraryAdd);
