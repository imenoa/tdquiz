const prompt = require('prompt-sync')()

let tableau = [
    ["Quel est le nom du zanpakutō d'Ichigo Kurosaki?", "(1) Senbonzakura","(2) Hyōrinmaru","(3) Zangetsu","(4) Benihime", 3],
    ["Qui est le capitaine de la 6e division du Gotei 13 ?" ,"(1) Kenpachi Zaraki","(2) Byakuya Kuchiki","(3) Tōshirō Hitsugaya","(4) Sajin Komamura", 2],
    ["Quel est le nom de la ville où vit Ichigo Kurosaki ?" ,"(1) Karakura", "(2) Sereitei","(3) Hueco Mundo","(4) Soul Society", 1],
    ["Quel est le pouvoir spécial des Vizards ?", "(1) Contrôler les Hollows","(2) Utiliser le Bankai sans limite","(3) Maîtriser un masque de Hollow","(4) Voyager entre les dimensions", 3],
    ["Qui est le chef des Espada, les Arrancars les plus puissants ?", "(1) Grimmjow Jaegerjaquez", "(2) Coyote Starrk ","(3) Ulquiorra Schiffer","(4) Baraggan Louisenbairn", 2]

]

let score=0

for (let i = 0; i < tableau.length; i++) {
    
    console.log(tableau[i][0]);

    for (let j = 1; j < tableau[i].length - 1; j++) {
        console.log( tableau[i][j]);
    }
    let reponse = prompt( "quel est ta réponse? ");
    while (isNaN (reponse) || reponse!=1 || choice != 2 || reponse!= 3  ||reponse!=  4 ) {  
        choice = prompt (" invalide! choisi entre92: 1 , 2 , 3 , 4")
    }

    if (parseInt(reponse) === tableau[i][5]) {//prompt est tjrs des strings, s'il faut les convertir en nombre entiero, on utilise parsint.
        score++
        
    }
   
}console.log("Votre score est de: " + score + "/" + tableau.length); 

