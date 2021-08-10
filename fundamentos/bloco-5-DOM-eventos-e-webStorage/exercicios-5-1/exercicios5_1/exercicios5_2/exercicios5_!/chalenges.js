function encode(string) {
  let newString = [];
  for (let key in string) {
    newString += string[key];
  }
  newString = newString.replace(/a/gi, 1);
  newString = newString.replace(/e/gi, 2);
  newString = newString.replace(/i/gi, 3);
  newString = newString.replace(/o/gi, 4);
  newString = newString.replace(/u/gi, 5);
  return newString;
}
console.log(encode("Hi there!"));

function decode(string) {
  let newString = [];
  for (let key in string) {
    newString += string[key];
  }
  newString = newString.replace(/1/gi, "a");
  newString = newString.replace(/2/gi, "e");
  newString = newString.replace(/3/gi, "i");
  newString = newString.replace(/4/gi, "o");
  newString = newString.replace(/5/gi, "u");
  return newString;
}
console.log(decode("H3 th2r2"));
