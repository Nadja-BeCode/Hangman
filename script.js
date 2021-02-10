let words = [
"AEROPLANE",
"VAMPIRE",
"CRAFT", 
"PARFUM",
"FORCE",
"PORT",
"BUBBLE"]; 

/************************************************************************/

//let wordToFind = words[Math.floor(Math.random() * words.length)]

function randomWord() { 
    answerWord = words[Math.floor(Math.random() * words.length)];
    return answerWord 
} //fonction qui va chercher le mot dans le tableau appelé par la variable hiddenword

//let answerArray = [];

    let answerArr = 0; //compteur des erreurs

    let hiddenWord = "";// mot a chercher de la fonction en-dessous
    
    let x = "";

function reset() {
    answerArr = 0; //compteur des erreurs

    hiddenWord = randomWord();// mot a chercher de la fonction en-dessous
    console.log(hiddenWord);

    x = hiddenWord.split(""); //divise mon mot à chercher dan smon tableau 
    console.log(x);
    
    for (let i = 0; i < x.length; i++) {
    document.getElementById("seeLetter").innerHTML += "_"//pour afficher la longueur du mot caché
        
    }
}; 

function check () {
    let guessLetter = document.getElementById("showLetter").value;//affiche un message sur le click du "restart"
    console.log(guessLetter);
    newLetter = x.indexOf(guessLetter);//verifie si la lettre se trouve dans le mot
    console.log(newLetter);

    if(x.indexOf(guessLetter) != -1) {
        
    } else {
        answerArr++;
        document.getElementById("wrongLetter").innerHTML += newLetter;
        console.log(answerArr);
    }
};













/*const keyboard = document.querySelector(".keyboard");
const buttonlist = keyboard.querySelectorAll(".letter");
console.log(buttonlist);*/