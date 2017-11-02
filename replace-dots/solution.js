'use strict';

function replaceDots(str) {
  var newStr = "";

  for (var i = 0; i < str.length; i++) {
    if (str[i] === ".") {
      newStr += "-";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
