import React from "react";
import "../../sass/taskFeed/menuOffers.sass";
import heartLogo from "../../images/TaskFeed/heart.png";
const MenuOffers = ({ type }) => {
  return (
    <div className="menu-offers">
      <div
        className={`menu-offers__tab ${type ? "menu-offers__tab__active" : ""}`}
      >
        <span>Все офферы</span>
      </div>

      <div
        className={`menu-offers__tab menu-offers__tab__favorit ${
          !type ? "menu-offers__tab__active" : ""
        }`}
      >
        Избранные
      </div>
    </div>
  );
};

export default MenuOffers;
