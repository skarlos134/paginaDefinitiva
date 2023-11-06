// let cantidad = 300;
let ancho = 10;
let alto = 10;
const porcentaje = 6.25;
const cantidades = [50, 100, 300, 500, 1000];

// // descuentos 100+ 5%,
// 250+ 8%,
// 350 + 10%,
// 500+ 15%,
// 750+ 20%

function calcularAreaPrecio() {
  const valor = ancho * alto * porcentaje;
  return valor;
}

function calcularPrecio() {
  //   return calcularAreaPrecio() * 2;
  const resultados = [];
  cantidades.forEach((element) => {
    const resultado = element * calcularAreaPrecio();
    let precioFinal;

    if (resultado < 15000) {
      precioFinal = 15000;
    }
    if (resultado >= 15000) {
      precioFinal = resultado; //sin descuento
    }
    if (resultado > 100000) {
      precioFinal = resultado * 0.95; //descuendo del 5%
    }
    if (resultado > 200000) {
      precioFinal = resultado * 0.92; //descuendo del 8%
    }
    if (resultado > 300000) {
      precioFinal = resultado * 0.9; //descuendo del 10%
    }
    if (resultado > 400000) {
      precioFinal = resultado * 0.88; //descuendo del 12%
    }
    if (resultado > 500000) {
      precioFinal = resultado * 0.85; //descuendo del 15%
    }
    if (resultado > 1000000) {
      precioFinal = resultado * 0.8; //descuendo del 20%
    }
    resultados.push(precioFinal);
  });

  console.log(resultados);
}

function insertarEnTabla() {
  const tablaHtml = document.querySelector(".tabla");
  cantidades.forEach((cantidad) => {
    let crearFila = tablaHtml.insertRow();
    let insertarCelda1 = crearFila.insertCell();
    let insertarCelda2 = crearFila.insertCell();
    insertarCelda1.textContent = cantidad;
    insertarCelda2.textContent = calcularPrecio()[cantidad];
  });
}
