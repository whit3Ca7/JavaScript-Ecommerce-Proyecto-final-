
const ProductosEnCarrito = JSON.parse(localStorage.getItem("Productos-enEl-Carrito"))
const ContenedorCarritoProductos = document.querySelector("#carrito-productos")
const ContenedorAcciones = document.querySelector("#carrito-acciones")
const ContenedorCarritoComprado = document.querySelector("#carrito-comprado")
const BotonBorrarProductos = document.querySelector("#borrar-productos")

function EliminarProductos() {
    BotonBorrarProductos.addEventListener("click", VaciarCarrito)
}

function VaciarCarrito(){
    ProductosEnCarrito.splice(0, ProductosEnCarrito.length)
    localStorage.removeItem("Productos-enEl-Carrito");
    location.reload();
}

EliminarProductos()


if (ProductosEnCarrito) {
    ContenedorCarritoProductos.classList.remove("disabled")
    ContenedorAcciones.classList.remove("disabled")
    ContenedorAcciones.classList.remove("disabled")

    let subtotal = 0;

    ProductosEnCarrito.forEach(prenda => {
        const div = document.createElement("div")
        ContenedorAcciones.classList.add("botones-carrito");
        div.classList.add("producto-imagen");
        div.classList += " container";
        div.innerHTML = ` <img class="img-prod" src="${prenda.imagen}">
        <p><span>${prenda.cantidad}</span></p>
        <p><span>${prenda.precio}</span></p>
    </div>
    `

        ContenedorCarritoProductos.append(div);
        subtotal += prenda.cantidad * prenda.precio;

    })
    
    ContenedorAcciones.className = "acciones";
    ContenedorAcciones.innerHTML = `
        <div class="subtotal-carrito">
            <p>SUBTOTAL: <span>${subtotal}</span></p>
        </div>
        <div class="comprar-producto1">
            
        </div>
    `;

    ContenedorCarritoProductos.append(ContenedorAcciones);
}


const botonCompra = document.querySelector('#Buyy');

botonCompra.addEventListener('click', () => {
    Swal.fire(
        'Compra Exitosa',
      )
  localStorage.removeItem("Productos-enEl-Carrito");
});
