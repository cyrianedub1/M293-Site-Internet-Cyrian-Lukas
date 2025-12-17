/*Script qui permet de faire un sons lorsque l'ont clique sur l'un des liens*/

/*Création de fonctions */
function buoap(){
            let buoap = new Audio();//Création d'une nouvelle variable
            buoap.src = "SFX/ROBLOX Sound - button.mp3";//Accorde la source de la variable à l'audio
            buoap.play();//Joue le son
            }
function boooo(){
            let boooo = new Audio();
            boooo.src = "SFX/Build (Bass.wav) - Classic Trowel - Roblox.mp3";
            boooo.play();
            }
function startupSFX(){
            let startupSFX = new Audio();
            startupSFX.src = "SFX/Windows7-StartupSound.mp3";
            startupSFX.play();
}

 /*Methode pour la redirection*/       
function redirection(url){
    window.location.href = url;
}
/*Fin de la methode*/ 

/*Debut de l'événement qui déclanche le son sur le premier lien*/ 

document.getElementById("accueil").addEventListener("click", (e) => {
   
    buoap();//déclanche le son
    setTimeout(redirection, 525, "index.html")//Met un temps d'attente de 525ms puis déclanche la fonction 'redirection' qui redirige sur le lien choisi 
    
})

document.getElementById("premierlien").addEventListener("click", (e) => {
   
    buoap();//déclanche le son
    setTimeout(redirection, 525, "dynablock.html")///Met un temps d'attente de 525ms puis déclanche la fonction 'redirection' qui redirige sur le lien choisi 
    
})

            
document.getElementById("3emelien").addEventListener("click", (e) => {
    
    boooo();//déclanche le son
    setTimeout(redirection, 600, "Roblox2006-2017.html")//Met un temps d'attente de 525ms puis déclanche la fonction 'redirection' qui redirige sur le lien choisi 
    
})


const toggleButton = document.getElementById('toggleButton');
const liensContainer = document.getElementById('liensContainer');

toggleButton.addEventListener('click', function() {

    startupSFX();
    liensContainer.classList.toggle('hidden');
});
/*Fin*/
