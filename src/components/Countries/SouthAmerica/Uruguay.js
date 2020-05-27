import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Uruguay = (props) => {
  const [borderFill, setBorderFill] = useState("#6bb682");
  const [fill, setFill] = useState("#9be09e");

  return (
    <g
      id="URUGUAY"
      onClick={(e) => props.countryClicked(e.currentTarget.id)}
      onMouseOver={() => {
        setBorderFill(shadeColor("#6bb682", -50));
        setFill(shadeColor("#9be09e", -50));
      }}
      onMouseOut={() => {
        setBorderFill("#6bb682");
        setFill("#9be09e");
      }}
    >
      <path
        id="uruguay-border"
        fill={props.isSelected ? shadeColor("#6bb682", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1389.634 1028.604c-6.12.587-10.559 6.476-13.377 11.834-.275-.024-.599-.054-.882-.074 1.017 3.746 1.567 8.193-.588 11.687-3.153 2.95-7.61 1.367-11.025 2.866-3.753 3.31.056 9.127-3.014 12.79-4.292 1.815-1.39 7.729 2.793 6.761 3.172 3.163.348 9.048 3.455 12.716 2.964 3.588 6.188 7.093 8.6 11.098 3.048 2.964 7.48 1.204 10.216-1.25 3.007-2.383 5.572-5.334 8.893-7.276 4.563-1.39 7.951-5.531 12.569-6.247 5.02 1.294 8.596-3.926 13.744-2.426 4.242.611 8.43-1.162 10.437-4.998 1.575-3.755 1.443-8.416 5.807-10.216 2.895-2.951 2.76-7.024 2.866-10.878-.151-4.665-2.967-8.785-2.131-13.598-.14-.88-.148-1.772-.147-2.646-4.116-5.164-10.99-6.51-18.008-5.439-9.555 2.558-16.76-4.362-25.725-4.19-1.595-.5-3.07-.65-4.483-.514z"
      ></path>
      <path
        id="uruguay-filling"
        fill={props.isSelected ? shadeColor("#9be09e", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M-46.09 143.838c-.863.966-1.952 1.972-1.523 3.414-.011 2.586-1.23 5.371-3.695 6.473-.934.656-2.827.213-2.455 1.828-.104 1.114.954 1.787 1.126 2.833.316 1.047.392 2.146.423 3.233.798.512 1.342 2.916 2.42 1.92 1.307-1.257 2.821-2.301 4.49-3.007 1.808-1.14 3.702-2.508 5.914-2.566 1.447.071 2.663-.948 4.097-1.026.997-.424 2.752.645 2.706-.928.516-1.652 1.671-3.022 2.99-4.104-.446-.477.1-1.492-.29-2.169-.308-1.04-.597-2.094-.594-3.189-.079-1.205-1.5-.8-2.305-.76-1.781.329-3.619.429-5.398.026-2.046-.399-3.958-1.301-6-1.699-.635-.077-1.31-.007-1.905-.28z"
        filter="url(#filter26952)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="uruguay-troops-group"
        transform="matrix(.49 0 0 .49 1841.386 1278.563)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-6"
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
          id="canada-troops-number-6-2-3-2-1-1-56"
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
          <tspan id="tspan3745-2-7-6-6-2-9-9" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Uruguay.propTypes = {};

export default Uruguay;
