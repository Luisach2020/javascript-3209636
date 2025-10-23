const animal = document.querySelectorAll(".animales")
const counter = document.querySelector(".contador")
let i = 0
let j = 0 

console.log(animal)
console.log(counter)


animal.forEach(item => {
    //console.log("Elemento" , item)
  

    item.addEventListener("click" , () => {
        item.classList.add("saltar")
    })

    i++ 
    counter.

    item.addEventListener("animationend" , () => {
        item.computedStyleMap.display = "none"
    }, {once: true})
});