import React from "react";
import style from "./contacts.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

function Contacts() {
  const defaultState = {
    center: [55.72092330517786,37.56091226242578],
    zoom: 15,
  };
  return (
    
    <div className="contacts-wrapper">
      <div className="contacts-connection">
        <a className="contacts-number" href="tel:+79850390039">
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
        Время работы:
        <div className="time-work-text">Пн-Вс 11:00 - 00:00</div>
      </div>
      <div className="contacts-adress">
        Адрес:
        <div className="contacts-adress-text">
          Проспект Жуковского дом32-119
        </div>
      </div>
     <div className="map-wrapper">
     <YMaps>
        <Map className="map" defaultState={defaultState}>
          <Placemark geometry={[55.72092330517786,37.56091226242578]} />
        </Map>
      </YMaps>
     </div>
    </div>
  );
}

export default Contacts;

// [55.7434523880501,37.68068128281868]

//55.684758, 37.738521