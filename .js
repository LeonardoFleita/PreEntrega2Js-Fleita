function seleccionarProducto(dulceOSalado){
    let seleccion = prompt(`Escriba el nombre del producto que desee ${productosParaImprimir(dulceOSalado)}`);
    let productoEncontrado = dulceOSalado.find((el) => el.nombre.toLowerCase() == seleccion.toLowerCase());
    let cantidad = parseInt(prompt("Escriba el número de la cantidad que desea ordenar"));
    if(productoEncontrado == undefined){
    alert("Ha ingresado una opción errónea");
    }else{
        const productoAgregado = new productoEnCarrito(productoEncontrado.nombre, productoEncontrado.precio, cantidad);
        carrito.push(productoAgregado);
    };     
};