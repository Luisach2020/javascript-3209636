import { comic } from "./bd.js"
// URLSearchParams(window.location.search)
/* const parametros = new URLSearchParams("id"); */
const param = new URLSearchParams(window.location.search);
const id = parseInt(param.get("id"))


const escenas = comic.escenas.find(p=> p.id === id)
const contenedor = document.querySelector(".padre")
console.log(escenas)

contenedor.innerHTML=`




 <section class="hero">

 <div class="video">
      <video src="${escenas.video}" controls></video>
    </div>

   
    <div class="hero-info">
      <h1>${escenas.nombre}</h1>


      <button class="btn play">▶ Play S1 E1</button>
      <button class="btn download">⬇ Download</button>

    </div>
  </section>

  <section class="description">
    <P>${escenas.descripcion}</P>
   
    <h1>${escenas.ver}</h1>
  </section>




`