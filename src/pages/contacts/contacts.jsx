
import style from "./contacts.scss";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import LogoComponent from "../../components/svg/LogoComponent";
function Contacts({refer}) {
  const defaultState = {
    center: [55.7744855,37.471647],
    zoom: 16,
  };

  


  return (
    
    <div ref={refer} className="contacts-wrapper">
        <div style={{width: '160px'}}><LogoComponent /></div>
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
          Проспект Маршала Жукова дом32-119
        </div>
      </div>
     <div className="map-wrapper">
     <YMaps>
        <Map className="map" defaultState={defaultState}>
          <Placemark geometry={[55.774855,37.471647]} />
        </Map>
      </YMaps>
     </div>
    </div>
  );
}

export default Contacts;

// [55.7434523880501,37.68068128281868]

//55.684758, 37.738521