
let numeros = [1,2,3,4,5,6,7,8,9]
let sacados = new Array()
let cifrasBuenas = 0
let cifrasRegulares = 0
let nroingresado = document.querySelector('#n1')
let nrosIntentados = new Array()
window.onload = ()=>{
    let btn_aceptar = document.querySelector('#aceptar')
    btn_aceptar.addEventListener('click',intentar)
    obtenerNroRandom()

    nroingresado.addEventListener('keypress',
    function(event){
        let char = event.charCode || event.keyCode
        if (char < 49 || char > 57){
            event.preventDefault()
        }
    })


}


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

function intentar(){
    let ingresados = new Array()
    let arrayIngresado = nroingresado.value.split('')
    

    for (let i = 0; i < 4; i++) {
        if(isNaN(Number(arrayIngresado[i]))){
            alert("Cuatro numeros porfa")
            return false
        }
        ingresados.push(Number(arrayIngresado[i]))
    }
    console.log(verificarDuplicados(ingresados))

    
    if ( verificarDuplicados(ingresados)){
        alert("Sin numeros duplicados")
        return false
    }
    console.log("numeros ingresados",ingresados)

    ingresados.some((nro_ingresado, posicion_ingresado)=>{
        sacados.some((nro_sacado, posicion_sacado)=>{
            if (nro_ingresado == nro_sacado){
                if(posicion_ingresado == posicion_sacado){
                    cifrasBuenas++
                }else{
                    cifrasRegulares++
                }
            }
        })

    })

    nrosIntentados.push(nroingresado)
    let resultado = document.querySelector('#result')
    let numerosIngresados = document.querySelector('#numerosIngresados')

    resultado.classList.remove('hide')
    resultado.innerHTML = cifrasBuenas + " Cifras buenas - " +cifrasRegulares+" Cifras regulares"
    
    //numerosIngresados.classList.remove('hide')
    numerosIngresados.innerHTML += nroingresado.value


    cifrasBuenas = 0
    cifrasRegulares = 0

}

function obtenerNroRandom(){
    for (let i = 0; i<4; i++){
        let indiceRandom = parseInt(Math.random() * numeros.length);
        sacados.push(numeros[indiceRandom])
        numeros.splice(indiceRandom,1)
    }   
    console.log("numeros sacados",sacados)
}