const infocomic=document.querySelector(".infocomic")
const listaCapitulos=document.querySelector(".listacapitulos")

console.log(listaCapitulos)
console.log(infocomic)

infocomic.innerHTML =`
<a href="..."
    <p>${comic.year}</p>
<h1>${comic.nombrecomic}</h1>
<P>${comic.sinopsis}</P>
<P>${comic.genero}</P>
   </a>   
`
// aqui vamos a mostrar nombre de capitulos

/* console.log(comic.escenas) */

comic.escenas.forEach(escenas=>{
    const micard = document.createElement("div")
    micard.classList.add("tarjeta-cap")
    micard.innerHTML= 
    `<a href="..."
    <img src="${escenas.image}">
    <p>${escenas.nombre} <p>
     </a>
    `
    


    infocomic.appendChild(micard)
    console.log(escenas.nombre)
})