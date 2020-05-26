import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Italy = (props) => {
  const [borderFill, setBorderFill] = useState("#eeca93");
  const [fill, setFill] = useState("#f3d9b0");

  return (
    <g
      id="ITALY"
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
        id="italia-border"
        fill={borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1717.223 878.297c.085 1.61-.21 3.174-1.249 4.63-5.402 4.033-7.22 10.889-11.687 15.656-.332.278-.67.509-1.029.735 2.36 2.098 4.257 4.738 5.733 7.57 4.335 6.571 7.53 13.78 11.834 20.36 2.893 3.32 7.675 11.578 1.25 13.524-6.856 1.305-.337 5.97 2.425 7.717 4.134 6.271 6.327 13.698 10.804 19.772 2.689 4.626 5.63 9.191 9.996 12.421 6.36.288 10.602 3.798 14.847 8.012 5.067 6.71 11.343-.778 15.656-4.116 7.53.044 13.548-5.022 20.874-5.44 6.05-.467 11.194.906 14.222-5.775 4.146-6.776-3.703-7.276-7.901-8.41-5.443-2.286-10.342-6.334-16.611-6.027-5.449-.712-10.533-6.156-11.687-11.54 2.016-6.349-5.4-7.779-5.88-13.082 1.661-5.747-2.872-9.079-6.027-12.495 3.884-1.243.691-7.616 5.219-7.056 4.834.95 9.735-4.142 13.965.294 7.308 1.105 6.83-9.713 2.058-13.083-2.046-6.092-9.231-4.636-11.613-9.776-.21-8.618-8.8-2.417-13.598-2.572-4.671 2.282-9.891.455-14.847.955-6.155 1.208-11.22-2.159-15.435-6.247-3.262-2.9-7.124-5.084-11.319-6.027z"
      ></path>
      <path
        id="italia-filling"
        fill={fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M94.91 82.931c-1.66 1.33-.097 2.906.69 4.21 1.458 2.662 2.894 5.349 4.693 7.798 1.352 2.375 2.081 5.406.886 7.993.693 1.944 1.92 3.637 2.725 5.533 1 1.795 2.05 3.632 3.513 5.084 1.366.736 2.98 1.008 4.163 2.08.812.887 2.02 1.534 2.841.274 1.263-1.17 3.377-.664 4.573-1.528-4.1-1.28-7.044-5.302-7.396-9.537-1.672-1.532-2.583-3.835-2.469-6.094-1.657-1.443-2.95-3.592-2.53-5.864.523-1.577 1.231-3.11 1.94-4.609.906-1.372 2.418-2.252 3.997-2.62-1.666-.223-3.185.93-4.88.724-1.76-.087-3.494-.383-5.26-.25-2.763-.186-5.379-1.433-7.485-3.194z"
        filter="url(#filter21036)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="italia-troops-group"
        transform="matrix(.49 0 0 .49 2196.345 1175.536)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-26"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-64"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-9" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Italy.propTypes = {};

export default Italy;
