document.addEventListener('DOMContentLoaded', function(){
	//для камбека
	let comeback = document.getElementById('comeback');
	let comeback_close = document.getElementById('comeback_close');

	document.addEventListener('mouseleave', function(x){
		if (x.clientY < 0) {
			comeback.style.display = 'flex';
		}
	});

	document.addEventListener('mouseover', function(x){
		comeback_close.onclick = function(){
			comeback.style.display = 'none';
		}	
	})
	//для всплывающего окна через 20 секунд
	let supports = document.getElementById('supports');
	let supports_close = document.getElementById('supports_close');

	setTimeout(function(){
		supports.style.display = 'flex';
	}, 20000);

	supports_close.onclick = function(){
		supports.style.display = 'none';
	}

	//для всплывающего окна по вызову id
	let popup_section = document.getElementById('popup-section');
	let popup_close = document.getElementById('popup_item');
	let popup_close1 = document.getElementById('popup_close1');

	popup_close.onclick = function(){
		popup_section.style.display = 'flex';
	}

	popup_close1.onclick = function(){
		popup_section.style.display = 'none';
	}

	
})