let ligaDesliga = document.querySelector('#ligaDesliga');
let bulboAceso = document.querySelector('#bulboAceso');

bulboAceso.hidden = true;
ligaDesliga.onclick = function() {
let ligarLuz = bulboAceso.hidden;

if(ligarLuz === true) {
	bulboAceso.hidden = false;
	ligaDesliga.textContent = 'Desligar';
} else {
	bulboAceso.hidden = true;
	ligaDesliga.textContent = 'Ligar';
	}
}