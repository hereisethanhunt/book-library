import React from "react";
import { connect } from "react-redux";

class BookLibraryEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(localStorage.getItem("BookData"));
    console.log(this.props.BookData, "getting data");
  }

  render() {
    return <div>Edit</div>;
  }
}

function mapStateToProps({ BookData }) {
  return { BookData };
}

export default connect(mapStateToProps)(BookLibraryEdit);
