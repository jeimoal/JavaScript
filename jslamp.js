let jsLp = {

onoff : null,
bulb : null,

init : () => {
	jsLp.onoff = document.querySelector('#onOff');
	jsLp.bulb = document.querySelector('#bulb');

	
	jsLp.onoff.onclick = jsLp.toggle;
	jsLp.bulb.hidden = true;
},

toggle : () => {
	if(jsLp.bulb.hidden === true) {
		jsLp.bulb.hidden = false;
		jsLp.onoff.textContent = 'Turn Off';
	} else {
		jsLp.bulb.hidden = true;
		jsLp.onoff.textContent = 'Turn On';
	};
},

}
window.addEventListener('load', jsLp.init);
