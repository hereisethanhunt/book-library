import React from "react";
import Select from "react-select";
import { connect } from "react-redux";
import defImage from "../../images/defaultBook.png";
import styles from "./bookLibraryView.module.css";

class BookLibraryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: [],
      selectedBook: "",
      booksCurrentlyInView: []
    };
  }

  componentDidMount() {
    this.setSearchDropdown();
    this.setBooksView();
  }

  setBooksView = () => {
    const { BookData } = this.props;
    this.setState({ booksCurrentlyInView: BookData });
  };

  setSearchDropdown = () => {
    let bookList = [];
    let list = this.props.BookData;
    list.forEach(data => {
      bookList.push({
        label: data.name + " - " + data.author,
        value: data.name
      });
    });
    this.setState({ bookList });
  };

  onSelectBook = el => {
    const { BookData } = this.props;
    this.setState({ selectedBook: el });
    if (!!el) {
      let filteredData = BookData.filter(obj => obj.name === el.value);
      this.setState({ booksCurrentlyInView: filteredData });
    } else this.setBooksView();
  };

  render() {
    const { booksCurrentlyInView, bookList, selectedBook } = this.state;
    return (
      <div className={styles.bookLibraryView}>
        <div className={styles.heading}>{"VIEW BOOK"}</div>
        <div className={styles.searchRoutes}>
          <Select
            isClearable={true}
            isSearchable={true}
            options={bookList}
            value={selectedBook}
            placeholder="Search or select a Book"
            autoBlur={true}
            onChange={this.onSelectBook}
            className={styles.select}
          ></Select>
        </div>

        <main>
          <section className={styles.cards}>
            {booksCurrentlyInView &&
              booksCurrentlyInView.length &&
              booksCurrentlyInView.length > 0 &&
              booksCurrentlyInView.map(el => {
                return (
                  <article className={styles.card} key={el.name + el.author}>
                    <picture className={styles.thumbnail}>
                      <img
                        src={defImage}
                        alt="A banana that looks like a bird"
                      />
                    </picture>
                    <div className={styles.cardcontent}>
                      <div className={styles.bookInfo}>
                        <h2>{el.name + " - by " + el.author}</h2>
                        <div className={styles.bookCount}>{el.count}</div>
                      </div>
                      <div className={styles.bookGenre}>
                        {"GENRE - " + el.genre}
                      </div>
                      <p>{el.description}</p>
                    </div>
                  </article>
                );
              })}
          </section>
        </main>
      </div>
    );
  }
}

function mapStateToProps({ BookData }) {
  return { BookData };
}

export default connect(mapStateToProps)(BookLibraryView);
