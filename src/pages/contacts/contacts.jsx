import React from "react";
import style from "./contacts.scss";

function Contacts() {
  return (
    <div className="contacts-wrapper">
      <div className="logo">LOGO</div>
      <div className="contacts-connection">
        <a className="contacts-number" href="+79850390039">
          + (798)503-90-039
        </a>
        <a className="contacts-whats" href="https://wa.me/+79850390039">
          WhatsApp: + (798)503-90-039
        </a>
        <a className="contacts-mail" href="mailto:addrest.39@mail.ru">
          addrest.39@mail.ru
        </a>
      </div>
      <div className="time-work">
        Время работы
        <div className="time-work-text">Пн-Вс 11:00 - 00:00</div>
      </div>
      <div className="contacts-adress">
        Адрес
        <div className="contacts-adress-text">
          Проспект Жуковского дом32-119
        </div>
      </div>
    </div>
  );
}

export default Contacts;
