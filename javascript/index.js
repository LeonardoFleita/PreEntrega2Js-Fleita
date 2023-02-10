
//DECLARACION DE VARIABLES

//se la llama en la función registroDeCliente()
let clienteRegistrado = 0;

//DECLARACION DE ARRAYS

const dulces = [];
const salados = [];
const clientes = [{nombre: 'Leonardo', apellido: 'Fleita', telefono: "1150002222", direccion: "direccion 1234", dni: 33333333, numeroDeCliente: 1}];
const carrito = [];
const ordenDeCompra = [];

//DECLARACION DE CONSTRUCTORES

function producto(nombre, precio, descripcion){
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.descripcion = descripcion;
};

function productoEnCarrito(nombre, precioUnidad, cantidad){
    this.nombre = nombre;
    this.precioUnidad = parseInt(precioUnidad);
    this.cantidad = parseInt(cantidad);
    this.precioSubTotal = precioUnidad * cantidad;
}

class client{
    constructor(nombre, apellido, telefono, direccion, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
        this.dni = parseInt(dni);
    };
};

//CREACION DE OBJETOS PARA LOS ARRAY

const redVelvet = dulces.push(new producto("Red velvet", 6500, "Torta de chocolate de color rojo brillante recubierta por capas de glaseado de queso cremoso"));
const bruceBolanos = dulces.push(new producto("Bruce Bolanos", 5000, "Bomba de chocolate"));
const lemonPie = dulces.push(new producto("Lemon pie", 2000, "Torta de limón"));
const cheeseCake = dulces.push(new producto("Cheese cake", 2500, "Torta de queso cubierta de frutos rojos"));
const panDeJamon = salados.push(new producto("Pan de jamon", 3000, "Arrollado de pan relleno de jamón, queso cremoso, aceitunas y pasas de uva"));
const scon = salados.push(new producto("Scon de queso", 1000, "Scones sabor queso, bolsa de 6 unidades"));

//array productos que une dulces y salados, si la declaro arriba no funciona, no se por qué.
const productos = dulces.concat(salados);

//DECLARACION DE FUNCIONES

//Al ingresar el cliente le pregunta si ya ha comprado, si la respuesta es "no" el usuario se registra,si la respuesta es "si" lo busca por dni y le da la bienvenida, si no lo encuentra le dice que no está registrado y le toma los datos.
function registroDeCliente(x){
            let esNuevo = x;
            let esCliente = "";
            if(esNuevo){
                esCliente = prompt("Ha comprado anteriormente en nuestro sitio? Escriba sí o no");
            }else if(!esNuevo){
                esCliente = "no";
            };
            if(esCliente.toLowerCase() == "si" || esCliente.toLowerCase == "sí"){
                let dniSolicitante = prompt("Ingrese su dni sin puntos");
                let existeElCliente = clientes.find((x)=> x.dni == dniSolicitante);
                if(existeElCliente !== undefined){
                    alert(`Bienvenid@ ${existeElCliente.nombre}`);
                    clienteRegistrado = existeElCliente;
                }else{
                    alert("Ups, usted no figura en nuestra base de datos");
                    registroDeCliente(false);
                };
            }else if(esCliente.toLowerCase() == "no"){
                let nombre = prompt("Ingrese su nombre");
                let apellido = prompt("Ingrese su apellido");
                let telefono = prompt("Ingrese su número de teléfono");
                let direccion = prompt("Ingrese su dirección");
                let dni = prompt("Ingrese su DNI sin puntos");
    
                let persona = new client(nombre, apellido, telefono, direccion, dni);
                clientes.push(persona);
                persona.numeroDeCliente = clientes.length;
                alert(`Bienvenid@ ${persona.nombre}`);
                clienteRegistrado = persona;
            }else{
                alert("Ha ingresado una opción inválida");
                registroDeCliente(true);
            };
        };

//Función creada para poder imprimir los objetos de un array en un window alert o prompt        
function productosParaImprimir(array){
    let imprimir = JSON.stringify(array, null, 2);
    return imprimir;
};

