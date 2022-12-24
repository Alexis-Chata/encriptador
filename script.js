
const inputTexto = document.getElementById('texto');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
let inputResultado = document.getElementById('msjs');

const soloLetras = '^[a-z !ñ,.]+$';

btnEncriptar.addEventListener('click', encriptarTexto);
btnDesencriptar.addEventListener('click', desencriptarTexto);


function encriptarTexto() {
    console.log('encriptar');
    let texto = inputTexto.value;

    if (texto.match(soloLetras) != null) {
        let palabras = texto.split(' ');
        let nuevasPalabras = [];

        for (let palabra of palabras) {
            palabra = palabra.replaceAll('e', 'enter');
            palabra = palabra.replaceAll('i', 'imes');
            palabra = palabra.replaceAll('a', 'ai');
            palabra = palabra.replaceAll('o', 'ober');
            palabra = palabra.replaceAll('u', 'ufat');

            nuevasPalabras.push(palabra);
        }

        const resultado = nuevasPalabras.join(' ');

        inputResultado.innerHTML = "<p class='msjencriptado t-justify' id ='msjencriptado'></p><button type='button' class='desencriptar' id='btn-copiar'><p>copiar</p></button>"

        let mensajeEncriptado = document.getElementById('msjencriptado');
        const btnCopiar = document.getElementById('btn-copiar');

        btnCopiar.addEventListener('click', copiarTexto);

        mensajeEncriptado.innerText = resultado;
    } else {
        mostrarError();
    }
}

function desencriptarTexto() {
    let texto = inputTexto.value;

    if (texto.match(soloLetras) != null) {
        let palabras = texto.split(" ");
        let nuevasPalabras = [];

        for (let palabra of palabras) {
            palabra = palabra.replaceAll('enter', 'e');
            palabra = palabra.replaceAll('imes', 'i');
            palabra = palabra.replaceAll('ai', 'a');
            palabra = palabra.replaceAll('ober', 'o');
            palabra = palabra.replaceAll('ufat', 'u');
            nuevasPalabras.push(palabra);
        }

        const resultado = nuevasPalabras.join(' ');

        inputResultado.innerHTML = "<p class='msjencriptado t-justify' id ='msjencriptado'></p><button type='button' class='desencriptar' id='btn-copiar'><p>copiar</p></button>"

        let mensajeEncriptado = document.getElementById('msjencriptado');
        const btnCopiar = document.getElementById('btn-copiar');

        btnCopiar.addEventListener('click', copiarTexto);

        mensajeEncriptado.innerText = resultado;
    } else {
        mostrarError();
        return;
    }
}

function mostrarError() {
    const textresticciones = document.getElementById('textresticciones');
    textresticciones.classList.add('error');

    setTimeout(() => {
        textresticciones.classList.remove('error');
    }, 3000);
}

function copiarTexto() {

    let mensajeEncriptado = document.getElementById('msjencriptado');
    const mensaje = mensajeEncriptado.innerText;

    navigator.clipboard.writeText(mensaje);
}