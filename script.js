

let maxLivesLeft = 7; // max lives that I gave
 
let failure = 0; // how many failure shout I wrote? Do I need to write? Is that necessary? Maybe I need to start to Zero 



function randomWord() { //How will be insert in ?? Don't know what I was trying to say !!!
    answerWord = words[Math.floor(Math.random() * words.length)];
    return answerWord  //To found one of the words 
}
let needToFind = []; // new arr enter words

//const alphabet = document.querySelector(".alphabet"); // selection buttons from HTML. This part helped by Laurent
//const listLi = alphabet.querySelectorAll("li");

let words = ["Aeroplane","Vampire","Craft", "Parfum","Force","Port","Bubble"] // my words hidden list
let secretWord = randomWord()
let split = secretWord.split("");
let splitLengt = split.length



console.log(secretWord)
console.log(words)
console.log(split)

/*listLi.forEach(e => {
    e.addEventListener("click", ()=>{

        if(split.includes(e.innerHTML.toLowerCase())){
            


        }else{
            


        }
        
    })
})*/