// Obtener el formulario y la lista de registros
const form = document.querySelector('form');
const recordsList = document.querySelector('#records-list');

// Manejar la presentación de registros guardados al cargar la página
window.addEventListener('load', () => {
	// Obtener los registros guardados del almacenamiento local
	const records = JSON.parse(localStorage.getItem('records')) || [];

	// Agregar cada registro a la lista de registros
	records.forEach(record => {
		const li = document.createElement('li');
		li.textContent = `${record.name} (${record.country}, ${record.campaign}, ${record.venture}, ${record['coordinator-jr']}, ${record['report-hour']}, ${record.reporter})`;
		recordsList.appendChild(li);
	});
});

// Manejar el envío del formulario
form.addEventListener('submit', event => {
	event.preventDefault();

	// Obtener los datos del formulario
	const name = document.querySelector('#name').value;
	const country = document.querySelector('#country').value;
	const campaign = document.querySelector('#campaign').value;
	const venture = document.querySelector('#venture').value;
	const coordinatorJr = document.querySelector('#coordinator-jr').value
    	// Limpiar el formulario
	form.reset();
});
