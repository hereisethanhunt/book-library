import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addBook } from "./actions";
import styles from "./bookLibraryAdd.module.css";
// import "./BookLibraryAdd.module.css";

const initialState = {
  description: "",
  disabled: true,
  switch: "underage",
  name: "",
  author: "",
  count: "",
  genre: ""
};
class BookLibraryAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  addBook = () => {
    const { name, author, count, genre, description } = this.state;
    let newBook = {
      name,
      author,
      count,
      genre,
      description
    };
    console.log("trigger action", newBook);
    this.props.addBook(newBook);
    this.setState(initialState);
  };

  handleChange = (e, type) => {
    this.setState({ [type]: e.target.value });
  };

  selectedSwitch = val => {
    this.setState({ switch: val });
  };

  render() {
    return (
      <div className={styles.modalBody}>
        <div className={styles.heading}>{"ADD BOOK"}</div>
        <div className={styles.switch}>
          <div className={styles.switchContainer}>
            <div
              className={
                this.state.switch === "adult"
                  ? `${styles.switchOptions} ${styles.selected}`
                  : styles.switchOptions
              }
              onClick={() => this.selectedSwitch("adult")}
            >
              {"18+"}
            </div>
            <div
              className={
                this.state.switch === "underage"
                  ? `${styles.switchOptions} ${styles.selected}`
                  : styles.switchOptions
              }
              onClick={() => this.selectedSwitch("underage")}
            >
              {"< 18"}
            </div>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputField}
            placeholder="Name"
            type="text"
            value={this.state.name}
            onChange={e => this.handleChange(e, "name")}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputField}
            placeholder="Author"
            type="text"
            value={this.state.author}
            onChange={e => this.handleChange(e, "author")}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputField}
            placeholder="Description"
            type="text"
            value={this.state.description}
            onChange={e => this.handleChange(e, "description")}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputField}
            placeholder="Count"
            type="number"
            value={this.state.count}
            onChange={e => this.handleChange(e, "count")}
          />
        </div>
        <div className={styles.inputContainer}>
          <input
            className={styles.inputField}
            placeholder="Genre"
            type="text"
            value={this.state.genre}
            onChange={e => this.handleChange(e, "genre")}
          />
        </div>

        <div className={styles.inputContainer}>
          <button
            className={styles.button}
            disabled={
              !this.state.name ||
              !this.state.description ||
              !this.state.author ||
              !this.state.count ||
              !this.state.genre
            }
            onClick={this.addBook}
          >
            Create
          </button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addBook }, dispatch);
}

export default connect(null, mapDispatchToProps)(BookLibraryAdd);
