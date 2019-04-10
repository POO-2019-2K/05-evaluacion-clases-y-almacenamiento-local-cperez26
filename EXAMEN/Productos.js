import Producto from "./productos.js";

export default class Productos {
    constructor(tableInventario, tableInfo) {
        this._tableInventario = tableInventario;
        this._tableInfo = tableInfo;
        this._numProductos = 0;

        this._productos = [];

        this._initTables();
    }

    _initTables() {
        let lsProductos = JSON.parse(localStorage.getItem("productos"));

        if (lsProductos == null) {
            return;
        }


        lsProductos.forEach((e, index) => {
            this._addToTable(new Producto(producto));
        });
    }

    _addToTable(producto) {
        let row = this._tableInventario.insertRow(-1);

    let cellnumProducto = row.insertCell(0);
    let cellNombre = row.insertCell(1);
    let cellCantidad = row.insertCell(2);
    let cellPrecio= row.insertCell(3);

    cellnumProducto.innerHTML = producto.numProducto;
    cellNombre.innerHTML = producto.nombre;
    cellCantidad.innerHTML = producto.cantidad;
    cellPrecio.innerHTML = producto.precio;

    this._numProductos++;

    this._tableInfo.rows[0].cells[1].innerHTML = this._numProductos;


    let objProductos = {
      numProducto: producto.numProducto,
      nombre: producto.nombre,
      cantidad: producto.cantidad,
      precio: producto.precio
      
    };

    this._productos.push(objProductos);
    }

  _findProducto(numProducto) {
      let foundAt = -1;

      this._productos.forEach((e, index) => {
          if(e.nProducto === numProducto) {
              foundAt = index;
              return;
          }
      });

      return foundAt;
  }

    addProductos(producto) {
        let found = this.findProducto(producto.numProducto);

        if(found >=0) {
            swal.fire({
                type: "error",
                title: "Error",
                text: "El numero de producto ya fue registrado"
            });
            return;
        }

        this._addToTable(producto);
        localStorage.setItem("producto", JSON.stringify(this._productos));
    }

    

    lessProducto(producto) {
        let found = this.findProducto(producto.numProducto);

        if(found >= 0) {
            
        }
    }
    }
  

  addEmployee(producto) {
    let found = this._addToTable;

    if(found >= 0) {
      Swal.fire({
        type:"error",
        title: "Error",
        text: "El producto ya existe"
      });
      return;
    }
  
    this._addToTable(producto);
    localStorage.setItem("producto", JSON.stringify(this._productos));
  }
}
