// let cantidad = 300;
// let ancho = 7.5;
// let alto = 7.5;

let ancho;
let alto;

document.querySelector("#tamano").addEventListener("change", (event) => {
  let opciones = document.querySelector("#tamano").value;

  switch (opciones) {
    case "1":
      ancho = 3;
      alto = 3;
      break;
    case "2":
      ancho = 4;
      alto = 4;
      break;
    case "3":
      ancho = 5;
      alto = 5;
      break;
    case "4":
      ancho = 6;
      alto = 6;
      break;
    case "5":
      ancho = document.querySelector("#ancho").value;
      alto = document.querySelector("#alto").value;
      break;
  }
  // tbody.innerHTML = "";
  calcularYInsertarEnTabla();
});

const porcentaje = 6.25;
const cantidades = [50, 100, 300, 500, 1000];

const tamanosStandar = document.querySelector(".tamano");

// // descuentos 100+ 5%,
// 250+ 8%,
// 350 + 10%,
// 500+ 15%,
// 750+ 20%

function calcularAreaPrecio() {
  const valor = ancho * alto * porcentaje;
  return valor;
}

function calcularPrecio(cantidad) {
  const resultado = cantidad * (ancho * alto * porcentaje);

  if (resultado < 15000) {
    return 15000;
  } else if (resultado <= 100000) {
    return resultado; // Sin descuento
  } else if (resultado <= 200000) {
    return resultado * 0.95; // Descuento del 5%
  } else if (resultado <= 300000) {
    return resultado * 0.92; // Descuento del 8%
  } else if (resultado <= 400000) {
    return resultado * 0.9; // Descuento del 10%
  } else if (resultado <= 500000) {
    return resultado * 0.88; // Descuento del 12%
  } else {
    return resultado * 0.85; // Descuento del 15%
  }
}

function calcularYInsertarEnTabla() {
  const tablaHtml = document.querySelector(".tabla");
  cantidades.forEach((cantidad) => {
    let crearFila = tablaHtml.insertRow();
    let insertarCelda1 = crearFila.insertCell();
    let insertarCelda3 = crearFila.insertCell();
    let insertarCelda2 = crearFila.insertCell();
    insertarCelda1.textContent = cantidad;
    insertarCelda2.textContent =
      "$ " +
      (Math.round(calcularPrecio(cantidad) / 500) * 500).toLocaleString();
    insertarCelda3.textContent =
      "$ " +
      Math.round(
        (Math.round(calcularPrecio(cantidad) / 500) * 500) / cantidad
      ).toLocaleString();
  });
}

calcularYInsertarEnTabla();
