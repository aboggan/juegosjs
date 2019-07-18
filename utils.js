let numeros = [1,2,3,4,5,6,7,8,9]
let sacados = new Array()
let cifrasBuenas = 0
let cifrasRegulares = 0
let nroingresado = document.querySelector('#n1')
let btn_aceptar = document.querySelector('#aceptar')
let btn_volver = document.querySelector('#volver')
let btn_rendirse = document.querySelector('#rendirse')
let btn_nuevo = document.querySelector('#nuevo')
let resultado = document.querySelector('#result')
let historialNroIngresado = document.querySelector('#numerosIngresados')
let final = document.querySelector('#final')

/* Ni yo entiendo como funciona. Pero funciona. Devuelve <true> si hay duplicados. */
const verificarDuplicados = (arr) => {
    let seen = new Set();
    let store = new Array();
    arr.filter(item => seen.size === seen.add(item).size && !store.includes(item) && store.push(item))
    if (store.length == 0){
        return false
    }else{
        return true
    }
}

function obtenerNroRandom(){
    for (let i = 0; i<4; i++){
        let indiceRandom = parseInt(Math.random() * numeros.length);
        sacados.push(numeros[indiceRandom])
        numeros.splice(indiceRandom,1)
    }   
    console.log("numeros sacados",sacados)
}


function habilitar(elemento){
    elemento.removeAttribute('disabled')
}
function deshabilitar(elemento){
    elemento.setAttribute('disabled','disabled')
}
function ocultar(elemento){
    elemento.classList.add('hide')
}
function mostrar(elemento){
    elemento.classList.remove('hide')
}