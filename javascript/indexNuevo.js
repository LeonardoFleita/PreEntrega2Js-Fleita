const dulce = [];
const salado = [];
const carta = [];
const clientes = [{nombre: 'Leonardo', apellido: 'Fleita', telefono: "1157409643", direccion: "mansilla 3022", dni: 33471611, numeroDeCliente: 1}];

function producto(nombre, precio, descripcion){
    this.nombre = nombre;
    this.precio = parseInt(precio);
    this.descripcion = descripcion;
};

class client{
    constructor(nombre, apellido, telefono, direccion, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
        this.dni = parseInt(dni);
    };
};

const redVelvet = dulce.push(new producto("Red velvet", 6500, "Torta de chocolate de color rojo brillante recubierta por capas de glaseado de queso cremoso"));
const bruceBolanos = dulce.push(new producto("Bruce Bolaños", 5000, "Bomba de chocolate"));
const lemonPie = dulce.push(new producto("Lemon pie", 2000, "Torta de limón"));
const cheeseCake = dulce.push(new producto("Cheese cake", 2500, "Torta de queso cubierta de frutos rojos"));
const panDeJamon = salado.push(new producto("Pan de jamón", 3000, "Arrollado de pan relleno de jamón, queso cremoso, aceitunas y pasas de uva"));
const scon = salado.push(new producto("Scon de queso", 1000, "Scones sabor queso, bolsa de 6 unidades"));


const productos = dulce.concat(salado);

function general(){
    let solicitudIngresada = prompt("Escriba la opción deseada:\n- Ver carta\n- Comprar\n- Salir");
    switch(solicitudIngresada.toLowerCase()){
        case "ver carta":     
            let elija = "";
            for(i = 0; i < productos.length; i++){
                let elemento = productos[i];
                elija = prompt(`- ${elemento.nombre}\n${elemento.descripcion}\n$${elemento.precio}\n \n Siguiente               Salir`);
                if(elija.toLowerCase() == "salir"){
                    break;
                };
            };

        break;

        case "comprar":
            let esCliente = prompt("Es la primera vez que compra en nuestra página? Escriba sí o no");
            if(esCliente.toLowerCase() == "no"){
                let dniSolicitante = prompt("Ingrese su dni sin puntos");
                let existeElCliente = clientes.find((x)=> x.dni == dniSolicitante);
                if(existeElCliente !== undefined){
                    alert(`Bienvenid@ ${existeElCliente.nombre}`);
                }else{
                    alert("Ups, usted no figura en nuestra base de datos");
                    esCliente = "si";
                };

            }else if(esCliente.toLowerCase() == "si" || esCliente.toLowerCase == "sí"){
                let nombre = prompt("Ingrese su nombre");
                let apellido = prompt("Ingrese su apellido");
                let telefono = prompt("Ingrese su número de teléfono");
                let direccion = prompt("Ingrese su dirección");
                let dni = prompt("Ingrese su DNI sin puntos");
    
                let persona = new client(nombre, apellido, telefono, direccion, dni);
                clientes.push(persona);
                persona.numeroDeCliente = clientes.length;
            }else{

                alert("Ha ingresado una opción inválida");
            }

            break;
    };
};


alert("Bienvenid@ a manga patiserie. Ofrecemos deliciosas opciones dulces y saladas para que compartas con las personas que desees");
general();

