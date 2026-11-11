// Seleccionamos el input que sirve de pantalla
const pantalla = document.getElementById('pantalla');

// Función para concatenar números y operadores en la pantalla
function agregarValor(valor) {
    pantalla.value += valor;
}

// Función para vaciar la pantalla
function limpiar() {
    pantalla.value = '';
}

// Función para calcular el resultado de la expresión
function calcular() {
    try {
        // eval() toma un string como "2+2" y lo procesa matemáticamente
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = 'Error';
    }
}