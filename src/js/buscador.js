document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})

function iniciarApp(){
    buscarPorFecha();
}   

function buscarPorFecha() {
    const fechaInput = document.querySelector('#fecha');
    fechaInput.addEventListener('input', function name(event) {
        const fechaSeleccionada = event.target.value;
        window.location = `?fecha=${fechaSeleccionada}`;       
    })
}