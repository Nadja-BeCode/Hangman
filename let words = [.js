let words = [
    "AEROPLANE",
    "VAMPIRE",
    "CRAFT", 
    "PARFUM",
    "FORCE",
    "PORT",
    "BUBBLE"]; // my words hidden list
    
    let wordToFind = words [Math.floor(Math.random() * words.length)]
    
    let newArr = [];
    for (let i = 0; i < 

        let hiddenWord = randomWord() // helped by Loïc
    console.log(hiddenWord)
let split = hiddenWord.split(""); // idem: to split each word by letters
    console.log(words)
let splitLengt = split.length // idem: to split each words from my arr 
    console.log(split)






    let words = [
        "AEROPLANE",
        "VAMPIRE",
        "CRAFT", 
        "PARFUM",
        "FORCE",
        "PORT",
        "BUBBLE"]; // my words hidden list
        
        let hiddenWord = randomWord() // helped by Loïc
            console.log(hiddenWord)
        let split = hiddenWord.split(""); // idem: to split each word by letters
            console.log(words)
        let splitLengt = split.length // idem: to split each words from my arr 
            console.log(split)
        
        /************************************************************************/
        
        let wordToFind = words [Math.floor(Math.random() * words.length)]
        const keyboard = document.querySelector(".keyboard");
        const buttonlist = keyboard.querySelectorAll("class");
        console.log(buttonlist);
        
        function randomWord() { //How will be insert in ?? Don't know what I was trying to say !!!
            answerWord = words[Math.floor(Math.random() * words.length)];
            return answerWord  //To found one of the words 
        }
        console.log(randomWord());
        
        
            /*words.forEach(button => {
                button.addEventListener("click", ()=>{*/
            
                    if(split.includes(button.innerHTML.toLowerCase())){
        
                        let answerArray = []; // new arr enter words to find from the initial arr "words"
         for (var i = 0; i < words.length; i++) {
         answerArray[i] = "_";
         }
        
        let remainingLetters = words.length;
        
        while (remainingLetters > 0) {
            console.log(answerArray(" "));
        }
        
        
        /*}
            });*/
        
        
        };