let hojas="";
[15,1,1,2].forEach(function(a){
    Array(a).fill("").forEach(function(x,i){
        hojas+=([...Array(1+i).fill("<span class='colores'>*~*</span>")].join(""))+"<br>"

    })
})
document.querySelector(".arbol").innerHTML=hojas;
//vamos ponerle colores
let colores=document.querySelectorAll(".colores");
function animacion(){
    for(let i=0; i<colores.length;i++){
        let tiempo=i/200+1;
        colores[i].style.animation="color "+tiempo+"s infinite";
    }
}
window.addEventListener("load", animacion)