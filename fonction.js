const prompt = require('prompt-sync')()


// function sayhello(name) {
//    console.log("bonjour " + name);

// }

// sayhello ()

//let age = 15
// function estappelée(age) {
//     if (age > 18) {
//         return (true);

//     }else{
//         return (false);

//     }
// }
// console.log(estappelée(15));

// let mot = "oki"


// function inverserMot(mot) {
//     let result = ""
//     for (let i = mot.length - 1; i >= 0; i--) {
//         result = result + mot[i]

//     }
//     return result  
// }


// console.log(inverserMot(mot));

// let limite= (1.100)


// function genererNombreAleatoir (min, max) {
//    return Math.floor(Math.random()*(max - min +1)+ min )

// }
// console.log( genererNombreAleatoir(1,100))



function verifpangramme(chaine) {
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < alpha.length; i++) {


        if (chaine.includes(alpha[i]) == false) {
            return false
        } 
    }
    return true
} 

console.log(verifpangramme("portez ce vieux whisky au juge blond qui fume"));










