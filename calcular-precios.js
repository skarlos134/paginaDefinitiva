let ancho = 4;
let alto = 4;
let comision = 6.25;
let cantidades = [50, 100, 300, 500, 1000];

function calcularArea() {
  return ancho * alto;
}

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
