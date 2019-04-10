export default class Producto {
    constructor(producto) {
      this._numProducto = producto.numProducto
      this._name = producto.name.toUpperCase();
      this._cantidad = producto.cantidad;
      this._precio = producto.precio;
    
    }
  
    get numProducto() {
      return this._numProducto;  
    }

    get name() {
      return this._name;
    }
  
    get cantidad() {
      return this._cantidad;
    }
  
    get precio() {
      return this._precio;
    }
  
  }
  