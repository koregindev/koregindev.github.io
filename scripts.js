document.addEventListener('DOMContentLoaded', function() {
	// код для первого баннера
	let thumb_one = document.querySelector('.thumbnails_block_1');
	let thumb_text = document.querySelector('.icon_count');
	let thumb_exit = document.querySelector('.circle_hide');
	let thumb_overlay = document.querySelector('.thumbnails_overlay');
	let thumb_sec = 5;
	let w = 0;
	let myIterator;
	//вызывать первое окно через n секунд
	if (window.screen.width <= 727) {
		setTimeout(function() {
			thumb_one.style.display = 'block';

			myIterator = setInterval(function(){
				thumb_text.innerText = thumb_sec;
				thumb_sec--;
				thumb_overlay.style.width = w + '%';
				w+= 20;
				if (thumb_sec < 0) {
					clearInterval(myIterator);

					thumb_text.style.display = 'none';
					thumb_exit.style.opacity = 1;
				}

				if (w > 80) {
					thumb_exit.style.background += "#FFC44E";
				}

			}, 1000);

			thumb_exit.addEventListener('click', function() {
				thumb_one.style.display = 'none';
			});

		}, 15000);
	};
});

if (window.screen.width <= 727) {
	let subnail_div = document.querySelector('.subnails_block_2');
	let subnail_close_button = document.getElementById('sub_button_item');
	let subnail_text = document.querySelector('.rect_hide_icon');
	//значение высоты экрана устройства
	let clientHeight = window.screen.height;
	//переменная содержит значение высоты
	let my_coords = 0;
	//новый таймер показа рекламы
	let myIterator2;
	//значение секунд до показа рекламы
	let stepps = 10;

	let views = 1;

	window.addEventListener('scroll', function() {
		if (my_coords > clientHeight && views === 1) {
			subnail_div.style.display = 'block';
			views++;
		}
		my_coords = window.pageYOffset;
	});

	subnail_close_button.onclick = function() {
		subnail_close_button.style.display = 'none';
		subnail_text.style.display = 'block';

		myIterator2 = setInterval(function() {
			subnail_text.innerText = stepps;
			stepps -= 1;

			if (stepps <= 0) {
				clearInterval(myIterator2);
				subnail_text.style.display = 'none';
				subnail_close_button.style.display = 'block';

				subnail_close_button.onclick = function() {
					subnail_div.style.display = 'none';
				}
			};

		}, 1000);
	};
};


