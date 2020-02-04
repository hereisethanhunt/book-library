import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { editBook } from "./actions";
import Modal from "./bookLibraryModal";
import styles from "./bookLibraryEdit.module.css";
class BookLibraryEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      editKey: {}
    };
  }

  toggle = () => {
    this.setState(function(prevState) {
      return { modal: !prevState.modal };
    });
  };

  editDataClick = obj => {
    this.toggle();
    this.setState({ editKey: obj });
  };

  editData = (obj, key) => {
    // console.log("trigger action edit book", obj);
    this.props.editBook(obj, key);
    this.toggle();
  };

  render() {
    const { modal, editKey } = this.state;
    const { BookData } = this.props;

    return (
      <div className={styles.bookLibraryEdit}>
        <div className={styles.heading}>{"EDIT BOOK"}</div>
        <main>
          <section className={styles.cards}>
            {BookData &&
              BookData.length &&
              BookData.length > 0 &&
              BookData.map(el => {
                return (
                  <article className={styles.card} key={el.name + el.author}>
                    <div className={styles.cardcontent}>
                      <div className={styles.bookInfo}>
                        <h2>{el.name + " - by " + el.author}</h2>
                        <div className={styles.bookCount}>{el.count}</div>
                      </div>
                      <div className={styles.bookGenre}>
                        {"GENRE - " + el.genre}
                      </div>
                      <p>{el.description}</p>
                      <div
                        className={styles.edit}
                        onClick={() => this.editDataClick(el)}
                      >
                        <i className="fas fa-edit"></i>
                      </div>
                    </div>
                  </article>
                );
              })}
          </section>
        </main>
        {this.state.modal ? (
          <Modal
            modal={modal}
            toggle={this.toggle}
            editData={this.editData}
            editKey={editKey}
          />
        ) : null}
      </div>
    );
  }
}

function mapStateToProps({ BookData }) {
  return { BookData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookLibraryEdit);
