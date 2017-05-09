
function pesoMercurio(peso){ //calculará la masa en mercurio
	var mercurio = (pesoTierra/2.64)
	return "Tu peso en Mercurio es " + mercurio.toFixed(2);
}

function pesoVenus(peso){ // calculará la masa en venus
	var venus = (pesoTierra/1.10);
	return "Tu peso en Venus es " + venus.toFixed(2);
}

function pesoMarte(peso){ //calculará la masa en marte
	var marte = (pesoTierra/2.64);
	return "Tu peso en Marte es " + marte.toFixed(2);
}

function pesoJupiter(peso){ // calculará la masa en jupiter
	var jupiter = (pesoTierra*24.79);
	return "Tu peso en Júpiter es " + jupiter.toFixed(2);
}

function imprimir(){ //se activa con el boton, desde el html
pesoTierra = document.getElementById("input").value; // tomará el valor del input, para poder accionar las funciones antes declaradas
var imprimiendo = document.getElementById("pesos") // manda a imprimir en el div correspondiente
imprimiendo.innerHTML = "<p>" + pesoMercurio() + "<br>" + pesoVenus() + "<br>" + pesoMarte() + "<br>" + pesoJupiter() + "<br></p>"; //resultado final concatenado. acá deberían ir las llamadas a las funciones faltantes.
}