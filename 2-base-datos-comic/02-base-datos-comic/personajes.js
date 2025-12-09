import { comic } from "./bd.js"
// URLSearchParams(window.location.search)
/* const parametros = new URLSearchParams("id"); */
const param = new URLSearchParams(window.location.search);
const id = parseInt(param.get("id"))


const personaje = comic.personajes.find(p=> p.id === id)
const contenedor = document.querySelector(".contenedor")

contenedor.innerHTML=`

<div class="imagen" style="background-image:url('${personaje.image}')">

</div>
<div class="informacion">
    <h1>${personaje.nombre}</h1>
    <p>${personaje.descripcion}
    </p>
</div>




`


const obsP = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('in-view');
    })
},{threshold:0.12});

document.querySelectorAll('.imagen, .informacion').forEach(el=> obsP.observe(el));