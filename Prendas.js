const numerito = document.querySelector("#carrito-numero")
const ContenedorPrendas = document.querySelector("#Contenedor-prendas");
const URL = './productos.json'
const Prendas = []

fetch(URL)
    .then((response) => response.json())
    .then((data)=> Prendas.push(...data))
    .then(()=> CargarPrendas(Prendas))

function CargarPrendas(Prendas) {
    Prendas.forEach(prenda => {
        const div = document.createElement("div");
        div.classList.add("card")
        div.innerHTML = `
            <img src="${prenda.imagen}" alt="${prenda.titulo}">
            <h3>${prenda.titulo}</h3>
            <p>Descripción del producto</p>
            <p class="precio-card">Precio: $ ${prenda.precio}</p>
            <button class="producto-agregar" id="${prenda.id}" >Agregar al carrito</button>
        `;

        ContenedorPrendas.append(div);
    });

    actualizarbotones()
}

function actualizarbotones() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    });
}

const Carrito = []

function agregarAlCarrito(e){
    const idboton = e.currentTarget.id;
    const ProductoAgregado = Prendas.find(prenda => prenda.id === idboton);

   if(Carrito.some(prenda => prenda.id === idboton)){
    const index = Carrito.findIndex(prenda => prenda.id === idboton)
    Carrito[index].cantidad++;
    
   }else {
    ProductoAgregado.cantidad = 1;
    Carrito.push(ProductoAgregado);
   }
   
   ActualizrNumero()

   localStorage.setItem("Productos-enEl-Carrito", JSON.stringify(Carrito))
}

function ActualizrNumero(){
    let Nuevonumerito = Carrito.reduce((acc, prenda)=> acc + prenda.cantidad, 0)
    numerito.innerText = Nuevonumerito
}