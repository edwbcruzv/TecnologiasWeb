const $btn_push = document.getElementById("btn_push")
const $btn_pop = document.getElementById("btn_pop")
const $btn_tope = document.getElementById("btn_tope")

const lienzo=document.getElementById("lienzo")







$btn_push.addEventListener("click",()=>{

    let valor=prompt("Ingrese nuevo tope")

    console.log("push",valor)
})

$btn_pop.addEventListener("click",()=>{

    console.log("pop")
})

$btn_tope.addEventListener("click",()=>{

    console.log("tope")
})