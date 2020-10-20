import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Options from './Options';

const options = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-fi'];

class EditBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookId: null,
    };
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.setState({
      bookId: id,
    });
  }

  render() {
    const { bookId } = this.state;
    return (
      <section className="section" id="edit">
        <h2 className="addBookHeader bt_block pt_10 ta_center">
          Edit Book
          {bookId}
        </h2>
        <form className="mediumForm">
          <div className="formGroup titleInputDiv mb_10">
            <input
              type="text"
              className="formControl w_full"
              id="title"
              name="bookTitle"
              placeholder="Book Title"
              required
            />
          </div>
          <div className="formGroup categorySelectDiv mb_10">
            <select className="formControl w_full" id="category" name="bookCategory" required>
              <option value="">Category</option>
              {options.map(option => (
                <Options key={option} category={option} />
              ))}
            </select>
          </div>
          <div className="formGroup titleInputDiv mb_10">
            <input
              type="text"
              className="formControl w_full"
              id="author"
              name="bookAuthor"
              placeholder="Enter Book Author"
              required
            />
          </div>
          <div className="formGroup titleInputDiv mb_10">
            <input
              type="number"
              className="formControl w_full"
              id="noOfPages"
              name="noOfPages"
              placeholder="Enter Number of pages"
              required
            />
          </div>
          <div className="formGroup submitSelectDiv mb_10">
            <button type="submit" className="btn btnPrimary w_full">
              Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
}

EditBook.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditBook;
