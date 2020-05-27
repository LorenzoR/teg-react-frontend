import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Sweden = (props) => {
  const [borderFill, setBorderFill] = useState("#eeca93");
  const [fill, setFill] = useState("#f3d9b0");

  return (
    <g
      id="SWEDEN"
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
        id="suecia-border"
        fill={props.isSelected ? shadeColor("#eeca93", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1731.518 641.062c-.617.04-1.205.132-1.764.22-4.47 1.611-9.238 1.575-13.818 2.352-4.49 3.122-6.815 9.226-12.569 10.657-6.969 4.068-3.78-7.612-9.996-7.129-5.963-3.224-12.555.098-16.243 5.072-3.113 3.534-7.607 6.672-12.495 5.292-2.097 5.036-8.276 5.524-12.642 2.792-3.604 2.402 2.4 12.367-4.704 11.54-6.832-.012-4.553 9.183-.515 11.687 4.098 4.07-.87 11.495 4.63 14.7 5.11 2.704 5.22 9.09 4.337 14.038-5.526 4.104.473 8.217 3.381 11.54 3.96 3.518 7.67.253 9.408-3.455 4.992-2.858 7.04 9.25 11.834 3.969 5.266-6.25 4.338 7.895 9.555 3.455 5.424-1.37 8.067-7.375 13.67-8.306 6.477-.435 9.953-6.542 13.892-10.584 6.454.64 4.169-11.91 11.025-8.232 1.064.46 2.159 1.106 3.308 1.69.048-.243.082-.486.147-.734-.11-2.474 1.079-4.667 2.205-6.762 5.054-8.188 3.62-18.108-3.602-24.697-4.769-8.056 3.299-19.166 11.393-21.756a21.547 21.547 0 01-.22-1.616c-.57-4.943-5.904-6.017-10.217-5.733z"
      ></path>
      <path
        id="suecia-filling"
        fill={props.isSelected ? shadeColor("#f3d9b0", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M94.004-19.6c-1.559 1.927-3.652 3.349-5.963 4.22-2.864 1.444-6.768-.254-7.693-3.314-1.581 1.282-2.762 3.082-4.684 3.92-1.522.804-3.22.837-4.573 1.895-2.01.14-2.198 2.044-3.35 3.226-.851 1.265 1.026 2.493.477 3.962-.032 1.769 1.963 2.555 2.403 4.19.71 1.557.987 3.293.883 4.995 1.743-.136 3.786-.104 5.063 1.281 1.625-.573 3.65-.08 4.825.716 1.442-1.301 3.256-2.284 5.215-2.453 1.494-1.274 2.417-3.196 4.241-4.075.66-2.208 2.754-3.86 5.031-4.094 1.073-1.371.807-3.534-.649-4.528-2.553-2.582-2.602-6.773-1.226-9.94z"
        filter="url(#filter23975)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="suecia-troops-group"
        transform="matrix(.49 0 0 .49 2122.294 904.287)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-1"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-06"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-1" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Sweden.propTypes = {};

export default Sweden;
