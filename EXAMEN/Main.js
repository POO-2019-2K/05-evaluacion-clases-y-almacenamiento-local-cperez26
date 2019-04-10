import Productos from "./Productos.js";
import Producto from "./productos.js";

class Main {
    constructor() {
        let inventario = new Productos(
            document.querySelector("#inventario"),
            document.querySelector("info")
        );

        document.querySelector("#btn").addEventListener("click", () => {
            let form = document.querySelector("form");

            if (form.checkValidity() == true) {
                let nProducto = document.querySelector("numero");
                let nombre = document.querySelector("#nombre");
                let cantidad = document.querySelector("#cantidad");
                let costo = document.querySelector("#precio");

                let objProducto = {
                    numProducto: numProducto,
                    nombre: nombre,
                    cantidad: cantidad,
                    precio: precio,
                };

                let producto = new Producto(objProducto);

                inventario.addProducto(producto);
            }
            form.classList.add("was-validated")
        });

    }
}

let m = new Main();