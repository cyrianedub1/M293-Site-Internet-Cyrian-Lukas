/*Script qui permet de faire un sons lorsque l'ont clique sur l'un des liens*/

/*Création de fonctions */
function buoap() {
  let buoap = new Audio(); //Création d'une nouvelle variable
  buoap.src = "SFX/ROBLOX Sound - button.mp3"; //Accorde la source de la variable à l'audio
  buoap.play(); //Joue le son
}
function boooo() {
  let boooo = new Audio();
  boooo.src = "SFX/Build (Bass.wav) - Classic Trowel - Roblox.mp3";
  boooo.play();
}
function startupSFX() {
  let startupSFX = new Audio();
  startupSFX.src = "SFX/Windows7-StartupSound.mp3";
  startupSFX.play();
}

/*Methode pour la redirection*/
function redirection(url) {
  window.location.href = url;
}
/*Fin de la methode*/

/*Debut de l'événement qui déclanche le son sur le premier lien*/

document.getElementById("accueil").addEventListener("click", (e) => {
  buoap(); //déclanche le son
  setTimeout(redirection, 525, "index.html"); //Met un temps d'attente de 525ms puis déclanche la fonction 'redirection' qui redirige sur le lien choisi
});

document.getElementById("premierlien").addEventListener("click", (e) => {
  buoap(); //déclanche le son
  setTimeout(redirection, 525, "dynablock.html"); //Met un temps d'attente de 525ms puis déclanche la fonction 'redirection' qui redirige sur le lien choisi
});

document.getElementById("3emelien").addEventListener("click", (e) => {
  boooo(); //déclanche le son
  setTimeout(redirection, 600, "Roblox2006-2017.html"); //Met un temps d'attente de 525ms puis déclanche la fonction 'redirection' qui redirige sur le lien choisi
});

document.getElementById("4emelien").addEventListener("click", (e) => {
  boooo(); //déclanche le son
  setTimeout(redirection, 600, "RobloxModern.html"); //Met un temps d'attente de 525ms puis déclanche la fonction 'redirection' qui redirige sur le lien choisi
});
document.getElementById("5emelien").addEventListener("click", (e) => {
  buoap(); //déclanche le son
  setTimeout(redirection, 600, "RobloxActuel.html"); //Met un temps d'attente de 525ms puis déclanche la fonction 'redirection' qui redirige sur le lien choisi
});


//Début du code qui fait en sorte que quand tu clique sur le bouton Start les boutons qui dirigent vers les autres pages soient visible
const toggleButton = document.getElementById("toggleButton");
const liensContainer = document.getElementById("liensContainer");

toggleButton.addEventListener("click", function () {
  startupSFX();
  liensContainer.classList.toggle("hidden");
});
//Fin

/*Fin*/

// // Code bonus à voir si on le garde ou pas 
// //Le code en bas permet d'afficher une alerte de bienvenue en fonction de la page actuelle


// // Si la page actuelle est "index.html" et cela se repète pour chaque page car on utilise else if pour chaque page
// if (window.location.pathname.endsWith("index.html")) {
//   // Affiche une alerte de bienvenue
//   alert("Bienvenue sur le site sur l'Histoire de Roblox !");
// }
// //si le nom du chemin de la page fini par "dynablock.html" alors une alerte se lance 
// else if(window.location.pathname.endsWith("dynablock.html")){
//   alert("Bienvenue dans la section Dynablock !");
// }
// //si le nom du chemin de la page fini par "Roblox2006-20l7.html" alors une alerte se lance 
// else if(window.location.pathname.endsWith("Roblox2006-2017.html")){
//   alert("Bienvenue dans la section Roblox 2006-2017 !");
// }
// //si le nom du chemin de la page fini par "RobloxModern.html" alors une alerte se lance 
// else if(window.location.pathname.endsWith("RobloxModern.html")){
//   alert("Bienvenue dans la section Roblox Moderne !");
// }

// // Fin du code bonus