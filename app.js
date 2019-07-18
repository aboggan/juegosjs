window.onload = ()=>{

    obtenerNroRandom()

    btn_aceptar.addEventListener('click',intentar)
    btn_volver.addEventListener('click', volverIntentar)
    btn_rendirse.addEventListener('click', terminarJuego)
    btn_nuevo.addEventListener('click',nuevoJuego)
    nroingresado.addEventListener('keypress',
    function(event){
        let char = event.charCode || event.keyCode
        if (char < 49 || char > 57){
            event.preventDefault()
        }
    })
}

function intentar(){
    let ingresados = new Array()
    let arrayIngresado = nroingresado.value.split('')
    
    for (let i = 0; i < 4; i++) {
        if(isNaN(Number(arrayIngresado[i]))){
            alert("Cuatro numeros porfa")
            nroingresado.focus()
            return false
        }
        ingresados.push(Number(arrayIngresado[i]))
    }
    if (verificarDuplicados(ingresados)){
        alert("Sin numeros duplicados")
        nroingresado.focus()
        return false
    }

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

    if(cifrasBuenas == 4){
        alert("zarpado! ganaste!")
        mostrarGanador()
        return false
    }

    mostrar(resultado)

    //Hacer que tiemble
    resultado.classList.add('apply-shake')

    resultado.innerHTML = cifrasBuenas + " Cifras buenas - " +cifrasRegulares+" Cifras regulares"
    
    deshabilitar(nroingresado)
    deshabilitar(btn_aceptar)

    habilitar(btn_volver)
    habilitar(btn_rendirse)  
    habilitar(btn_nuevo)
}

function volverIntentar(){
    habilitar(nroingresado)
    habilitar(btn_aceptar)
    mostrar(historialNroIngresado)

    let listitem = document.createElement("li");
    listitem.classList.add('list-inline-item')
    listitem.innerHTML = nroingresado.value  

    historialNroIngresado.querySelector('#lista').appendChild(listitem)

    nroingresado.value = ''
    
    cifrasBuenas = 0
    cifrasRegulares = 0

    //Quitar el shake para poder animarlo de nuevo en el futuro
    resultado.classList.remove('apply-shake')

    nroingresado.focus()
    deshabilitar(btn_volver)
}

function terminarJuego(){
    deshabilitar(btn_volver)
    deshabilitar(btn_rendirse)
    ocultar(resultado)
    mostrar(final)
    let numeroFinalSacado = '';
    for (let i = 0; i < sacados.length; i++) {
        numeroFinalSacado += sacados[i].toString();
        
    }
    
    //Quitar el shake para poder animarlo de nuevo en el futuro
    resultado.classList.remove('apply-shake')
    final.innerHTML= "El numero era: "+numeroFinalSacado
}

function nuevoJuego(){
    numeros = [1,2,3,4,5,6,7,8,9]
    sacados = new Array()
    cifrasBuenas = 0
    cifrasRegulares = 0
    obtenerNroRandom()

    //Limpio la lista
    historialNroIngresado.querySelector('#lista').innerHTML = ''

    ocultar(historialNroIngresado)
    ocultar(resultado)
    ocultar(final)

    //Quitar el shake para poder animarlo de nuevo en el futuro
    resultado.classList.remove('apply-shake')
    
    habilitar(btn_aceptar)

    habilitar(nroingresado)
    nroingresado.value = ''
    nroingresado.focus()

    deshabilitar(btn_rendirse)
    deshabilitar(btn_volver)
    deshabilitar(btn_nuevo)
}

function mostrarGanador(){
    mostrar(final)
    let numeroFinalSacado = '';
    for (let i = 0; i < sacados.length; i++) {
        numeroFinalSacado += sacados[i].toString();       
    }
    final.innerHTML = "ZARPADO! GANASTE! El numero era: "+numeroFinalSacado
 
    deshabilitar(nroingresado)
    deshabilitar(btn_aceptar)
    deshabilitar(btn_rendirse)

    ocultar(resultado)
    habilitar(btn_nuevo)
}
