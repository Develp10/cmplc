import React, { memo, useEffect } from "react";
import {
  XAxis,
  CartesianGrid,
  YAxis,
  AreaChart,
  Area,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { useTranslation } from "react-i18next";
import CustomLastDot from "./CustomLastDot";
import CustomAxisTick from "./CustomAxisTick";
import CustomTooltip from "./CustomTooltip";
import CustomLegend from "./CustomLegend";
import moment from "moment";
import { scaleTime } from "d3-scale";
import { timeDay, timeHour } from "d3-time";
import { timeFormat } from "d3-time-format";
import "../../sass/chart/chart.sass";

const createTicks = (startUtc, endUtc, intervalDays) => {
  console.log(startUtc);
  const days = Math.floor((endUtc - startUtc) / 86400 / intervalDays);
  return Array(days)
    .fill(0)
    .map((item, index) => startUtc + 86400 * 5 * index);
};

const Chart = memo(({ ico_info }) => {
  const { t } = useTranslation();
  useEffect(() => {
    // const getElem = (index) =>
    //   document.querySelector(
    //     `#root > div.body > div > div.chart > div > svg > g.recharts-cartesian-grid > g.recharts-cartesian-grid-vertical > line:nth-child(${index})`
    //   );
    // const elem1 = getElem(8);
    // const elem2 = getElem(9);
    // if (elem1) {
    //   elem1.style.display = "none";
    // }
    // if (elem2) {
    //   elem2.style.display = "none";
    // }
    //fix -- to do delete
    if (ico_info) {
      ico_info.dates3.sort((a, b) => a.date - b.date);
      ico_info.dates2.sort((a, b) => a.date - b.date);
      ico_info.dates.sort((a, b) => a.date - b.date);
      console.log(
        "start,end",
        moment.unix(ico_info.start_date).format("MMM Do"),
        moment.unix(ico_info.presale_end_date).format("MMM Do")
      );
      ico_info.dates.forEach((item) => {
        console.log(item.date, moment.unix(item.date).format("DD.MM.YYYY"));
      });
    }
  }, [ico_info]);

  if (!ico_info) {
    return "";
  } else {
    const now = new Date();
    const domainToday = scaleTime().domain([
      ico_info.start_date,
      ico_info.presale_end_date,
    ]);
    const timeFormatter = (tick) => {
      return timeFormat("%H:%M:%S")(new Date(tick));
    };
    const ticks = domainToday.ticks(timeDay.every(5));
    return (
      <div className="chart">
        <p className="chart__title"> {t("presale__title__capitalization")}</p>
        <CustomLegend ico_info={ico_info} />
        <ResponsiveContainer width="100%" height={350}>
        <AreaChart>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6ae53e" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#6ae53e" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="capitalization" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6ae53e" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#6ae53e" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="volume" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#000000" stopOpacity={0.7} />
              <stop offset="95%" stopColor="#000000" stopOpacity={0} />
            </linearGradient>

            <linearGradient
              gradientUnits="userSpaceOnUse"
              spreadMethod="pad"
              id="e"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="rgba(255, 255, 255, 0.01)"
                stopOpacity={0.01}
              />
              <stop offset="99%" stopColor="rgb(0, 0, 0)" stopOpacity={1} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="url(#e)" />

          <Area
            type="basis"
            data={ico_info.dates3}
            dataKey="price"
            fill="#d4d4d4"
            stroke="#d4d4d4"
            key="dates3"
          />

          <Area
            type="basis"
            data={ico_info.dates2}
            dataKey="price"
            fill="#000000"
            stroke="#000000"
            fillOpacity={1}
            key="dates2"
          />

          <Area
            type="basis"
            data={ico_info.dates}
            dataKey="price"
            fill="#6ae33e"
            fillOpacity={1}
            stroke="#6ae33e"
            key="dates"
            dot={<CustomLastDot ico_info={ico_info} />}
          />

          <YAxis
            type="number"
            dataKey="price"
            hide={true}
            tickFormatter={(label) => ``}
            domain={[(dataMin) => 0, (dataMax) => dataMax + 5]}
          />

          <Tooltip content={<CustomTooltip />} />
          {/* <Legend
            verticalAlign="top"
            content={<CustomLegend ico_info={ico_info} />}
          /> */}
          <XAxis
            type="number"
            dataKey="date"
            tickCount={10}
            // ticks={createTicks(
            //   ico_info.start_date,
            //   ico_info.presale_end_date,
            //   5
            // )}

            ticks={ticks}
            // domain={[ico_info.start_date, ico_info.presale_end_date]}
            domain={domainToday}
            tick={<CustomAxisTick />}
            tickLine={false}
          />
        </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
});

export default Chart;
