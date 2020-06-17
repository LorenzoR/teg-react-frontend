import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Alaska = (props) => {
  const [borderFill, setBorderFill] = useState("#d89a61");
  const [fill, setFill] = useState("#e0b881");

  return (
    <g
      id="ALASKA"
      onClick={(e) => props.countryClicked(e.currentTarget.id)}
      onMouseOver={() => {
        setBorderFill(shadeColor("#d89a61", -50));
        setFill(shadeColor("#e0b881", -50));
      }}
      onMouseOut={() => {
        setBorderFill("#d89a61");
        setFill("#e0b881");
      }}
      transform="matrix(.49 0 0 .49 781.677 458.12)"
    >
      <path
        id="alaska-border"
        fill={props.isSelected ? shadeColor("#d89a61", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="4.8"
        d="M232.278 774.403c-7.503 8.734-19.197 5.806-16.447-6.643-.481-12.894.954-26.016-13.039-31.658-9.34-1.435-14.42 19.72-26.857 6.062-2.364-2.597-2.63-13.57-5.88-16.145-6.82-5.407-17.003-2.192-18.668-5.994-4.742-10.836-8.061-18.078-9.684-22.588-5.435-15.099 1.082-24.851 2.846-37.309.53-2.416 7.185-5.703 7.853-10.335.75-5.195-4.547-12.083-5.278-21.333-.488-6.179 12.477-3.991 14.525-7.94 3.324-6.413-3.328-17.724-2.906-23.198.49-15.858 18.478-6.605 20.473-22.346 3.474-10.526 14.978-15.938 17.739-27.045 5.244-10.13 7.106-23.722 18.869-28.465 6.39-8.885 14.363-16.035 23.992-21.222 7.413-7.199 24.081-17.441 27.575-1.132-.36 14.816 14.183 14.825 21.5 4.665 3.88-3.846 13.264-11.5 9.654-.002 4.173 16.649-18.35 11.686-21.752 24.752-3.001 12.36 7.07 23.672 12.018 34.408 8.397 6.54 21.118-2.298 27.204 9.53 7.94 9.146 10.554 21.735 5.963 33.087-9.114 13.153-1.429 30.66 13.492 35.462 9.802 6.533 22.92 8.626 29.443 19.513-2.65 12.415-16.478 20.173-24.742 29.716-10.09 9.06-20.904 16.278-34.037 19.18-9.339 6.992-25.813 12.332-26.314 25.403 1.359 11.79-17.009 15.48-23.713 23.844-7.856 6.058-17.082 10.319-23.829 17.732z"
      ></path>
      <path
        id="alaska-filling"
        fill={props.isSelected ? shadeColor("#e0b881", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M-253.714 7.431c-1.764 1.563-3.796 3.13-4.397 5.53-1.022 2.06-2.088 4.18-3.827 5.737-.1 2.45-3.394 3.575-2.855 6.193.072 2.151-.881 4.256-2.359 5.79.405 2.324-.245 4.92-2.031 6.532-1.273 2.105.194 4.663 2.389 5.095 1.459 1.877 3.85 1.384 5.84 1.702 2.54.8 4.416 2.935 5.615 5.234 2.068-1.295 3.405-3.31 4.35-5.475 1.925-2.541 4.778-4.22 7.6-5.57 1.635-.64 4.35-1.338 4.767-3.04-1.162-1.117-2.827-1.644-3.675-3.123-2.587-3.211-3.444-7.936-1.574-11.698-3.137-.108-6.035-2.218-7.217-5.107-1.408-2.368-2.626-4.99-2.626-7.8zm-15.094 28.094c-.596.525.271.173 0 0z"
        filter="url(#filter6332)"
        transform="matrix(4.8 0 0 4.8 1464.129 496.08)"
      ></path>
      <g id="alaska-troops-group" transform="translate(1139.132 1088.166)">
        <circle
          id="canada-troops-5-1"
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
          id="canada-troops-number-6-2"
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
          <tspan id="tspan3745-2-7" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Alaska.propTypes = {};

export default Alaska;
