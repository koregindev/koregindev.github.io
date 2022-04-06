document.addEventListener('DOMContentLoaded', function(){
	if (window.screen.width <= 727) {
		// для вызова первого модального окна через время
		let thumbnail_one = document.getElementById('thumbnail_one');
		let thumbnail_text = document.getElementById('contain_text');
		let close_thumb_1 = document.getElementById('func_btn_close');
		let thumb_bar1 = document.getElementById('progbar');

		let thumb_bar_width = 0;
		let my_text_counter = 5;

		close_thumb_1.style.opacity = 0;
		thumbnail_one.style.display = 'none'

		let launch_thumbnail1 = setTimeout(function() {

			thumbnail_one.style.display = 'block';

			if (thumbnail_one.style.display === 'block') {
				document.body.style.overflow = 'hidden';
			}

			let myLaunch1 = setInterval(function() {	
				thumbnail_text.innerText = my_text_counter;
				my_text_counter--;

				if (my_text_counter < 0) {
					clearInterval(myLaunch1);

					close_thumb_1.style.opacity = 1;

					thumbnail_text.style.display = 'none';

					close_thumb_1.addEventListener('click', function(){
						thumbnail_one.style.display = 'none';

						if (thumbnail_one.style.display === 'none') {
							document.body.style.overflow = "auto";
						}
					});

				};
				
				thumb_bar1.style.width = thumb_bar_width + "%";

				thumb_bar_width += 20;

				if(thumb_bar_width > 80) {
					close_thumb_1.style.background = '#FFC44E';
				}

			}, 1000);


		}, 8000);


	};

	// код для второго блока
	let thumbnail_two = document.getElementById('thumbnail_two');
	let thumbnail_text_two = document.getElementById('thumbnail_two');
	let x_cords = 0;
	//высота экрана мобильного
	let clientHeight = window.screen.height;
	//сколько раз показывать второй блок
	let views = 1;

	window.addEventListener('scroll', function(){

		setInterval(function(){
			
			x_cords = window.pageYOffset;

			if (x_cords >= clientHeight) {
				thumbnail_two.style.display = 'block';
			}

		}, 1000);

	});

});