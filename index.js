
 //Create the cats array
 const cats = ["Milo", "Otis", "Garfield"];
 
 //Function to destructively append a cat
 function destructivelyAppendCat (name) {
    cats.push(name);
 }
 
 //Function to destructively prepend a cat
 function destructivelyPrependCat (name) {
    cats.unshift(name);
 }

 //Function to destructively remove the last cat
 function destructivelyRemoveLastCat () {
    cats.pop();
 }

 //Function to destructively remove first cat
 function destructivelyRemoveFirstCat () {
    cats.shift();
 }

 function appendCat(name) {
    return[...cats,name];
 }

 function prependCat(name) {
    return[name,...cats];
 }
 
 function removeLastCat() {
    return cats.slice(0,-1);
 }

 function removeFirstCat() {
    return cats.slice(1);
 }

 module.exports = {
    cats,
    destructivelyAppendCat,
    destructivelyPrependCat,
    destructivelyRemoveLastCat,
    destructivelyRemoveFirstCat,
    appendCat,
    prependCat,
    removeLastCat,
    removeFirstCat,
 };




