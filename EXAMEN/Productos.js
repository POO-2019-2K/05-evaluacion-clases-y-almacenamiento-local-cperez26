
export default class Productos {
  constructor(tableProducto, tableInfo) {
    this._tableProducto = tableProducto;
    this._tableInfo = tableInfo;
    this._numProductos = 0;
    this._precio = 0;
    this._productos = [];
    this._initTables();
  }

  _initTables() {
    let lsProductos = JSON.parse(localStorage.getItem("producto"));

    if (lsProductos === null) {
      return;
    }
    

  }

  _addToTable(producto) {
    let row = this._table.insertRow(-1);

    let cellNumber = row.insertCell(0);
    let cellName = row.insertCell(1);
    let cellCantidad = row.insertCell(2);
    let cellPrecio = row.insertCell(3);
    
    cellNumber.innerHTML = producto.number;
    cellName.innerHTML = producto.name;
    cellCantidad.innerHTML = producto.cantidad;
    cellPrecio.innerHTML = producto.precio;
    

    this._numProductos = document.querySelector("#cantidad");
    this._precio = document.querySelector("#precio"); 

    this._tableInfo.rows[0].cells[1].innerHTML = this._numProductos;


    let objProductos = {
      number: producto.number,  
      name: producto.name,
      cantidad: producto.cantidad,
      precio: producto.precio
    };

    this._productos.push(objProductos);
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