const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const LETTER_NUMBERS = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const SYMBOLS = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let password_res1=[];
let password_res2=[];

function creatPassWord1(){
    for(let i = 0; i<15; i++){
        let random = Math.floor(Math.random()*characters.length)
        password_res1.push(characters[random])
    } 
    return password_res1.join("")
}
function creatPassWord2(){
    for(let i = 0; i<15; i++){
        let random = Math.floor(Math.random()*characters.length)
        password_res2.push(characters[random])
    } 
    return password_res2.join("")
}

function genrate_now(){
    if( document.getElementById("password_1")==="22" && document.getElementById("password_2")==="22"){
        document.getElementById("password_1").textContent = "Hello"
        document.getElementById("password_2").textContent = "creatPassWord2()"
    }
    
    
    

    
    
}