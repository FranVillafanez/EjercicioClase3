let nombre = prompt("Ingresar un nombre");
let apellido = prompt("Ingresar un apellido");
let numero = parseInt(prompt("Ingresar un número"));
if (nombre == "Fran"){
    alert("Bienvenido Fran");
}
else{ 
alert("Ingreso no autorizado." + " " + "Intenta nuevamente" );
}
//Repetimos hasta que se ingresa "ESC"
while(nombre != "ESC" ){
   switch (nombre) {
       case "Antonio":
            alert("HOLA Antonio" + " " + apellido + " " + numero);
            break;
        case "Victoria":
            alert("HOLA Victoria" + " " + apellido + " " + numero);
            break;
       default:
           alert("Ingreso no autorizado." + " " + "Intenta nuevamente" )
           break;
   }
   nombre = prompt("Ingresar un nombre");
   apellido = prompt("Ingresar un apellido");
   numero = parseInt(prompt("Ingresar un número"));
}
