const stringLength = (string) => {
  if ((string.length < 1) || (string.length > 10)) {
    throw Error('Error Message');
  }
  return string.length;
};

module.exports = stringLength;