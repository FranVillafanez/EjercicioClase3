let nombre = prompt("Ingresar su nombre");
let apellido = prompt("Ingresar su apellido");
let numero = parseInt(prompt("Ingresar su número de socio"));
while(nombre != "Salir" ){
   switch (nombre) {
       case "Fran":
            alert("Bienvenido" + " " + nombre + " " + apellido + " " + numero);
            break;
        case "Victoria":
            alert("Bienvenida" + " " + nombre + " " + apellido + " " + numero);
            break;
       default:
           alert("Datos incorrectos." + " " + "Intente de nuevo." + " " + "Para salir escriba Salir")
           break;
   }
   nombre = prompt("Ingresar su nombre");
   if(nombre == "Salir" ){
       alert("Hasta pronto");
       break;
    }
    else (nombre != "Salir");
       apellido = prompt("Ingresar su apellido");
       numero = parseInt(prompt("Ingresar su número de socio"));   
}
