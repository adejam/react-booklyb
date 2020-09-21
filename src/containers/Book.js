import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../actions/index';
import percent from '../images/percent.png';

const Book = ({ book, removeBook }) => {
  const { id, title, category } = book;
  const handleClick = () => {
    removeBook(id);
  };
  return (
    <article className="list_group_item list_group_item_action bookArticle">
      <div className="name">
        <div className="nameDiv">
          <p>{category}</p>
          <h3>{title}</h3>
          <a href="#author" className="azure mb_10 d_ib">
            Author
          </a>
          <nav>
            <a href="#comments" className="azure pr_10 br_block">
              Comments
            </a>
            <a href="#remove" className="azure pr_10 ml_10 br_block" onClick={() => handleClick()}>
              Remove
            </a>
            <a href="#edit" className="azure pr_10 ml_10">
              Edit
            </a>
          </nav>
        </div>
      </div>
      <div className="percentUpdate">
        <div className="percentDiv p_10">
          <div className="percent br_block">
            <div>
              <img src={percent} alt="percent" className="percentImg" />
            </div>
            <div className="ml_10">
              <p className="percentRate">65%</p>
              <span className="complete">Completed</span>
            </div>
          </div>
        </div>
        <div className="updateDiv p_10">
          <h5>Current Chapter</h5>
          <p className="mb_10">Chapter 17:A lesson learned</p>
          <button type="button" className="btn btnPrimary">
            Update Progress
          </button>
        </div>
      </div>
    </article>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  removeBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {},
  id: '',
  title: '',
  category: '',
};

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(actions.removeBookAction(id)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Book);
