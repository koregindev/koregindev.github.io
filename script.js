// первый рекламный баннер
let myDiv1 = document.getElementById('modal_camback_1');
let myScroll1 = document.getElementById('modal_progressbar');
let text_counter = document.getElementById('text_counter');
let close_button1 = document.getElementById('hidden_button');

close_button1.style.opacity = 0;

let steps = 5;
let my_width1 = 0;

if (window.screen.width <= 727) {
	let myInterval1 = setInterval(function() {
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
		});

		clearInterval(myInterval1);
	}

	}, 1000);
}

// скрипт для второго рекламного блока
let button_text = document.getElementById('close_timer_2');
let close_button2 = document.getElementById("close_button_item");
let myDiv2 = document.getElementById("modal_camback_2");
let close_div = document.getElementById("modal_close_div2");

close_button2.style.display = 'none';

let counters = 10;

let myInterval2 = setInterval(function(){
	button_text.innerText = counters;

	counters -= 1;

	if (counters <= 0) {
		clearInterval(myInterval2);
		button_text.style.display = 'none';

		close_button2.style.display = 'block';

		close_div.addEventListener('click', function() {
			myDiv2.style.display = 'none';
		});
	}
}, 1000);



let coords_y = window.screen.height;
modal_coords = 0;

window.addEventListener('scroll', function(){
	modal_coords += 40;

	if (modal_coords >= coords_y) {
		myDiv2.style.display = 'block';
	}
});