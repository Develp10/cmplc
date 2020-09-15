import React, { memo } from "react";
import moment from "moment";

const CustomAxisTick = memo(({ x, y, payload }) => {
  if (payload.value === 1600715262) {
    return "";
  }
  return (
    <svg>
      <svg
        x={x - 6}
        y={y - 15}
        width="13"
        height="13"
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="50" fill="black" />
      </svg>
      <text x={x - 35} y={y + 17} textAnchor="center" fill="#666">
        {moment.unix(payload.value).format("MMM Do")}
      </text>
    </svg>
  );
});

export default CustomAxisTick;
