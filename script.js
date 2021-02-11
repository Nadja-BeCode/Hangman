let words = ["AEROPLANE", "VAMPIRE", "CRAFT", "PARFUM", "FORCE", "PORT","BUBBLE"]; 

(() => {

    // your code here

    function randomColor() {
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var randomColor = "rgb(" + x + "," + y + "," + z + ")";
        document.body.style.backgroundColor = randomColor;
        }
 button.addEventListener("click",randomColor);
 //randomColor();  // a l'ouverture de la fct la couleur change directement
})();

/************************************************************************/
//let wordToFind = words[Math.floor(Math.random() * words.length)]

function randomWord() { 
    answerWord = words[Math.floor(Math.random() * words.length)];
    return answerWord 
} //fonction qui va chercher le mot dans le tableau appelé par la variable hiddenword

    let displayWord = [];
    let allEnterLetters = [];
    let answerArr = 0; //compteur des erreurs
    let hiddenWord = "";// mot a chercher de la fonction en-dessous
    let x = "";//tableau des lettres des mots (le array)
    let goodAnswer = 0;// remet à zero à chaque partie de jeu 
    let position = 0;// ne pas mettre de "" sinon il va déclarer la variable comme un string au lieu d'un chiffre
  
/********************************REST GAME**************************************** */

function reset() {
    answerArr = 0; //compteur des erreurs
    goodAnswer = 0;
    displayWord =[];

    document.getElementById("failure").innerHTML = answerArr;//pour remettre le compte à zero

    hiddenWord = randomWord();// mot a chercher de la fonction en-dessous
    //console.log(hiddenWord);

    x = hiddenWord.split(""); //divise mon mot à chercher dans mon tableau 
    //console.log(x);
    
    //document.getElementById("seeLetter").innerHTML = "";
    for (let i = 0; i < x.length; i++) {
    displayWord.push("_");
    }
    document.getElementById("seeLetter").innerHTML = displayWord//pour afficher la longueur du mot caché
}; 

/*********************************CHECK LETTERS**************************************** */

function check () {

    let guessLetter = document.getElementById("showLetter").value;//affiche un message sur le click du "restart"
    guessLetter = guessLetter.toUpperCase();//pour prendre en compte les lettres en majuscule
    //console.log(guessLetter);

    if(allEnterLetters.indexOf(guessLetter) != -1) {
        alert("Already enter !");
    } else {
        allEnterLetters.push(guessLetter);
        //console.log(allEnterLetters);

        newLetter = x.indexOf(guessLetter);//verifie si la lettre se trouve dans le mot
        //console.log(newLetter);

        if(x.indexOf(guessLetter, position) != -1) {
            console.log(goodAnswer);

            position = x.indexOf(guessLetter , position);// indexOf permet de passer en revue chaque lettre du mot sasn passer sur un split
            console.log(position);
            
            displayWord[position] = guessLetter;
            document.getElementById("seeLetter").innerHTML = displayWord;
            console.log(displayWord);
            goodAnswer++;
            
            if (goodAnswer == x.length) { // sera = a la longueur du mot trouvé
                alert("YOU WIN");
                
            }

        } else {
            answerArr++;
            document.getElementById("wrongLetter").innerHTML += guessLetter;
            console.log(answerArr);
            document.getElementById("failure").innerHTML = answerArr;//affiche le nombre de failure
            if (answerArr == 7) {
                alert("YOU FAILED");
                reset();//juste en reprenant la fonction " reset" cela permet de ne pas encoder toute la fonction car juste avec le "reste" on rappel la fonction = d'ou le but d'une fonction
            }
        }
    }
};


//x.splice(position, 1);//retrancher une lettre (1) en fonction de la "position" de celle-ci dans mon x
//console.log(x);// ATTENTION: la meme lettre trouvé ne peut etre remise sinon compte comme "failure". A REVOIR !! 

/*const keyboard = document.querySelector(".keyboard");
const buttonlist = keyboard.querySelectorAll(".letter");
console.log(buttonlist);*/

