"use strict";
function sumar() {
    const numUno = Number(document.getElementById('numUno').value);
    const numDos = Number(document.getElementById('numDos').value);
    const resultadoInput = document.getElementById('resultado');
    if (resultadoInput) {
        resultadoInput.value = `${numUno + numDos}`;
    }
}
function restar() {
    const numUno = Number(document.getElementById('numUno').value);
    const numDos = Number(document.getElementById('numDos').value);
    const resultadoInput = document.getElementById('resultado');
    if (resultadoInput) {
        resultadoInput.value = `${numUno - numDos}`;
    }
}
function multiplicar() {
    const numUno = Number(document.getElementById('numUno').value);
    const numDos = Number(document.getElementById('numDos').value);
    const resultadoInput = document.getElementById('resultado');
    if (resultadoInput) {
        resultadoInput.value = `${numUno * numDos}`;
    }
}
function dividir() {
    const numUno = Number(document.getElementById('numUno').value);
    const numDos = Number(document.getElementById('numDos').value);
    const resultadoInput = document.getElementById('resultado');
    if (resultadoInput) {
        resultadoInput.value = `${numUno / numDos}`;
    }
}
function resetInputs() {
    const numUnoInput = document.getElementById('numUno');
    const numDosInput = document.getElementById('numDos');
    const resultadoInput = document.getElementById('resultado');
    if (numUnoInput) {
        numUnoInput.value = '';
    }
    if (numDosInput) {
        numDosInput.value = '';
    }
    if (resultadoInput) {
        resultadoInput.value = '';
    }
}
function init() {
    const sumaButton = document.getElementById('suma');
    const restaButton = document.getElementById('resta');
    const multiButton = document.getElementById('multiplicacion');
    const diviButton = document.getElementById('division');
    const resetButton = document.getElementById('reset');
    if (sumaButton) {
        sumaButton.addEventListener('click', sumar);
    }
    if (restaButton) {
        restaButton.addEventListener('click', restar);
    }
    if (multiButton) {
        multiButton.addEventListener('click', multiplicar);
    }
    if (diviButton) {
        diviButton.addEventListener('click', dividir);
    }
    if (resetButton) {
        resetButton.addEventListener('click', resetInputs);
    }
}
// función de inicialización cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', init);
