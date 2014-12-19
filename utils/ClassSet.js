var classSet = function (object) {
  var classes = "";
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      if (object[key]) {
        classes += key + " ";
      }
    }
  }
  // Remove trailing space
  if (classes.length > 0) {
    classes = classes.substring(0, classes.length - 1);
  }
  return classes;
};

module.exports = classSet;
