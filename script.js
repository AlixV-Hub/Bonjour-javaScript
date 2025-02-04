// Crée une variable message dans lequel on va stocker le message : Bonjour !
// Affiche le message dans ta console. Tu devrais avoir le message “Bonjour !” qui apparaît.
// Crée une seconde variable firstname dans lequel on va stocker un prénom. Exemple : Beyonce
// Utilise la variable firstname dans message pour obtenir l’affichage du message : Bonjour Beyonce !
// Attention, ici il s’agit bien de modifier la variable message et non le console.log()

// Let message = "Bonjour !"
// console.log(message)

// let firstName = "Rihanna"
// let message = "Bonjour "+ firstName+ " !"

// console.log(message)

// Encapsule ton code précédent dans une fonction nommée sayHello()
// Appelle la fonction sayHello() dans ton code pour t’assurer que tout continue de fonctionner.
// Tu devrais toujours avoir le message Bonjour Beyonce ! qui s’affiche dans la console.
// Déplace la variable firstname pour qu’elle devienne un paramètre de la fonction sayHello()
// Exécute ton code. Tu devrais obtenir dans ta console Bonjour undefined ! 🤔
// Corrige l’appel de fonction pour retrouver de nouveau le message Bonjour Beyonce !

// function sayHello(firstName){
// let message = "Bonjour "+ firstName+ " !"
// console.log(message)
// }

// sayHello("Rihanna")

// Ajoute un second paramètre hour à la fonction sayHello()
// Ajoute une condition dans ta fonction pour que lorsque hour est supérieur 
// ou égal à 18H, on dise Bonsoir plutôt que Bonjour dans le message

// function sayHello(firstName, hour){
//     if (hour <= 18){
//     let message = "Bonjour "+ firstName+ " !"
//     console.log(message)
//     } else { 
//         let message = "Bonsoir "+ firstName +" !"
//         console.log(message)
//     }
// }
    
//     sayHello("Rihanna",12)
//     sayHello("Rihanna",20)
//     sayHello("Rihanna",1)

// Cette étape peut te paraître assez challenge. N’hésite pas à aller explorer avec d’autres apprenantes la manipulation du DOM (Document Object Model) pour t’aider.

// Dans ton fichier script.js, remplace le console.log() par la ligne suivante :
// document.querySelector('h1').innerText = message;
// Rafraîchis ta page, tu devrais avoir le message Bonjour Beyonce ! qui s’affiche à la place du titre Premier exercice individuel

// Dans ton fichier script.js, ajoute au tout début du fichier la fonction prompt() (documentation)
// Cette fonction retourne la valeur saisie dans le formulaire.
// Ici nous souhaitons récupérer le prénom pour personnaliser le titre en fonction du prénom saisi.
// Attention, n’hésite pas à fermer ta fenêtre et la relancer car avec prompt(), la page ne se rafraîchit pas lorsque la pop-up n’est pas fermée.

// Récupère donc la valeur retournée par la fonction prompt() dans une variable que tu pourras de nouveau réutiliser dans l’appel de ta fonction sayHello()
// Tu devrais dorénavant avoir le titre qui change en fonction du prénom saisi dans le prompt 👀

let firstName= prompt("Coucou petite perruche comment tu t'appelles? :")
console.log(firstName)

let ladate = new Date()
let heure = ladate.getHours()
console.log(heure);
function sayHello(){
    if (heure <= 18){
    let message = "Bonjour "+ firstName + " !"
    document.querySelector('h1').innerText = message;
    } else { 
        let message = "Bonsoir "+ firstName +" !";
        document.querySelector('h1').innerText = message;
    }
}
   
sayHello()
