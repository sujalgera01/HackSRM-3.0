var menu = document.getElementById('menu');
var nav = document.getElementById('nav');
var exit = document.getElementById('exit');

menu.addEventListener('click', function(e){
	nav.classList.toggle('hide-mobile');
});

exit.addEventListener('click', (e) => {
	nav.classList.toggle('hide-mobile');
});
