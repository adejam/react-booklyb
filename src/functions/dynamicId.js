const dynamicId = books => {
  let id;
  if (books === null) {
    id = 0;
  } else {
    const theLength = books.length;
    if (theLength < 1) {
      id = 0;
    } else {
      id = books[books.length - 1].id + 1;
    }
  }
  return id;
};

export default dynamicId;
