//NOMBRE EN CONSTRUCCIÓN - trans rosario
const lunes = [];
const martes = [];
const miercoles = [];
const jueves = [];
const viernes = [];
const sabado = [];
const domingo = [];
const microsPorDia = [lunes, martes, miercoles, jueves, viernes, sabado, domingo];

class micro{
    constructor(destino, horario, butacas){
        this.destino = destino;
        this.horario = horario;
        this.butacas = butacas;
    };
};

const rosarioLunes = new micro("Rosario", "9hs", [])


alert("Bienvenido, nuestra empresa ofrece servicios de transporte de pasajeros entre Buenos Aires y Rosario")

function comprarPasaje(dia, destino, horario){

};

function indice(){
    let solicitudIngresada = prompt("Escriba la opción deseada: \n - Conocer servicios \n - Comprar pasaje \n - Salir ");
    switch(solicitudIngresada.toLowerCase()){
        case "conocer servicios":
            alert("Desde hace más de 10 años que la ciudad de Buenos Aires y la ciudad de Rosario están unidas por 'nombre de la empresa'.\n \nContamos con 3 servicios de minibuses diarios en ambos sentidos de lunes a sábados, y 2 servicios los domingos.\n \nLUNES a SÁBADOS\nAmbos sentidos: 8hs - 15hs - 20hs\n \nDOMINGO\nAmbos sentidos: 10hs - 19hs ");
            break;
        
        case "salir":
            alert("Gracias por visitarnos");
            break;

        case "comprar pasaje":
            break;
    };
    if(solicitudIngresada == "conocer servicios"){
        indice();
    }else{
        alert("bye");
    };
};

indice();





