let nombre = prompt("Ingresar su nombre");
let apellido = prompt("Ingresar su apellido");
let numero = parseInt(prompt("Ingresar su número de socio"));
while(nombre != "ESC" ){
   switch (nombre) {
       case "Fran":
            alert("Bienvenido" + " " + nombre + " " + apellido + " " + numero);
            break;
        case "Victoria":
            alert("Bienvenida" + " " + nombre + " " + apellido + " " + numero);
            break;
       default:
           alert("Datos incorrectos." + " " + "Intente de nuevo")
           break;
   }
   nombre = prompt("Ingresar su nombre");
   apellido = prompt("Ingresar su apellido");
   numero = parseInt(prompt("Ingresar su número de socio"));
}
