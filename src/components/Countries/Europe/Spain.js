import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Spain = (props) => {
  const [borderFill, setBorderFill] = useState("#eeca93");
  const [fill, setFill] = useState("#f3d9b0");

  return (
    <g
      id="SPAIN"
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
        id="espania-border"
        fill={props.isSelected ? shadeColor("#eeca93", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1571.696 889.982c3.22-2.208 7.786-4.559 11.946-7.003 4.828-.767 4.8 2.909 9.57 3.616 4.11 3.146 7.24 2.639 11.525 2.007 4.382-.315 10.984-3.156 11.878 2.53-.332 4.532.737 9.047 4.398 12.012 1.17 3.977-.231 8.71 1.734 12.364 3.634 3.014 7.286 6.019 11.434 8.308 4.335 2.45 6.143 6.27 4.733 11.144-1.081 5.813-2.54 11.116-8.524 13.795-4.23 3.872-8.944 2.129-12.38 6.323-.363 4.796 2.703 9.055-2.157 13.134-3.646 2.944-6.847 6.828-11.193 8.632-5.168.003-10.299.873-15.47.922-3.334-4.216-8.404-4.37-13.537-3.525-5.643 2.04-11.703 4.482-17.785 2.63-3.986-2.422-10.941 3.481-12.555-1.523-2.085-5.445 4.882-8.512 2.62-13.78-3.12-3.93-5.227-8.496-7.94-12.803-3.718-4.998-4.673-7.934-2.12-13.326 2.739-1.882 4.57 3.185 6.814-2.56 2.09-4.873-.207-10.45-.124-15.653-1.562-6.05-1.434-7.591-3.495-13.428-.192-4.522 2.752-7.363 6.463-9.279 4.089-1.094 7.987-2.429 12.911-1.176 4.862.847 3.141.077 11.254-3.361z"
      ></path>
      <path
        id="espania-filling"
        fill={props.isSelected ? shadeColor("#f3d9b0", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M29.834 87.362c-1.68.552-3.535.661-5.236.132-.254 1.461.867 2.787.719 4.277.353 3.093.956 6.407-.5 9.326-.409 1.285-2.232 2.196-.865 3.45.774 1.384 1.764 2.649 2.49 4.052.334 1.106.068 3.574 1.895 2.537 1.922-.608 3.852-1.34 5.904-1.256 2.096-.035 4.228.462 6.013 1.583 1.534-.023 3.331-.018 4.204-1.525.31-1.603-.236-3.386.819-4.855 1.383-2.523 4.16-3.797 6.81-4.538 1.656-.517 1.22-2.053-.204-2.467-2.07-1.406-4.417-2.885-5.188-5.422-.495-1.38-.672-2.858-.628-4.318-.878-1.036-1.027-3.327-2.943-2.46-2.237.142-4.338-.823-6.226-1.9-2.242.813-4.7 2.397-7.064 3.384z"
        filter="url(#filter18093)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="espania-troops-group"
        transform="matrix(.49 0 0 .49 2026.512 1148.975)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-4"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-3"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-0" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Spain.propTypes = {};

export default Spain;
