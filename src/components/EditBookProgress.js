import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditBookProgress extends Component {
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
      <section className="section">
        <h2 className="addBookHeader bt_block pt_10 ta_center">
          Edit Read Progress
          {bookId}
        </h2>
        <form className="mediumForm">
          <div className="formGroup mb_10">
            <input
              type="text"
              className="formControl w_full"
              id="currentChapterTitle"
              name="currentChapterTitle"
              placeholder="Enter Current Chapter Title"
              required
            />
          </div>
          <div className="formGroup mb_10">
            <input
              type="number"
              className="formControl w_full"
              id="currentPageRead"
              name="currentPageRead"
              placeholder="Enter Current Page Number"
              required
            />
          </div>
          <div className="formGroup mb_10">
            <input
              type="number"
              className="formControl w_full"
              id="currentChapterRead"
              name="currentChapterRead"
              placeholder="Enter Current Chapter Number"
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

EditBookProgress.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
export default EditBookProgress;
