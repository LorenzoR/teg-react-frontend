import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const India = (props) => {
  const [borderFill, setBorderFill] = useState("#caa265");
  const [fill, setFill] = useState("#d7b989");

  return (
    <g
      id="INDIA"
      onClick={(e) => props.countryClicked(e.currentTarget.id)}
      onMouseOver={() => {
        setBorderFill(shadeColor("#caa265", -50));
        setFill(shadeColor("#d7b989", -50));
      }}
      onMouseOut={() => {
        setBorderFill("#caa265");
        setFill("#d7b989");
      }}
    >
      <path
        id="india-border"
        fill={props.isSelected ? shadeColor("#caa265", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M2083.474 851.763c-2.836 1.881-4.815 3.888-8.085 4.851-9.29 2.736-22.013 6.96-27.195 3.675-5.182-3.286-2.4-5.874-8.82-4.336-1.822.436-5.559 2.779-8.453 2.94-4.942.274-10.594-2.745-16.096-2.205-3.62 1.467-6.962 5.314-10.878 3.601 4.469 3.33 3.975 5.897 1.617 8.159 4.284 2.42 8.372 5.29 13.083 6.909 6.271 2.05 14.813 7.181 11.392 14.994-8.572 4.178-.146 12.285-3.16 18.007-4.573 5.057.18 13.593-5.88 18.081-2.256 5.761-10.954 6.67-10.364 13.745 1.69 5.718-7.247 16.395 1.617 18.007 7.685-1.117 12.716 3.735 16.905 9.04 5.531-3.218 10.208-.19 14.333 3.75 7.293 8.113 7.242-7.446 2.646-10.511-3.855-4.91-5.406-13.428-1.176-18.375 4.97-.268 10.316-.005 10.143-6.762 6.821-2.902 7.837-10.218 12.127-15.582 6.541-4.071 8.848-12.038 9.776-19.257 1.194-5.741-3.45-17.95 5.806-17.714 5.738-2.405 9.142-8.044 13.01-12.936-2.385-1.57-4.074-4.532-6.395-6.247-2.636-3.55-4.18-7.798-5.953-11.834z"
      ></path>
      <path
        id="india-filling"
        fill={props.isSelected ? shadeColor("#d7b989", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M246.598 70.119c-3.98 1.223-8.061 2.73-12.285 2.45-1.734-.024-3.28-1.555-4.51-2.05-1.044.743-3.4.674-3.924 1.053 3.73 2.077 5.713 7.24 3.602 11.111-1.664 1.397.384 3.594-.423 5.355-.664 1.818-1.578 3.439-1.428 5.446-.485 2.936-2.284 5.549-4.46 7.51-1.437.879-2.168 3.28-.868 4.549 1.908.03 3.03 1.895 4.705 2.463-.956-3.37.073-7.467 3.068-9.487 2.031.106 2.946-1.89 4.404-2.8 1.95-1.555 2.128-4.4 4.158-5.896 1.787-1.375 2.747-3.585 2.713-5.824-.01-2.911-.555-6.31 1.513-8.715 1.036-1.635 3.264-1.518 4.556-2.789.608-.883-.512-1.626-.82-2.376zm-24.812 31.125c-.215.43.258-.037 0 0zm-2.813 3.75c-.006.12.17-.06 0 0z"
        filter="url(#filter14212)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="india-troops-group"
        transform="matrix(.49 0 0 .49 2489.327 1123.218)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-433"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-38"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-60" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

India.propTypes = {
  countryState: PropTypes.object,
  isSelected: PropTypes.bool,
  countryClicked: PropTypes.func,
};

export default India;
