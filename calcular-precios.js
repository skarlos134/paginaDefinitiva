function calcularPrecios(ancho, alto) {
  const ganancia = 6.25;
  const cantidades = [50, 100, 200, 300, 500, 1000];
  const descuentos = {
    150000: 0.05, // 5% de descuento para cantidades mayores o iguales a 150000
    200000: 0.075, // 7.5% de descuento para cantidades mayores o iguales a 200000
    500000: 0.15, // 15% de descuento para cantidades mayores o iguales a 500000
    1000000: 0.2, // 20% de descuento para cantidades mayores o iguales a 1000000
  };

  const precios = {};

  // Calcular los precios para las cantidades especificadas
  for (const cantidad of cantidades) {
    let precio = ancho * alto * ganancia * cantidad;

    // Aplicar descuentos si corresponde
    for (const descuentoCantidad in descuentos) {
      if (cantidad >= descuentoCantidad) {
        precio *= 1 - descuentos[descuentoCantidad];
      }
    }

    // Redondear el precio al múltiplo de 500 más cercano y asegurarse de que sea al menos 15000
    precio = Math.max(15000, Math.round(precio / 500) * 500);

    precios[cantidad] = precio;
  }

  return precios;
}

const ancho = 10;
const alto = 20;
const preciosCalculados = calcularPrecios(ancho, alto);

for (const cantidad in preciosCalculados) {
  console.log(`Cantidad: ${cantidad}, Precio: $${preciosCalculados[cantidad]}`);
}
