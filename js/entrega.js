let carrito = [];

//Archivo recien cargado (Para que no se pierdan los datos)
document.addEventListener("DOMContentLoaded", ()=>{
    const carritoLocal =JSON.parse(localStorage.getItem("productos"))
    if (carritoLocal != null)
    {
        carrito = carritoLocal
    }
    mostrarCarrito()
})

//Carga de productos
const productos = [new Producto(1,"Barrita de cereal", "Comestible", "Ironbar",1,250),new Producto(2,"Proteina","En polvo", "Whey",1, 1500),new Producto(3,"Shaker", "Vaso", "Truemade",1, 800), new Producto(4,"Multivitaminico", "Comestible","Nutrilab",1,600), new Producto(5, "Energizante", "Bebible", "Monster",1 , 470)]


const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");


//Para saber donde esta cada item en cada tarjeta, le agregamos a dataset un dato id que sea el identificador del producto, de esta manera
///cuando hacemos click, sabemos que producto es obteniendo ese dato del atributo dataset de mi objeto.

boton1.addEventListener('click', () => {
  const producto = productos.find((item)=> {
    return item.id === +boton1.dataset.id
  });
  carrito.push(producto);
  localStorage.setItem("productos",JSON.stringify(carrito))
  mostrarCarrito();
});

boton2.addEventListener('click', () => {
  const producto = productos.find((item)=> {
    return item.id === +boton2.dataset.id
  });
  carrito.push(producto);
  localStorage.setItem("productos",JSON.stringify(carrito))
  mostrarCarrito();
});

boton3.addEventListener('click', () => {
  const producto = productos.find((item)=> {
    return item.id === +boton3.dataset.id 
  });
  carrito.push(producto);
  localStorage.setItem("productos",JSON.stringify(carrito))
  mostrarCarrito();
});

boton4.addEventListener('click', () => {
    const producto = productos.find((item)=> {
      return item.id === +boton4.dataset.id
    });
    carrito.push(producto);
    localStorage.setItem("productos",JSON.stringify(carrito))
    mostrarCarrito();
});

boton5.addEventListener('click', () => {
    const producto = productos.find((item)=> {
      return item.id === +boton5.dataset.id
    });
    carrito.push(producto);
    localStorage.setItem("productos",JSON.stringify(carrito))
    mostrarCarrito();
});

//Mostrar la tabla
function mostrarCarrito() {
  const tabla = document.getElementById('producto');
  tabla.innerHTML = ``;
  let counter = 1;

  carrito.forEach((producto) => {
    tabla.innerHTML += `
      <tr>
        <th>${counter}<th>
        <td>${producto.nombre}<td>
        <td>${producto.tipo}<td>
        <td>${producto.marca}<td>
        <td>${producto.cantidad}<td>
        <td>$${producto.precio}<td>
      <tr>
    `;
    counter++;
  })
  tr = document.createElement('tr');
  tr.innerHTML = `<th><th>
                    <td><td>
                    <td><td>
                    <td><td>
                    <td><td>
                    <td><td>
                    <td>$${carrito.reduce((total,item) => total + item.precio,0)}<td>
                    `;
    tabla.appendChild(tr);
}

//Boton de vaciar carrito
const btnVaciar = document.getElementById("vaciar");
btnVaciar.addEventListener("click", () =>{
    carrito = [];
    localStorage.clear()
    mostrarCarrito();
})