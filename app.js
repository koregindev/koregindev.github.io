function custom() {
    let button_show = document.getElementById('open_btn_js');
    let button_hide = document.getElementById('close_button_js');
    let hide_div = document.getElementById('hide_panel');
    /* обработчик кнопки открыть */
    button_show.addEventListener('click', function() {
        hide_div.style.opacity = 1;
        hide_div.style.bottom = 120 + 'px';
        button_show.style.bottom = 0;
        button_show.style.opacity = 0;
    });
    /*обработчик кнопки закрыть*/
    button_hide.addEventListener('click', function() {
        hide_div.style.opacity = 0;
        hide_div.style.bottom = 0;
        button_show.style.bottom = 34 + 'px';
        button_show.style.opacity = 1;
    })

    /* плагин для изменения виджета */
}

custom();