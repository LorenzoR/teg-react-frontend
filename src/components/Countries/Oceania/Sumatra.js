import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Sumatra = (props) => {
  const [borderFill, setBorderFill] = useState("#90a8a0");
  const [fill, setFill] = useState("#afc1bb");

  return (
    <g
      id="SUMATRA"
      onClick={(e) => props.countryClicked(e.currentTarget.id)}
      onMouseOver={() => {
        setBorderFill(shadeColor("#90a8a0", -50));
        setFill(shadeColor("#afc1bb", -50));
      }}
      onMouseOut={() => {
        setBorderFill("#90a8a0");
        setFill("#afc1bb");
      }}
    >
      <path
        id="sumatra-border"
        fill={props.isSelected ? shadeColor("#90a8a0", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1977.655 993.907c.025 2.871.383 1.955.2 5.673-.183 3.72.745 4.941 2.846 7.894 2.161 3.793 6.149 6.202 10.321 7.158 3.758 1.397 6.136 4.793 9.556 6.681 2.688 2.197 5.403 4.744 6.268 8.238 1.141 3.609 3.437 6.826 6.3 9.269 3.936.573 7.406 2.862 11.418 2.82 4.308-.599 5.9 3.469 8.706 5.686 3.816 2.723 9.015 4.24 13.565 2.62-.298-3.115-3.552-5.452-5.3-8.043-1.526-3.408-5.537-4.045-7.656-6.787-2.372-6.27-1.582-13.143-2.157-19.707-.044-4.685 1.617-9.34.78-14.037-1.253-3.455-4.782-6.29-8.514-6.464-3.716-.035-.886-6.84-4.314-7.908-4.319-.984-8.504-1.817-9.437-4.913-2.669-1.664-6.19-2.141-8.753-4.322-3.05-1.547-6.103-5.12-9.764-2.708-4.671 2.642-5.495 8.324-7.631 10.544-2.136 2.219-6.458 5.434-6.434 8.306z"
      ></path>
      <path
        id="sumatra-filling"
        fill={props.isSelected ? shadeColor("#afc1bb", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M210.88 120.431c-.496 2.069-2.45 3.265-3.436 5.043-.546 1.634.66 3.295 2.128 3.927.88.344 1.819.55 2.623 1.076 2.02 1.187 3.645 2.904 5.42 4.407 1.515 1.551 1.536 4.153 3.448 5.374.612.372 1.685.601 2.106-.154.236-.926-.37-1.832-.313-2.787-.285-2.654-.332-5.348.063-7.994-.634-1.18-2.254-1.068-3.126-1.992-.656-.768-.596-2.009-1.607-2.537-.993-.706-2.188-1.097-3.084-1.943-1.32-.955-2.933-1.416-4.223-2.42z"
        filter="url(#filter11249)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="sumatra-troops-group"
        transform="matrix(.49 0 0 .49 2448.277 1225.44)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-93"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-68"
          x="-898.215"
          y="-432.383"
          style={{
            lineHeight: "125%",
            WebkitTextAlign: "center",
            textAlign: "center",
          }}
          fill={props.countryState.player && ['pink', 'yellow'].includes(props.countryState.player.color) ? '#000' : '#FFF'}
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-02" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Sumatra.propTypes = {};

export default Sumatra;
