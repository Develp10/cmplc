import React from "react";
import "../../sass/partnerCabinet/listedUsers.sass";
const ListedUsers = () => {
  return (
    <div className="listed-users">
      <div className="listed-users__menu">
        <p className="listed-users__title">Приведенные пользователи</p>
        <button className="listed-users__download-button">Скачать отчет</button>
      </div>
      <table className="listed-users__table">
        <tr>
          <td>22.01.2020</td>
          <td>Мария</td>
          <td>135 токенов</td>
        </tr>
        <tr className="listed-users__tr-td__gray">
          <td>22.01.2020</td>
          <td>Коля</td>
          <td>135 токенов</td>
        </tr>
        <tr>
          <td>22.01.2020</td>
          <td>Вова</td>
          <td>135 токенов</td>
        </tr>
      </table>
    </div>
  );
};

export default ListedUsers;
