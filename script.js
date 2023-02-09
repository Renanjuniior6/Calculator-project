function addCaracter (caracter) {
    const valor = document.querySelector(".display").value 

    document.querySelector(".display").value = valor + caracter
}

function cleanup () {
    document.querySelector(".display").value = ""
}

function calc () {
    const valor = document.querySelector(".display").value 

    document.querySelector(".display").value = eval(valor) // eval: propriedade do JS que faz calculos//
}

function invertNumber () {
    const valor = document.querySelector(".display").value 

    document.querySelector(".display").value = valor * -1
}