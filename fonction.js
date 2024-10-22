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



// function verifpangramme(chaine) {
//     let alpha = "abcdefghijklmnopqrstuvwxyz"
//     for (let i = 0; i < alpha.length; i++) {


//         if (chaine.includes(alpha[i]) == false) {
//             return false
//         } 
//     }
//     return true
// } 

// console.log(verifpangramme("portez ce vieux whisky au juge blond qui fume"));


// let test = ["abricot","fraise","mangue","pasteque"]

//      for (let i = 0; i < test.length; i++){

//         if (test[i] =="mangue"){
//             console.log( test[2]);
//             break
//         }
//      } 

// let tableau = [1,2,3,4,5,6,]

//  function sommeTableau (tableau) {
//         let result = 0
//         for (let i = 0 ; i < tableau.length; i++) {

//           result = result + tableau[i]

//         }
//         return result  
//     } 
//     console.log(sommeTableau (tableau));

// let tableau = [1,2,3,4,5,6,]

//  function filtrePairs (tableau) {
//     let res  = []

//         for (let i = 0 ; i < tableau.length; i++) {

//             if( tableau[i] % 2 == 0){
//                 res.push(tableau[i])

//             }
//         }
//         return res  
//     } 
//     console.log( filtrePairs(tableau));


// let tableau = [1,2,30,4,5,6,]

//  function trouverMaximum (tableau) {
//     let max = 0

//         for (let i = 0 ; i < tableau.length; i++) {

//             if(tableau [i] > max ){
//                 max=tableau [i] 

//             }
//         }
//         return max 
//     } 
//     console.log( trouverMaximum(tableau));


// let tableau = [1, 2, 30, 4, 5, 6,]

// function inversertableau(tableau) {
//     let result = []


//     for (let i = tableau.length - 1; i >= 0 ; i--) {

//        result.push(tableau[i])

//     }
//     return result 
// }


// console.log(inversertableau(tableau));




// TD 40
//EXO 1

//v1


// function sommeTableau() {
//     let somme = 0
//     let tableau = [];
//     for (let i = 0; i < 5; i++) {
//         let reel = Number(prompt(" saisi 1 nombres : "))

//         tableau.push(reel)
//         somme = somme + reel
//     }
//       return {
//         tableau :tableau,
//         somme: somme
//       };

// }

// console.log(sommeTableau() );




//EXO2

// let tableau = [1,2,3,4,5,6]

//  function sommeTableau (tableau) {
//         let somme = 0
//         let produit = 1
//         let moyenne = ""

//         for (let i = 0 ; i < tableau.length; i++) {

//           somme += tableau[i];
//           produit *= tableau[i];
//           moyenne = somme / tableau.length;

//         }
//         return {
//             somme:somme,
//             produit:produit,
//             moyenne:moyenne
//         }
//     } 
//     console.log(sommeTableau (tableau));





//EXO3

// let tableau = [1,2,3,4,5,6,1,3,6,6]

//  function Nombredefois (tableau) {
//     let result = 0
//     let search = 6

//         for (let i = 0 ; i < tableau.length; i++) {

//             if (i === search) {
//                  result = i++ 
//             }

//         }
//         return result



//      } console.log(Nombredefois (tableau));




//EXO5

// let tableau = [1, 2, 3, 4, 5, 6, 1, 3, 6, 6]

// function supprime(tableau) {

//     let result = tableau.filter(element => element !== 6);
//     return result
// }
// console.log(supprime(tableau));



//EXO6
//V1

// let tableau = [20, 19, 3, 4, 5, 6, 10, 3, 6, 2];
// let control;

// function tricroissant(tableau) {


//     do {
//         control = false;// condition d'arret

//         for (let i = 0; i < tableau.length; i++) {

//             if (tableau[i] > tableau[i + 1]) {

//                 let temp = tableau[i + 1];
//                 tableau[i + 1] = tableau[i];  // [tableau[i+1] , tableau[i]] = [tableau[i] ,tableau[i+1]]; 
//                 tableau[i] = temp;
//                 control = true; // verifie la veracité du if


//             }

//         }
//     } while (control)

//         return tableau

//       }

// console.log(tricroissant(tableau));

//V2

// let tableau = [20, 19, 3, 4, 5, 6, 10, 3, 6, 2];

// function tricroissant(tableau) {


//         for (let i = 0; i < tableau.length; i++) {

//             for (let j = 0; j < tableau.length ; j++)

//             if (tableau[j] > tableau[j + 1]) {

//          [tableau[j] ,tableau[j+1]] = [tableau[j+1] , tableau[j]];

//             }
//         }
//         return tableau

//       }

// console.log(tricroissant(tableau));



//EXO 7



// let tableaun = [20, 19, 3, 4, 5, 6, 10, 3, 6, 2];
// let tableaudeux = [1, 2, 3, 4, 5, 6, 1, 3, 6, 6];

