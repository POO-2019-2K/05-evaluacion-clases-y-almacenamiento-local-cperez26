export default class Productos{
  constructor(producto){
      this._numProducto = producto.numProducto;
      this._nombre = producto.nombre;
      this._cantidad = producto.cantidad;
      this._precio = producto.precio;

  }

  get numProducto(){
      return this._numProducto;
  }

  get nombre(){
      return this._nombre;
  }

  get cantidad(){
      return this._cantidad;
  }

  get precio(){
      return this._precio;
  }
}