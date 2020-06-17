import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Turkey = (props) => {
  const [borderFill, setBorderFill] = useState("#caa265");
  const [fill, setFill] = useState("#d7b989");

  return (
    <g
      id="TURKEY"
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
        id="turquia-border"
        fill={props.isSelected ? shadeColor("#caa265", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1910.381 824.936c-10.246-1.42-21.312 2.61-23.079 12.936-6.936 6.265-16.514 12.78-26.092 13.083-.17.011-.344-.01-.515 0-.17.233-.316.51-.514.735-3.282 4.62-9.89.183-13.01 9.481-4.563 6.052-6.704 9.765-12.789 13.01-6.39 1.545-6.877 9.324-12.495 11.833-.331.352-.686.691-1.029 1.03 1.954 2.138 4.276 4.103 6.027 6.026 3.735 7.745 12.252 2.164 17.2 7.056-.4 5.636 2.836 16.302 9.407 8.673 4.66-5.582 10.402-11.006 18.302-10.143 7.53 1.6 11.243-6.324 14.92-11.319 3.08-6.873 7.725-5.243 14.406-4.85 2.847-.723 7.27-3.163 10.217-2.426 4.401 1.1 7.283 5.976 10.657 7.13 5.932-2.34 10.641.583 17.052 2.13 6.412 1.548 8.38 8.088 13.598 10.511 5.219 2.423 16.92 2.224 22.417 6.983 8.983 4.79 1.75-11.078 6.762-14.994 5.775-4.358 3.042-10.096 4.925-15.215-4.544-2.615-7.909-9.177-12.642-11.466-8.556-2.845-17.393-7.314-21.683-15.729-4.16-7.57-17.684-7.102-18.742-17.64-5.203-6.027-10.604-7.584-23.3-6.835z"
      ></path>
      <path
        id="turquia-filling"
        fill={props.isSelected ? shadeColor("#d7b989", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M178.098 57.619c-2.603.518-7.021-1.357-8.102 1.894-1.591 3.327-4.968 5.23-8.043 6.99-1.907 1.114-4.168 1.467-6.174 2.169-2.1.98-4.144 2.076-5.138 4.288-1.71 2.222-3.786 4.292-6.418 5.378 2.428.354 4.678 1.436 6.606 2.717 2.115-1.026 4.137-2.288 6.635-2.05 2.55.022 2.73-2.936 4.39-4.24 1.85-2.056 4.656-3.428 7.449-2.84 2.727-.323 5.572-1.885 8.263-.441 2.063 1.102 3.888 2.629 6.344 2.415 2.391.488 4.79 1.169 6.984 2.233 2.416 1.361 3.593 4.274 6.617 4.318 2.586 1.335 3.152-1.78 4.194-3.367-.308-2.912-4.09-3.458-6.284-4.609-2.953-1.69-5.643-4.041-7.167-7.136-2.321-.86-4.531-2.21-6.26-3.976-1.037-1.456-1.497-4.23-3.896-3.743z"
        filter="url(#filter19101)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="turquia-troops-group"
        transform="matrix(.49 0 0 .49 2350.885 1072.51)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-9"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-62"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-178" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Turkey.propTypes = {};

export default Turkey;
