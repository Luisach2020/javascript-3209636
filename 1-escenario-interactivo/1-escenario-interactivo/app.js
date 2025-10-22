/*1.capturar variables*/
const monedas = document.querySelectorAll(".coin")
const counter = document.querySelector(".contador")
let marcador = 0 
let i = 0 

console.log(monedas) //no puede tener null//
console.log(counter)

/*2.crear las funciones*/
animal.forEach(item => {
    //console.log("Elemento" , item)
  

    item.addEventListener("click" , () => {
        item.classList.add("saltar")
        i++
        score.textContent = i
    })


    item.addEventListener("animationend" , () => {
        item.style.display.add = "none"
    }, {once: true})
});

//3. llamar eventos //