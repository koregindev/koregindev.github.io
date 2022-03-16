function init() {
    let markup = `
    <div class="feedback_form_block" id="open_btn_js">
    <i class="fa-solid fa-message" id="feedback_form_icon"></i>
</div>

<div class="feedback_form_block_hide" id="hide_panel">
    <div class="title_feedback_bar">
        <h2 id="title_card_item">Связаться с нами</h2>
        <p id="inner_p">С 9 до 20 по будням и с 10 до 19 по выходным</p>
    </div>
    <div style="height: 5px"></div>
    <div style="height: 16px;"></div>
    <div class="form_block_title">
        <div class="form_block_item">
            <i id="phone" class="fa-solid fa-phone"></i>
            <p><a href="tel:+77089022319" target="_blank" id="phone_number">+7 708 902 23 19</a></p>
        </div>
        <div class="form_block_item">
            <i id="email" class="fa-solid fa-envelope"></i>
            <p><a href="mailto:support@mail.ru" target="_blank" id="email_contact">support@mail.ru</a></p>
        </div>
        <div class="form_block_item">
            <i id="Whatsapp" class="fa-brands fa-whatsapp"></i>
            <p><a id="whatsapp_link" target="_blank" href="https://wa.me/74952601740">Напишите в Whatsapp</a></p>
        </div>
        <div class="form_block_item">
            <i id="telegram" class="fa-brands fa-telegram"></i>
            <p><a id="telegram_link" target="_blank" href="https://telegram.me/azurdrive_bot">Напишите в Telegram</a></p>
        </div>
    </div>
</div>

<div class="feedback_close_menubar" id="close_button_js">
    <i class="fa-solid fa-xmark"></i>
</div>
    `;
    document.body.innerHTML += markup;

    let f_link = `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw==" crossorigin="anonymous" referrerpolicy="no-referrer" />`;

    document.head.innerHTML += f_link;

    console.log('Cкрипт добавлен');
}

init();