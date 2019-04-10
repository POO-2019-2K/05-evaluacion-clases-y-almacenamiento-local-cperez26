import Productos from "./Productos.js";
import Producto from "./Producto.js";


class Main {
  constructor() {
    document.querySelector("#btn").addEventListener("click", () => {
      let producto = document.querySelector("#producto");

      if (producto.checkValidity() === true) {
        let numProducto = document.querySelector("#numero").value;
        let name = document.querySelector("#nombre").value;
        let cantidad = document.querySelector("#cantidad").value;
        let precio = document.querySelector("#precio").value;

        

        let objProducto = {
          number : numProducto,  
          name: name,
          cantidad: cantidad,
          precio: precio
        };

        let productos = new Productos(objProducto);

        productos.addProducto(producto);
      }

    });
  }
}

let m = new Main();
