class Producto {
    nombre;
    tipo;
    marca;
    cantidad;
    precio;
    id;

constructor (id,nombre,tipo,marca,cantidad,precio){

    this.id = id
    this.nombre = nombre
    this.tipo = tipo
    this.marca = marca
    this.cantidad = cantidad
    this.precio = precio
}

    subTotal = () => {
        return this.precio*this.cantidad;
    }
}