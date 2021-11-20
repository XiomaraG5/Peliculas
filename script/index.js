

document.addEventListener("DOMContentLoaded",()=>{
    loadImageInDOM(peliculas);
});


const  carrusel = document.getElementById(`carrusel`);
const  transladarDerecha = document.getElementById(`derecha`);
const  transladarIzquierda = document.getElementById(`izquierda`)
const principal = document.querySelector("#principal");

const peliculas = [
    {
     id : 1,
     name : "Ahora o nunca",
     imagen : "./imagenes/AhoraONunca.jpg"
     },
     {
     id : 2,
     name : "Antes del amanecer",
     imagen : "./imagenes/antesDelamanecer.jpg"
     },
     {
     id : 3,
     name : "Criadas y señoras",
     imagen : "./imagenes/criadasYSeñoras.jpg"
     },
     {
     id : 4,
     name : "Discurso del rey",
     imagen : "./imagenes/discursoDelRey.jpg"
     },
     {
     id : 5,
     name : "El protector",
     imagen : "./imagenes/El-Protector.jpg"
     },
     {
     id : 6,
     name : "El niño que domó el viento",
     imagen : "./imagenes/ElNiñoDomoViento.png"
     },
     {
     id : 7,
     name : "Padre del año",
     imagen : "./imagenes/padreDelAno.jpg"
     },
     {
     id : 8,
     name : "Invencible",
     imagen : "./imagenes/invencible.jpg"
     },
     {
     id : 9,
     name : "La milla verde",
     imagen : "./imagenes/la+milla+verde.jpg"
     },
     {
     id : 10,
     name : "Rudy",
     imagen : "./imagenes/Rudy.jpg"
     },
     {
     id : 11,
     name : "Soul",
     imagen : "./imagenes/Soul.jpg"
     },
     {
     id : 12,
     name : "Un ninja en Beverly Hills",
     imagen : "./imagenes/Un_ninja_en_Beverly_Hills-662571371-large.jpg"
     },
     {
     id : 13,
     name : "Una oraración antes del amanecer",
     imagen : "./imagenes/Una_oracion_antes_del_amanecer.jpg"
     }
 ];


const fragment = document.createDocumentFragment();



const loadImageInDOM = (peliculas) =>{
    peliculas.forEach(element => {
        let card = document.createElement("img")
        card.setAttribute(`src`,element.imagen)
        card.setAttribute(`class`,`img`)
        card.dataset.id = element.id;
        card.cloneNode(true);
        
        fragment.appendChild(card);
        carrusel.appendChild(fragment)

        
        card.addEventListener(`click`,()=>{
            let tituloImg = document.createElement("h3");
            tituloImg.setAttribute(`class`,`tituloImg`)
            tituloImg.textContent = element.name;
            fragment.appendChild(tituloImg);
            principal.appendChild(tituloImg);


            let clone = document.createElement("img");
            clone.setAttribute(`src`,element.imagen)
            clone.setAttribute(`class`,"imgGrande")
            fragment.appendChild(clone)
            principal.appendChild(fragment)
            
        });
    });

}
let i = 0;

transladarDerecha.addEventListener(`click`,()=>{
    if(i<7){
    i++
    let movimiento = i*15;
    carrusel.style.transform=`translateX(${movimiento}%)`
    }else{
        
        i = 0;
    }
});
transladarIzquierda.addEventListener(`click`,()=>{
    if (i<7){
    i++
    let movimiento = i*-15;
    carrusel.style.transform=`translateX(${movimiento}%)`
    }else{
        i = 0;
    }
});
