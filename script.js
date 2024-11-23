//create an array containing words to be suggested 
var keywords = [
    "apple", "ant", "art", "amazing", "anchor",
  "banana", "ball", "bat", "breeze", "bright",
  "cat", "cup", "car", "coffee", "climb",
  "dog", "dance", "dove", "diamond", "drive",
  "elephant", "enjoy", "energy", "evening", "eagle",
  "fox", "fun", "forest", "french", "flying",
  "grape", "game", "guitar", "glow", "green",
  "hat", "hope", "harbor", "hike", "heart",
  "ice", "input", "inspire", "innovate", "intelligence",
  "jungle", "joy", "jump", "jazz", "joke",
  "kite", "king", "key", "kind", "knowledge",
  "lion", "love", "light", "leaf", "lighthouse",
  "moon", "magic", "mystery", "mountain", "music",
  "net", "night", "nature", "new", "noble",
  "orange", "open", "ocean", "orbit", "owl",
  "pear", "peace", "planet", "purple", "plum",
  "queen", "quick", "quiet", "question", "quality",
  "rose", "run", "rain", "reality", "river",
  "sun", "star", "sky", "smile", "storm",
  "tree", "travel", "tiger", "thought", "tune",
  "umbrella", "unique", "universe", "under", "utopia",
  "violet", "vibe", "victory", "vibe", "view",
  "wave", "wonder", "world", "whale", "wish",
  "xylophone", "xenon", "xerox", "xpert", "xenial",
  "yellow", "yarn", "youth", "yoga", "year",
  "zebra", "zen", "zero", "zone", "zoom",
    "subway",
    "sunrise",
    "shillong",
    "sheryians coding school",
    "shoes",
    "sheryians",
    "sherry",
    "sherlock holmes",
    "shery school",
    "sheryians projects",
    "sheryians web development",
];


var input = document.querySelector("input");
var suggestions = document.querySelector(".suggestions");

//when input event is triggered then filter the keywords array with the help of startsWith() method for searching for the values typed in to the input field.  
input.addEventListener("input", function () {
    //this condition helps check if there is any text in the input field. if no then do not display suggestions.
    if(input.value === ""){
        suggestions.style.display = "none"
    }
    else{
        suggestions.style.display = "block"

    }
    //an array is created (named filter) which consists of the keywords which contains the input field characters(using filter method and startsWith() method )
    var filter = keywords.filter(function (elem) {
        return elem.toLowerCase().startsWith(input.value.toLowerCase());
        //startsWith() method is used instead of includes() as we want words suggested that START with the input field texts.
        //.toLowerCase() method is used to make the filtered array case insensitive.
    });

    //map() method can only modify the HTML elements,so the filter array is appended to the html document as seperate divs using map method and join method.
    //join("") method is used as map() method returns the values in the form of array which are seperated by comma. so while rendering this array is converted to a string because of which the comma is also rendered on the browser as a string. 
    //whereas join("") method combines all the div elements without comma thus helping in accurate formatting.
    suggestions.innerHTML = filter.map(function (elem) {
        return `<div>${elem}</div>`;
    }).join("");

    //Automplete when clicking the suggested keyword
    var suggestedWords = document.querySelectorAll(".suggestions div")
    suggestedWords.forEach(function (item) {
        item.addEventListener("click", function () {
        input.value = this.textContent; //this keyword targets the element which triggered the event(ie in this case whichever word is clicked , that words text content is to be assigned to the input field)
        suggestions.innerHTML = ""; //now clear the suggestions
        });
    });
});