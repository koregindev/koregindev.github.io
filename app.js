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

    //переменная хранит номер телефона для связи (не изменять)
    let phone_number = document.getElementById("phone_number");
    
    //в строку ниже вставить номер телефона заказчика (изменять)
    let my_phone_number = '7 705 654 91 32';

    //это не изменять
    phone_number.setAttribute('href', 'tel:' + my_phone_number.trim());
    phone_number.innerHTML = my_phone_number;

    //переменная хранит почтовый адрес (не изменять)
    let email_contact = document.getElementById('email_contact');

    //в строку ниже вставть почтовый адрес (изменять)
    let my_email_contact = 'coryright@ya.ru';

    //это не изменять
    email_contact.setAttribute('href', 'mailto:' + my_email_contact);
    email_contact.innerHTML = my_email_contact;

    //переменная хранит ссылку в ватсап (не изменять)
    let whatsapp_link = document.getElementById('whatsapp_link');
    
    //в строку ниже вставить ссылку ватсап (изменять)
    let my_whatsapp_link = 'https://wa.me/77777777777';
    
    //это не изменять
    whatsapp_link.setAttribute('href', my_whatsapp_link);

    //переменная содержить адрес телеграмм ссылки (не изменять)
    let telegram_link = document.getElementById('telegram_link')

    //в строку ниже вставить адрес телеграмм (изменять)
    let my_telegram_link = 'https://telegram.me/nickname';

    //это не изменять
    telegram_link.setAttribute('href', my_telegram_link);


    //если хотите изменить текст заголовка

    let h2 = document.getElementById("title_card_item");

    //изменить строку ниже (изменить)
    h2.innerHTML = "Связаться с нами";

    //если хотите изменить текст под заголовков
    
    let inner_p = document.getElementById('inner_p');

    //изменить параграф вы можете ниже
    inner_p.innerHTML = 'Работаем круглые сутки 24 / 7 без выходных';

    //если вдруг хотите изменить текст кнопок телеграмм и ватсап
    whatsapp_link.innerHTML = 'Написать в Whatsapp';
    telegram_link.innerHTML = 'Написать в Telegram';

    //для изменения цветов
    //вы можете изменить строку внеся сюда нужный в #HEX, rgb, rgba, hsl или название света
    //вписать нужный цвет в кавычки
    inner_p.style.color = ''; //цвет для текста
    h2.style.color = ''; //цвет для заголовка
    whatsapp_link.style.color = ''; //цвет для пункта ватсап
    telegram_link.style.color = ''; //цвет для пункта телеграмм
    document.getElementsByClassName('feedback_form_block_hide')[0].style.background = ''; //цвет окна
    document.getElementsByClassName('feedback_form_block')[0].style.background = ''; //цвет кнопки с письмом
    document.getElementsByClassName('feedback_close_menubar')[0].style.background = ''; //цвет у кнопки с крестиком
}

custom();