// первый рекламный баннер
let myDiv1 = document.getElementById('modal_camback_1');
let myScroll1 = document.getElementById('modal_progressbar');
let text_counter = document.getElementById('text_counter');
let close_button1 = document.getElementById('hidden_button');

close_button1.style.opacity = 0;

let steps = 5;
let my_width1 = 0;

if (window.screen.width <= 727) {
	setInterval(function() {
	text_counter.innerText = steps;

	steps -= 1;

	my_width1 += 20;

	myScroll1.style.width = my_width1 + '%';

	if (my_width1 > 80) {
		text_counter.style.background = '#FFC44E';
	}

	if (my_width1 >= 100) {
		my_width1 = 100;
	}

	if (text_counter.innerText === "0") {
		text_counter.style.display = 'none';
		close_button1.style.background = "#FFC44E";
		close_button1.style.opacity = 1;

		close_button1.addEventListener('click', function() {
			myDiv1.style.display = 'none';
		})
	}

	}, 1000);
}