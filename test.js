
function allnumericplusminus(inputtxt) {
  var numbers = /^[-+]?[0-9]+$/;
  if (inputtxt.value.match(numbers)) {
    return true;
  }
  else {
    console.log('Please input correct format');
    return false;
  }
}

allnumericplusminus({ value: '+452551219' });


var v = 1;

var f1 = function () {
  console.log(v);
};

var f2 = function() {
  var v = 2;
  f1();
};

f2();

console.log([] == []);

let arr = [1, 2, 3, 3, 5, 7, 2, 6, 8];
const copiedArr = [...new Set(arr)];
console.log(copiedArr);


function myTrim(str) {
  let reg = /^\s+|\s+$/g;
  return str.replace(reg, "");
}

console.log(myTrim('    asdf    '));
