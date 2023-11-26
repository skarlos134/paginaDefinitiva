let ancho;
let alto;
let comision = 6.25;
let cantidades = [50, 100, 200, 300, 500, 1000];

function calcularArea() {
  return ancho * alto;
}
//////////////////////////////////////////////////
let seleccionTamano = document.querySelector("#tamano");

function seleccionTamanos() {
  let valorSeleccionado = seleccionTamano.value;
  if (valorSeleccionado == "1") {
    ancho = 3;
    alto = 3;
    correr();
  } else if (valorSeleccionado == "2") {
    ancho = 4;
    alto = 4;
    correr();
  } else if (valorSeleccionado == "3") {
    ancho = 5;
    alto = 5;
    correr();
  } else if (valorSeleccionado == "4") {
    ancho = 6;
    alto = 6;
    correr();
  } else if (valorSeleccionado == "5") {
    let tBody = document.querySelector("tbody");
    tBody.innerText = "";
  }
}

let btnCalcularPrecio = document.querySelector("#btnCalcularPrecio");

btnCalcularPrecio.addEventListener("click", function (event) {
  event.preventDefault(); // Evita la acción predeterminada del botón (submit)
  calcularPrecioTamanoPersonalizado();
});

function calcularPrecioTamanoPersonalizado() {
  ancho = parseFloat(document.querySelector("#ancho").value);
  alto = parseFloat(document.querySelector("#alto").value);
  console.log("Valores de ancho y alto:", ancho, alto);
  correr();
}

seleccionTamano.addEventListener("change", seleccionTamanos);
//////////////////////////////////////////////////
function calcularPrecio() {
  let preciosCantidad = [];
  cantidades.forEach((cantidad) => {
    preciosCantidad.push(calcularArea() * comision * cantidad);
  });
  console.log(preciosCantidad);
  return preciosCantidad;
}

function redondear(valor) {
  return Math.round(valor / 500) * 500;
}

function calcularDesceuto(arreglo) {
  let precioConDescuento = [];
  arreglo.forEach((precio) => {
    if (precio <= 15000) {
      precioConDescuento.push(15000);
    } else if (precio <= 30000) {
      precioConDescuento.push(precio + 5000);
    } else if (precio <= 150000) {
      precioConDescuento.push(precio);
    } else if (precio <= 250000) {
      precioConDescuento.push(precio * 0.95);
    } else if (precio <= 500000) {
      precioConDescuento.push(precio * 0.9);
    } else if (precio <= 800000) {
      precioConDescuento.push(precio * 0.8);
    } else if (precio <= 1000000) {
      precioConDescuento.push(precio * 0.75);
    }
  });
  // console.log(precioConDescuento);
  return precioConDescuento;
  // insertarPreciosEnTabla();
}

function calcularPrecioUnitario(cantidad, valorTotal) {
  return (valorTotal / cantidad).toFixed(1);
}

function insertarPreciosEnTabla(arreglo) {
  const tBody = document.querySelector("tbody");

  arreglo.forEach((precio, index) => {
    const row = tBody.insertRow();

    const cantidad = row.insertCell();
    cantidad.textContent = cantidades[index];

    const vrUnitario = row.insertCell();
    vrUnitario.textContent =
      "$ " + calcularPrecioUnitario(cantidades[index], precio);

    const precios = row.insertCell();
    precios.textContent = "$ " + redondear(precio).toLocaleString();
  });
}

function correr() {
  let precioFinal = calcularDesceuto(calcularPrecio());

  let tBody = document.querySelector("tbody");
  tBody.innerText = "";
  insertarPreciosEnTabla(precioFinal);
}
