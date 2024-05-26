// Definiendo los productos y sus precios
const matte = 21;
const pastel = 20;
const dona = 14;
const waffle = 15;
const chocolate = 10;
const malteada = 18;

// Definir funciones

function comprar() {
  do {
    let valor_articulo = 0;
    let nombre_articulo = prompt("Ingrese el artículo " + i);
    const articulo_min = nombre_articulo.toLowerCase();

    switch (articulo_min) {
      case "matte":
        valor_articulo = 21;
        break;

      case "pastel":
        valor_articulo = 20;
        break;

      case "dona":
        valor_articulo = 14;
        break;

      case "waffle":
        valor_articulo = 15;
        break;

      case "chocolate":
        valor_articulo = 10;
        break;

      case "malteada":
        valor_articulo = 18;
        break;

      //si el articulo no es valido lo solicitamos otra vez

      default:
        valor_articulo = 0;
        console.log("No se reconoce el artículo ingresado");
        alert(
          "El artículo ingresado no es válido, por favor inténtelo nuevamente."
        );
        continue;
    }

    //suma de los precios

    console.log("se agregaron al carrito $ " + valor_articulo);
    suma_precio += valor_articulo;
    i++;
  } while (i <= 5);

  let costo_final = suma_precio;

  // mostrar el precio final al usuario

  alert("El costo total del pedido es de $" + costo_final);
  console.log("El costo total del pedido es de $" + costo_final);
}

// Dar la bienvenida al usuario
alert(
  "Bienvenido a la tiendita JavaScript. Contamos con los siguientes productos:"
);

console.log(
  "matte = $21, pastel = $20, dona = $14, waffle = $15, chcolate = $10, malteada = $18"
);

let suma_precio = 0;
let i = 1;

//bucle en el que se pide ingresar articulos

if (confirm("¿Desea comprar algún producto?")) {
  comprar();
}

while (confirm("¿Desea comprar otro producto?")) {
  comprar();
}
