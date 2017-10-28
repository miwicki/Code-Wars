'use strict';

function capitalize(s) {
  let S = s.toUpperCase();
  let even = "";
  let odd = "";
  for (let i = 0; i < s.length; ++i) {
    if (i & 1) {
      even += s[i]
      odd += S[i]
    } else {
      even += S[i]
      odd += s[i]
    }
  }
  return [even, odd]
};
