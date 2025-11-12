/*Un fichier javascript pour plus tard*/

/*Script qui permet de faire un sons lorsque l'ont clique sur l'un des liens*/
function buoap(){
            let buoap = new Audio();
            buoap.src = "SFX/ROBLOX Sound - button.mp3";
            buoap.play();
        }
function boooo(){
            let boooo = new Audio();
            boooo.src = "SFX/Build (Bass.wav) - Classic Trowel - Roblox.mp3";
            boooo.play();
        }
 /*Methode pour la redirection*/       
function redirection(url){
    window.location.href = url;
}
/*Fin de la methode*/ 

/*Debut de l'événement qui déclanche le son sur le premier lien*/ 
document.getElementById("premierlien").addEventListener("click", (e) => {
   
    buoap();//déclanche le son
    setTimeout(redirection, 525, "dynablock.html")//
    
})

document.getElementById("deuxiemelien").addEventListener("click", (e) => {
   
    boooo();//déclanche le son
    setTimeout(redirection, 600, "Roblox2004-2005.html")//
    
})
/*Fin*/


        