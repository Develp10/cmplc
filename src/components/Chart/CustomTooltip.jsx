import React, { memo } from "react";
import moment from "moment";

const CustomTooltip = memo(({ active, payload }) => {
  if (!payload && payload.length < 1 && !payload[0] && !payload[0].payload) {
    return "";
  }
  console.log(payload);
  if (active) {
    return (
      <div className="custom-tooltip">
        {
          <p>
            {payload.length > 0 && payload.payload
              ? moment.unix(payload[0].payload.date).format("DD.MM.YYYY")
              : ""}
          </p>
        }
        {payload.map((v, i) => {
          switch (v.fill) {
            case "#d4d4d4":
              return (
                <p
                  key={i}
                  className="custom-tooltip__capitalization"
                >{`Капитализация : ${v.value} USD`}</p>
              );
            case "#6ae33e":
              return (
                <p
                  key={i}
                  className="custom-tooltip__price"
                >{`Цена : ${v.value} %`}</p>
              );
            case "#000000":
              return (
                <p
                  key={i}
                  className="custom-tooltip__volume"
                >{`Объем : ${v.value} USD`}</p>
              );
            default:
              return "";
          }
        })}
      </div>
    );
  }
  return null;
});

export default CustomTooltip;
