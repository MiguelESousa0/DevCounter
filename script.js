 const form = document.getElementById('form');
 form.addEventListener('submit', handleSubmit)

const inputPotencia = document.getElementById('Potencia');
 const inputHOras = document.getElementById('Horas');
 const inputkWh = document.getElementById('kWh');
 const result = document.getElementById('result');

function handleSubmit(e) {
    e.preventDefault();
    var total = inputPotencia.value * inputHOras.value / 1000 * inputkWh.value;

	console.log(total.toFixed(2));

    var inputTotal = document.getElementById('Result')
    inputTotal.innerText = "R$" + (total.toFixed(2));
}

//handleSubmit();
