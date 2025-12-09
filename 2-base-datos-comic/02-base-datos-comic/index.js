import { comic } from "./bd.js"




const infocomic=document.querySelector(".hero")
const listaCapitulos=document.querySelector(".capitulos-container")
const contenedor=document.querySelector(".card-container")

console.log(listaCapitulos)
console.log(infocomic)
console.log(contenedor)

infocomic.innerHTML =`

    
         <div class="hero-content">
            <h1>${comic.nombrecomic}</h1>
              <p>${comic.sinopsis}</p>
      <div class="hero-buttons">
        <a href="#" class="btn primary">VIVE LA EXPERIENCIA</a>
    
      </div>
    </div>

`
// aqui vamos a mostrar nombre de capitulos

comic.escenas.forEach(escenas=>{
    const micard = document.createElement("div")
    micard.classList.add("cap")
    micard.innerHTML= `
    <a href="escenas.html?id=${escenas.id}">
        <img src="${escenas.image}">
        <h3>${escenas.nombre}</h3>
     </a>   `
    


    listaCapitulos.appendChild(micard)
    
})


comic.personajes.forEach(personajes=>{
    const micard = document.createElement("div")
    micard.classList.add("card")
    micard.innerHTML= `
    <a href="personajes.html?id=${personajes.id}">
        <img src="${personajes.image}">
        <h3>${personajes.nombre}</h3>
       </a> `
    


    contenedor.appendChild(micard)
   
})