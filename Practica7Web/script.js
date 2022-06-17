const $numero=document.getElementById("numero")
const $boton=document.getElementById("boton")


const factorial=(n)=>{
    let total=1
    for (let i = 1; i <= n; i++) {
        total=total*i
    }
    return total
}

const factoriales=(n)=>{

    if (n < 1) {
        return [1]
    }

    if (n === 1) {
        return [1,1]
    }

    let lista=[1,1]
    let index=2
    while (index <=n) {
        lista.push(factorial(index))
        index++
    }

    return lista
}


const $area_filas=document.getElementById("area_filas")

$boton.addEventListener("click",()=>{
    // console.log($numero.value)
    // console.log(factoriales($numero.value))

    // se limpian los valores en caso de haber llenado la tabla antes
    
    $area_filas.innerHTML=""
    

    let lista=factoriales($numero.value)

    

    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        
        let $tr=document.createElement("tr")
        

        $tr.innerHTML=`<td>${index} </td>
                        <td>${element} </td>`

        $area_filas.appendChild($tr)
        // console.log($tr)
    }
})


const $filas=document.getElementById("filas")
const $columnas=document.getElementById("columnas")
const $boton2=document.getElementById("boton2")
const $area_tabla=document.getElementById("area_tabla")

$boton2.addEventListener("click",()=>{
    console.log($filas.value,$columnas.value)

    $area_tabla.innerHTML=""

    for (let index = 0; index < filas.value; index++) {

        const $tr=document.createElement("tr")
        $tr.innerHTML=`<td>${index} </td>`
        $area_tabla.appendChild($tr)
        

        for (let index = 1; index < $columnas.value; index++) {
            let $td=document.createElement("td")
            $td.innerText =`${index}`
            $tr.appendChild($td)
            // console.log($tr)
        }
        console.log($tr)
    }
})