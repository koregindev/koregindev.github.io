document.addEventListener('DOMContentLoaded', function(){
	let switcher_close = document.getElementById('modal-btn-switcher');
	let modal_window = document.getElementById('modal-slider');
	let switcher_open = document.getElementById('modal-slider-open');

	switcher_open.addEventListener('click', function(){
		modal_window.style.opacity = 1;
		modal_window.style.visibility = 'visible';
	});

	switcher_close.addEventListener('click', function(){
		modal_window.style.opacity = 0;
		modal_window.style.visibility = 'hidden';
	});

	document.addEventListener('mouseleave', function(e){
		modal_window.style.opacity = 1;
		modal_window.style.visibility = 'visible';
	})

	setTimeout(function(){
		modal_window.style.opacity = 1;
		modal_window.style.visibility = 'visible';
	}, 20000)
});