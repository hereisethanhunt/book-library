import React from "react";
import styles from "./bookLibraryEdit.module.css";
import CloseIcon from "../../images/closeIcon.svg";

class BookLibraryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      disabled: true,
      switch: "underage",
      name: "",
      author: "",
      count: "",
      genre: ""
    };
  }

  componentDidMount() {
    this.loadInitialData();
  }

  loadInitialData = () => {
    const { name, author, count, genre, description } = this.props.editKey;
    this.setState({
      name,
      author,
      count,
      genre,
      description
    });
  };

  handleChange = (e, type) => {
    this.setState({ [type]: e.target.value });
  };

  selectedSwitch = val => {
    this.setState({ switch: val });
  };

  editBook = () => {
    const { id } = this.props.editKey;
    const { name, author, count, genre, description } = this.state;

    let newObject = {
      id,
      name,
      author,
      count,
      genre,
      description
    };

    this.props.editData(newObject, id);
  };

  render() {
    const { modal, toggle } = this.props;
    return (
      <div
        ref={this.container}
        className={modal ? styles.modalOpen : styles.modalClose}
      >
        <img
          alt="CLOSE"
          src={CloseIcon}
          className={styles.modalToggler}
          onClick={toggle}
        />
        <div className={styles.modalBody}>
          <div className={styles.modalHead}>{"EDIT"}</div>
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
              onClick={this.editBook}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default BookLibraryModal;
