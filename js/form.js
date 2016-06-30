var form = document.getElementById("form-contact");

var apellidosInput = document.getElementsByName("tienes_apellidos");

// Crear elemento para añadirlo al DOM
var inputApellidos = document.createElement('input');
inputApellidos.setAttribute("id", "apellidos");
inputApellidos.setAttribute("type", "text");
inputApellidos.setAttribute("name", "apellidos");
inputApellidos.setAttribute("placeholder", "Apellidos");
inputApellidos.setAttribute("required", "");

for (var i=0; i<apellidosInput.length; i++) {
	apellidosInput[i].addEventListener('click', function() {
		if (this.value == 'yes') {
			// Añadir input creado en el padre del checkbox
			this.parentNode.appendChild(inputApellidos);
		} else {
			this.parentNode.removeChild(inputApellidos);
		}
	});
}

// No ponemos listener a click porque si pulsamos ENTER se colaría
form.addEventListener("submit", function(evt) {
	var inputNombre = document.getElementById("nombre");

	var apellidosRadioInput = {
		"apellidos_si": document.getElementById("apellidos_si"),
		"apellidos_no": document.getElementById("apellidos_no")
	};

	if (inputNombre.checkValidity() == false) {
		alert("Escribe tu nombre");
		inputNombre.focus();
		evt.preventDefault(); // Evitamos submit si hay error
		return false;
	}

	if (apellidosRadioInput.apellidos_si.checkValidity() == false) {
		alert("Selecciona si tienes apellidos");
		evt.preventDefault();
		return false;
	}
});