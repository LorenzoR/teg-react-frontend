import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Australia = (props) => {
  const [borderFill, setBorderFill] = useState("#90a8a0");
  const [fill, setFill] = useState("#afc1bb");

  return (
    <g
      id="AUSTRALIA"
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
        id="australia-border"
        d="M2168.125 1035.465c-6.213 6.013-6.41 9.681-12.265 13.127-.723 2.883-.803 11.812-4.824 5.57-3.5-2.572-10.307 1.133-10.126-5.894-3.111-6.386 4.324-11.233 4.83-16.225-5.624-2.842-12.014.43-14.449 5.9-3.224 4.99-12.944 5.97-11.591-2.104-.471-7.219 10.183-6.905 11.469-13.474-2.761-5.839-12.283-2.661-16.068 1.052-6.731 2.76-5.495 10.59-8.83 15.314-5.742 3.886-5.226 11.789-12.495 13.349 2.297 8.016-10.705 9.312-8.67 1.602.695-2.49.35-6.716-1.83-2.35-3.333 5.233-4.876 11.596-9.758 15.782-4.114 2.679-2.005 9.066-3.37 11.707-2.92-4.847-12.78-4.74-14.523 1.091-4.142 4.91-1.39 11.143-3.14 16.727-1.716 3.491-.179 7.098 2.892 8.142-3.29 8.165 9.332 7.97 9.546.848.224-3.835 8.473-12.865 7.032-4.461-1.46 6.548 4.372 9.01 9.606 6.017 3.352-2.55 7.291-8.966 10.165-2.127 1.527 5.183-.664 12.425 6.153 14.75 4.715 1.308 4.936 8.26-.199 8.717-3.827 7.834 7.6 8.858 12.145 10.36 2.668 6.177 10.606 3.374 14.014-.548 3.844-4.47 7.47-9.189 11.717-13.274 5.304-1.454 11.812 2.095 15.608-3.53 4.72-2.963 5.404-8.262 7.612-13.006 1.215-1.592 8.832 1.601 9.63-4.588.838-6.49 6.84-4.385 8.642-7.874 1.134-2.195-1.884-8.217-1.884-10.025 0-4.68-2.252-4.996-2.252-10.003 0-2.608 2.196-4.358 3.217-9.022.94-4.293-2.429-12.047-1.528-15.058 3.494-11.683.975-18.087-6.476-16.492z"
        style={{ WebkitTextAlign: "center", textAlign: "center" }}
        fill={borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.069"
        textAnchor="middle"
      ></path>
      <path
        id="australia-filling"
        fill={fill}
        d="M260.848 147.338c-1.081 1.7-2.09 3.564-3.781 4.78-.64 3.253-4.376 5.097-7.469 4.438-1.27 1.266-2.08 2.354-1.871 4.186.044 1.53-2.162 3.171-1.93 3.9 1.309.845 1.622 2.647 3.288 1.346 3.175-1.03 6.577 1.298 7.357 4.412.725 1.66-.106 3.877 1.955 4.585 1.797 1.536 2.949 4.163 2.076 6.478 1.339.442 2.345 1.381 3.076-.394 1.56-1.761 2.936-3.825 4.985-5.052 1.758-1.078 4.1-.274 5.747-.954 1.395-1.041 1.249-3.178 2.323-4.518.82-1.928 3.47-1.558 4.39-2.891.624-1.487 2.747-1.833 1.77-3.61-.145-1.35-1.227-3.263-.97-5.02-.21-1.852 1.6-3.248 1.315-5.03-.125-.879-.193-2.192-.679-.66-1.605 2.52-5.492 3.131-7.676 1.004-2.104-.26-4.41-.977-5.51-2.96-.718-1.175-.468-3.038-2.307-1.995-2.213.387-4.57-.38-6.089-2.045zm-4.75 26.218c-.177.145.411.12 0 0z"
        style={{ WebkitTextAlign: "center", textAlign: "center" }}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="0.88"
        filter="url(#filter10272)"
        textAnchor="middle"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="australia-troops-group"
        transform="matrix(.49 0 0 .49 2565.792 1303.515)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-03"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-092"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-54" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Australia.propTypes = {};

export default Australia;
