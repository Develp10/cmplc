import React, { memo } from "react";
import { useTranslation } from "react-i18next";

const CustomLastDot = memo(({ cx, cy, payload, ico_info }) => {
  const { t } = useTranslation();

  const x = cx > 900 ? cx - 230 : cx - 114;
  const y = cy - 240;

  if (
    !ico_info ||
    ico_info.dates[ico_info.dates.length - 1].date !== payload.date
  ) {
    return "";
  }

  return (
    <>
      <svg
        x={x}
        y={y}
        width="1140"
        height="454"
        viewBox="0 0 1140 454"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M41 51C29.402 51 20 60.402 20 72V119.167C20 130.765 29.402 140.167 41 140.167H99.4909L114 158L128.509 140.167H188C199.598 140.167 209 130.765 209 119.167V72C209 60.402 199.598 51 188 51H41Z"
            fill="#3B3B3B"
          />
        </g>
        <g filter="url(#filter1_d)">
          <path
            d="M36 17.5C36 7.83502 43.835 0 53.5 0H175.5C185.165 0 193 7.83502 193 17.5V17.5C193 27.165 185.165 35 175.5 35H53.5C43.835 35 36 27.165 36 17.5V17.5Z"
            fill="#3B3B3B"
          />
        </g>
        <text
          width="30px"
          className="custom-dot-text"
          x={115}
          y={17}
          dy={-4}
          fill="white"
          textAnchor="middle"
          wordSpacing={2}
        >
          {t("custom_last_dot__cmp_sold")}
        </text>
        <text
          className="custom-dot-text"
          x={115}
          y={34}
          dy={-4}
          fill="white"
          fontSize={10}
          textAnchor="middle"
        >
          {ico_info ? ico_info.selled_coins : "0"}
        </text>
        <text
          className="custom-dot-text"
          x={115}
          y={75}
          dy={-4}
          fill="white"
          fontSize={10}
          textAnchor="middle"
        >
          {t("custom_last_dot__collection_at_usdt")}
        </text>
        <text
          className="custom-dot-text-sbor"
          x={115}
          y={110}
          dy={-4}
          fill="white"
          fontSize={10}
          textAnchor="middle"
        >
          170.91 USD
        </text>
        <text
          className="custom-dot-text"
          x={115}
          y={135}
          dy={-4}
          fill="white"
          fontSize={10}
          textAnchor="middle"
        >
          {t("custom_last_dot__commit_phase")}
        </text>

        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="51"
            width="229"
            height="147"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d"
            x="16"
            y="0"
            width="197"
            height="75"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="10" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
});

export default CustomLastDot;
