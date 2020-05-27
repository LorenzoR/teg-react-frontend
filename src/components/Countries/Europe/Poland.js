import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Poland = (props) => {
  const [borderFill, setBorderFill] = useState("#eeca93");
  const [fill, setFill] = useState("#f3d9b0");

  return (
    <g
      id="POLAND"
      onClick={(e) => props.countryClicked(e.currentTarget.id)}
      onMouseOver={() => {
        setBorderFill(shadeColor("#eeca93", -50));
        setFill(shadeColor("#f3d9b0", -50));
      }}
      onMouseOut={() => {
        setBorderFill("#eeca93");
        setFill("#f3d9b0");
      }}
    >
      <path
        id="polonia-border"
        fill={props.isSelected ? shadeColor("#eeca93", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1751.989 772.898c-3.63.024-7.096.713-10.143 3.234-3.055 1.657-7.116 3.599-13.038 4.147 6.731 1.52 10.402 6.544 14.36 6.363 6.267 2.699 13.605 1.83 17.935 8.085 4.344 4.84 10.451 7.022 16.317 8.453 2.144 5.458 1.551 11.633.735 17.346-1.316 5.305-1.197 10.832-1.838 16.243-1.217 6.717 6.755 9.719 7.865 15.582 1.521 7.89 9.857 9.624 15.582 13.45 2.241 5.699 8.163 10.26 6.174 17.053-.294 3.897-1.57 7.655-3.234 11.245 7.6 1.205 14.067-2.653 19.183-8.085 5.618-2.51 6.106-10.288 12.495-11.833 6.085-3.245 8.256-6.942 12.82-12.994 3.12-9.298 9.69-4.86 12.973-9.481 5.094-5.768.782-14.523-1.905-20.008-4.253-5.908-9.916-10.746-14.333-16.611-4.219-6.418-6.62-14.871-14.92-17.493-6.375-1.246-12.566-4.148-19.184-3.234-6.15 1.263-11.73-.875-15.214-6.174-3.481-7.225-12.118-9.866-18.816-5.219-8.013 2.35-9.818-9.137-17.2-9.628-2.21-.216-4.436-.456-6.614-.441z"
      ></path>
      <path
        id="polonia-filling"
        fill={props.isSelected ? shadeColor("#f3d9b0", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M120.973 38.369c-1.464.127-.789 1.03.159 1.255 2.176 1.73 2.397 4.767 2.55 7.337.029 3.078-.87 6.069-.973 9.137-.836 1.854 1.197 3.04 2.037 4.39.858 1.332.7 3.41 2.544 3.854 1.984.983 4.254 2.03 5.084 4.255 1.142 1.826 2.374 3.697 2.724 5.866 1.253-1.934 2.724-3.838 4.877-4.814 1.438-.647 2.507-1.81 3.334-3.122 1.518-2.203 3.128-4.608 5.755-5.573 1.45-.947-.39-2.646-.933-3.719-2.245-2.57-4.799-4.922-6.46-7.948-.965-1.478-1.395-3.653-3.451-3.967-2.315-.462-4.632-1.43-7.026-.954-4.113.123-8.264-2.207-10.106-5.921l-.078-.052-.037-.024z"
        filter="url(#filter22016)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="polonia-troops-group"
        transform="matrix(.49 0 0 .49 2261.541 1061.241)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-2"
          cx="-899.478"
          cy="-446.178"
          r="37.706"
          fill={
            props.countryState.player
              ? props.countryState.player.color
              : "#e03981"
          }
          stroke="#000"
        ></circle>
        <text
          id="canada-troops-number-6-2-3-2-1-1-8-4-0"
          x="-898.215"
          y="-432.383"
          style={{
            lineHeight: "125%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fill="#fff"
          stroke="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="1"
          fontFamily="sans-serif"
          fontSize="40"
          fontStyle="normal"
          fontWeight="normal"
          letterSpacing="0"
          textAnchor="middle"
          wordSpacing="0"
          xmlSpace="preserve"
        >
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-6" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Poland.propTypes = {};

export default Poland;
