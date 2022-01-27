const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const display = new Display (displayValorActual, displayValorAnterior);

botonesNumeros.forEach(boton =>{
    boton.addEventListener('click',() => {
        display.agregarNumero(boton.innerHTML)
    });
}); 


botonesOperadores.forEach(boton =>{
    boton.addEventListener('click', () => display.computar(boton.value))
});


/*COLOR PICKER*/

/*background*/

window.addEventListener("load", () => {
    const colorItems = document.querySelectorAll('.color-item');
    colorItems.forEach(item =>{
        item.addEventListener('click', function(){
            const idSelected = this.id;
            document.body.className = idSelected;
        })
    })
})

/*Calc color*/

window.addEventListener("load", () => {
    const colorItems = document.querySelectorAll('.color-item2');
    colorItems.forEach(item =>{
        item.addEventListener('click', function(){
            const idSelected = this.id;
            document.getElementById('calc').className= idSelected;
        })
    })
})
