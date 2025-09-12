const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pw1 = document.getElementById("pw1");
let pw2 = document.getElementById("pw2");

function genRandPW() {
    pw1.textContent = "";  // reset before generating
    pw2.textContent = "";
    
    for (let i = 0; i < 15; i++) {
        let rand = Math.floor(Math.random() * characters.length);
        pw1.textContent += characters[rand];
    }
    for (let j = 0; j < 15; j++) {
        let rand = Math.floor(Math.random() * characters.length);
        pw2.textContent += characters[rand];
    }
}

function genRandPWNoSymbols() {
    pw1.textContent = "";  // reset before generating
    pw2.textContent = "";
    
    for (let i = 0; i < 15; i++) {
        let rand = Math.floor(Math.random() * 62);
        pw1.textContent += characters[rand];
    }
    for (let j = 0; j < 15; j++) {
        let rand = Math.floor(Math.random() * 62);
        pw2.textContent += characters[rand];
    }
}
