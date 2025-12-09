import { comic } from "./bd.js"




const infocomic=document.querySelector(".hero")
const listaCapitulos=document.querySelector(".capitulos-container")
const contenedor=document.querySelector(".card-container")

console.log(listaCapitulos)
console.log(infocomic)
console.log(contenedor)

// Construimos un carrusel usando las imágenes de las escenas
const carouselSlides = comic.escenas.map(e => e.image).slice(0,5);

infocomic.innerHTML =`
  <div class="carousel" aria-hidden="true">
    ${carouselSlides.map((src, i)=>`<div class="slide ${i===0? 'active':''}" style="background-image:url('${src}')"></div>`).join('')}
  </div>
  <div class="hero-content animate fade-up">
    <h1>${comic.nombrecomic}</h1>
    <p>${comic.sinopsis}</p>
    <div class="hero-buttons">
      <a href="#" class="btn primary">VIVE LA EXPERIENCIA</a>
    </div>
  </div>
`

// Carrusel: rotación automática
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel .slide');
function showSlide(index){
  slides.forEach((s,i)=> s.classList.toggle('active', i===index));
}
if(slides.length){
  setInterval(()=>{
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000);
}
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

// Observer para animaciones de entrada
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
    }
  });
},{threshold:0.15});

document.querySelectorAll('.animate, .card, .cap, .hero-content').forEach(el=> observer.observe(el));