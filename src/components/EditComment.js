import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Options from './Options';

const options = ['Intriging', 'Satisfactory', 'Interesting', 'Educative', 'Informative'];
class EditComment extends Component {
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
      <section className="section" id="commentSection">
        <h2 className="addBookHeader bt_block pt_10 ta_center">
          Edit Comment
          {bookId}
        </h2>
        <form className="mediumForm">
          <div className="formGroup categorySelectDiv mb_10">
            <select className="formControl w_full" id="comment" name="comment" required>
              <option value="">Add Comments</option>
              {options.map(option => (
                <Options key={option} category={option} />
              ))}
            </select>
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

EditComment.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EditComment;
