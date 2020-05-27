import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Java = (props) => {
  const [borderFill, setBorderFill] = useState("#90a8a0");
  const [fill, setFill] = useState("#afc1bb");

  return (
    <g
      id="JAVA"
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
        id="java-border"
        fill={props.isSelected ? shadeColor("#90a8a0", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M2153.341 918.157c-.267-2.878 9.974.329 14.135-1.592 1.799-2.019 4.907-7.451 6.71-6.445-.576 5.98-.297 12.016-.738 17.991-2.062 4.305 2.17 7.267 3.876 10.586.932 4.056.308 9.48-2.078 12.182-3.302 4.735-4.093 5.139-5.497 10.972-.41 3.423-5.69 6.572-9.377 8.361-1.456 3.647 1.914 8.616-1.545 11.154-2.824 1.406-6.194 2.917-7.627 5.96-.821 4.11.77 7.615.175 11.553-3.75 2.682-8.366-1.978-11.014-4.424-2.805-2.944-3.719-2.87-4.632-7.446.783-3.753-2.117-7.55-1.878-11.43.238-3.88-.946-5.674-.027-9.299 1.015-4.194 4.3-4.094 4.995-8.558 1.746-4.26.098-9.168-.707-13.13-.782-4.188 2.557-8.029 6.076-9.782 4.173-.911 7.696-4.061 8.79-8.228.967-2.792.632-5.546.364-8.425z"
      ></path>
      <path
        id="java-filling"
        fill={props.isSelected ? shadeColor("#afc1bb", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M282.723 95.9c-1.315.032-.73 1.825-1.468 2.526-1.034 2.108-2.962 3.742-5.188 4.474-.678 1.2.57 2.41.255 3.65.025 2.22-.571 4.515-1.88 6.318-.93.837-.593 2.185-.537 3.28.054.673-.087 2.515.883 2.166.497-.912 1.78-1.367 2.212-2.09-.34-2.14.553-4.67 2.646-5.576.986-.425 1.983-1.055 2.06-2.24.613-1.79 1.637-3.408 2.767-4.914-.483-.607.316-1.67-.645-2.041-1.086-1.612-1.372-3.656-1.105-5.553z"
        filter="url(#filter13218)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="java-troops-group"
        transform="matrix(.49 0 0 .49 2596.378 1173.122)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-59"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-46"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-92" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Java.propTypes = {};

export default Java;
