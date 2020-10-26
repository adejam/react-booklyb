import { v4 as uuidv4 } from 'uuid';

const booksArray = [
  {
    bookId: uuidv4(),
    bookTitle: 'Oliver Twist',
    bookAuthor: null,
    bookCategory: 'History',
    comment: null,
    numberOfPages: null,
    currentPageRead: null,
    currentChapterTitle: null,
    currentChapterRead: null,
    currentReadPercent: null,
  },
  {
    bookId: uuidv4(),
    bookTitle: 'Peter Pan',
    bookAuthor: null,
    bookCategory: 'Kids',
    comment: null,
    numberOfPages: null,
    currentPageRead: null,
    currentChapterTitle: null,
    currentChapterRead: null,
    currentReadPercent: null,
  },
  {
    bookId: uuidv4(),
    bookTitle: 'Superman',
    bookAuthor: null,
    bookCategory: 'Action',
    comment: null,
    numberOfPages: null,
    currentPageRead: null,
    currentChapterTitle: null,
    currentChapterRead: null,
    currentReadPercent: null,
  },
];

export default booksArray;