//Función creada para añadir productos al carrito
function seleccionarProducto(arrayDeBusqueda, arrayDePusheo){
    let cantidad = 0;
    let seleccion = prompt(`Escriba el nombre del producto que desee ${productosParaImprimir(arrayDeBusqueda)}`);
    let productoEncontrado = arrayDeBusqueda.find((el) => el.nombre.toLowerCase() == seleccion.toLowerCase());
    if(productoEncontrado == undefined){
        alert("Ha ingresado una opción errónea");
        seleccionarProducto(arrayDeBusqueda, arrayDePusheo);
    }else{
        cantidad = parseInt(prompt("Escriba el número de la cantidad que desea ordenar"));
        const productoAgregado = new productoEnCarrito(productoEncontrado.nombre, productoEncontrado.precio, cantidad);
        arrayDePusheo.push(productoAgregado);
    };     
};

//función para crear la orden de compra
function crearOrdenDeCompra(cliente, array, total){
    const orden = {nombre: cliente.nombre + " " +cliente.apellido, pedido: array, totalAPagar: total}
    ordenDeCompra.push(orden);
    orden.numeroDeOrden = ordenDeCompra.length;
};

//Función creada para seleccionar el tipo de producto que se quiere comprar y para decidir hasta cuando comprar
function comprar(){
    let sigue = "";
    do{
        let eleccion = prompt(`Desea comprar productos dulces o salados?`);
        let categoria = 0;
        if(eleccion.toLowerCase() == "dulces"){
            categoria = dulces;
        }else if(eleccion.toLowerCase() == "salados"){
            categoria = salados;
        }else{
            alert("Ha ingresado una opción errónea");
            comprar();
        };
        switch(eleccion.toLowerCase()){
            case "dulces":
                seleccionarProducto(categoria, carrito);     
            break;
    
            case "salados":
                seleccionarProducto(categoria, carrito);
            break;
        };
        sigue = prompt("Si desea seguir comprando presione enter, sino escriba terminar");
    }while(sigue.toLowerCase() !== "terminar");
};

//función para ver la carta
function carta(){
    let continuar = "";
    let elija = prompt("Desea ver nuestros productos dulces, salados, o todos?");
    const bucle = function(arrayDeProductos){
        for(i = 0; i < arrayDeProductos.length; i++){
            let elemento = arrayDeProductos[i];
            continuar = prompt(`- ${elemento.nombre}\n${elemento.descripcion}\n$${elemento.precio}\n \n Para continuar presione enter, sino escriba salir`);
            if(continuar.toLowerCase() == "salir"){
                break;
            };
        };
    };
    if(elija.toLowerCase() == "dulces"){
        bucle(dulces);
    }else if(elija.toLowerCase() == "salados"){
        bucle(salados);
    }else if(elija.toLowerCase() == "todos"){
        bucle(productos);
    }else{
        alert("Ha ingresado una opción incorrecta");
        carta();
    };    
};

//función que contiene todo
function general(){
    let despedida = 0;
    do{
        let solicitudIngresada = prompt("Escriba la opción deseada:\n- Ver carta\n- Comprar\n- Salir");
        switch(solicitudIngresada.toLowerCase()){
            case "ver carta":     
                carta();
            break;
    
            case "comprar":
                registroDeCliente(true);
                comprar();
                alert(`Carrito de compras ${JSON.stringify(carrito, null, 2)}`);
                let totalAPagar = carrito.reduce((acumulador, elemento) => acumulador + elemento.precioSubTotal, 0);
                alert(`El total a pagar es de: ${totalAPagar}`);
                let confirma = prompt("Si desea confirmar la operación presione enter, sino escriba salir");
                if(confirma.toLowerCase() == "salir"){
                    carrito.forEach((el)=>{
                        carrito.pop();
                    });
                }else{
                    crearOrdenDeCompra(clienteRegistrado, carrito, totalAPagar);
                    alert("Orden de compra" + JSON.stringify(ordenDeCompra, null, 2));
                };
                despedida = 1;
            break;
    
            case "salir":
                despedida = 1;
            break;
        };
    }while(despedida !== 1);
    alert("Muchas gracias por visitarnos");
};





alert("Bienvenid@ a manga patiserie. Ofrecemos deliciosas opciones dulces y saladas para que compartas con las personas que desees");
general();



