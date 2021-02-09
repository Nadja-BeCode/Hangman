let words = ["Aeroplane","Vampire","Craft", "Parfum","Force","Port","Bubble"] // my words hidden list
let hiddenWord = randomWord() // helped by Loïc
    console.log(hiddenWord)
let split = hiddenWord.split(""); // idem: to split each word by letters
    console.log(words)
let splitLengt = split.length // idem: to split each words from my arr 
    console.log(split)

/************************************************************************/

let maxLivesLeft = 7; // max lives that I want to give
let failure = 0; // how many failure shout I wrote? Do I need to write? Is that necessary? Maybe I need to start to Zero 


let newArrWordsToFind = []; // new arr enter words to find from the initial arr "words"
const keyboard = document.querySelector(".keyboard");// selection buttons from HTML. This part helped by Laurent
const buttonlist = keyboard.querySelectorAll("class");// idem
console.log(buttonlist);


function randomWord() { //How will be insert in ?? Don't know what I was trying to say !!!
    answerWord = words[Math.floor(Math.random() * words.length)];
    return answerWord  //To found one of the words 
}


buttonlist.forEach(button => {
    button.addEventListener("click", ()=>{
        console.log("test");

   if (split.includes(button.innerHTML.toLowerCase())){ // Helped by laurent
        .push("");
    } else {
        ("_")
        
    }

    });
});



  