// function sommeTableaux(tableaun,tableaudeux) {

//     let tableau = [];

//     for (let i = 0; i <tableaun.length; i++) {

//         tableau.push( tableaun[i]+ tableaudeux[i])

//     }
//       return tableau         

// }

// console.log(sommeTableaux(tableaun,tableaudeux) );


//EXO 8
//v1

// let tableaun = [20, 19, 3, 4, 5, 6, 10, 3, 6, 2];
// let tableaudeux = [1, 2, 3, 4, 5, 6, 1, 3, 6, 6];

// function calculerSchtroumpf (tableaun,tableaudeux) {
//     let tableau = [];
//     let somme = 0

//     for (let i = 0; i <tableaun.length; i++) {

//         tableau.push( tableaun[i] * tableaudeux[i])

//         somme += tableau[i];


//     }
//       return somme       

// }

// console.log(calculerSchtroumpf (tableaun,tableaudeux) );

//V2

// let tableaun = [20, 19, 3, 4, 5, 6, 10, 3, 6, 2];
// let tableaudeux = [1, 2, 3, 4, 5, 6, 1, 3, 6, 6];

// function calculerSchtroumpf (tableaun,tableaudeux) {

//     let somme = 0

//     for (let i = 0; i <tableaun.length; i++) {

//         somme += ( tableaun[i] * tableaudeux[i])
//     }
//       return somme       

// }

// console.log(calculerSchtroumpf (tableaun,tableaudeux) );






//EXO 9

// let classeMoyenne = [11, 12, 15, 14, 10, 6,];
// let max = 0
// let position = 0
// let notesup = 0
// let somme = 0
// let moyenne = 1


// function notesclass(classeMoyenne) {


//     for (let i = 0; i < classeMoyenne.length; i++) {


//         if (classeMoyenne[i] > max) {
//             max = classeMoyenne[i];
//             position = i + 1 ;

//         }


//     }

//     for (let i = 0; i < classeMoyenne.length; i++){

//         somme += classeMoyenne[i]
//         moyenne = somme / classeMoyenne.length


//        if (classeMoyenne[i] > moyenne){
//             notesup++

//         }

//     }

//     return {
//         max,
//         position,
//         somme,
//         moyenne,
//         notesup,
//     };


// }
// console.log(notesclass(classeMoyenne));

// function morpion() {

//     let gridJeu = [

//         ["x", "o", "x"],
//         ["o", "x", "o"],
//         ["x", "o", "o"],
//     ];
//     let joueurAGagne = null; 

//     for (let i = 0; i < 3; i++) {

//         if (gridJeu[i][0] === gridJeu[i][1] && gridJeu[i][1] === gridJeu[i][2] && gridJeu[i][0] !== "") {
//             joueurAGagne = gridJeu[i][0];
//             break;
//         }

//         if (gridJeu[0][i] === gridJeu[1][i] && gridJeu[1][i] === gridJeu[2][i] && gridJeu[0][i] !== "") {
//             joueurAGagne = gridJeu[0][i];
//             break;
//         }
//     }

//     if (gridJeu[0][0] === gridJeu[1][1] && gridJeu[1][1] === gridJeu[2][2] && gridJeu[0][0] !== "") {
//         joueurAGagne = gridJeu[0][0];
//     } else if (gridJeu[0][2] === gridJeu[1][1] && gridJeu[1][1] === gridJeu[2][0] && gridJeu[0][2] !== "") {
//         joueurAGagne = gridJeu[0][2];
//     }


//     for (let i = 0; i < gridJeu.length; i++) {
//         for (let j = 0; j < gridJeu.length; j++) {
//             if (gridJeu[i][j] === "") {
//                 return "La partie continue";
//             }
//         }
//     }

//     if (joueurAGagne) {
//         return Le joueur ${joueurAGagne.toUpperCase()} a gagné;
//     } else {
//         return "Match nul";
//     }
// }




//Morpion





// function winornot() {

//     let grid = [
//         ["x", "", "o"],
//         ["o", "x", "x"],
//         ["o", "x", "o"],
//     ]

//     let player = null;



//     for (let i = 0; i < grid.length; i++) {


//         if (grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]) {

//             player = grid[i][0];
//             break;

//         } else if (grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]) {
//             player = grid[0][i];


//         }


//     }


//     if (grid[0][2] === grid[2][0] && grid[1][1] === grid[2][0]) {

//         player = grid[0][2];

//     } else if (grid[0][0] === grid[2][2] && grid[1][1] === grid[0][0]) {

//         player = grid[0][0];


//     }
//     for (let i = 0; i < grid.length; i++) {
//         for (let j = 0; j < grid.length; j++) {
//             if (grid[i][j] === "") {
//                 return "La partie continue";
//             }
//         }
//     }



//     if (player) {
//         return player
//     } else {
//         return "match nul"
//     }

// }
// console.log(winornot())







