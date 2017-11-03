'use strict';

const solution = str => {
 let arr = str.split('');
 return arr.map((el, i) => el = arr[arr.length - i - 1]).join('');
}
