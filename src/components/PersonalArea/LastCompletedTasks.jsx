import React, { useState } from "react";
import "../../sass/personalArea/lastСompletedTasks.sass";

const getCoeficientStyle = (coeficient) => {
  switch (coeficient) {
    case "ALPHA":
      return "last-completed-tasks__name-alfa";
    case "BETA":
      return "last-completed-tasks__name-beta";
    case "GAMMA":
      return "last-completed-tasks__name-gamma";
    case "DELTA":
      return "last-completed-tasks__name-delta";
    default:
      return "#000000";
  }
};

const getCoeficientCount = (last_tasks) => {
  let count = 0;
  if (last_tasks) {
    for (const task of last_tasks) {
      if (!isNaN(task.percentage)) {
        if (count === 0) {
          count = task.percentage;
        } else {
          count = count * task.percentage;
        }
      }
    }
  }
  return count;
};

const LastCompletedTasks = ({ last_tasks }) => {
  const [coeficientCount, setCoeficientCount] = useState(0);

  return (
    <div className="last-completed-tasks">
      <div className="last-completed-tasks__menu">
        <p className="last-completed-tasks__title">
          Mining {getCoeficientCount(last_tasks)} % per day
        </p>
      </div>
      <hr />
      <div>
        {last_tasks &&
          last_tasks.map((v, i) => (
            <div
              key={i}
              className={
                i % 2 === 0
                  ? "last-completed-tasks__table-row"
                  : "last-completed-tasks__table-row__active"
              }
            >
              <div className="last-completed-tasks__logo-div">
                <p className={getCoeficientStyle(v.coeficient)}>
                  {v.coeficient}
                </p>
              </div>
              <div className="last-completed-tasks__row-title">
                <p className="last-completed-tasks__name">{v.percentage}</p>
              </div>
              <div className="last-completed-tasks__row-time">{v.balance}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default LastCompletedTasks;

// <table className="last-completed-tasks__table">
//         <tr>
//           <td>
//             <div className="last-completed-tasks__circle"></div>
//           </td>
//           <td>
//             <div>
//               <p>Webtoken profit</p>
//               <p>Приложение</p>
//             </div>
//           </td>
//           <td>135 токенов</td>
//         </tr>
//         <tr className="last-completed-tasks__tr-td__gray">
//           <td>
//             <div className="last-completed-tasks__circle"></div>
//           </td>
//           <td>В обработке</td>
//           <td>135 токенов</td>
//         </tr>
//         <tr>
//           <td>
//             <div className="last-completed-tasks__circle"></div>
//           </td>
//           <td>В обработке</td>
//           <td>135 токенов</td>
//         </tr>
//       </table>
