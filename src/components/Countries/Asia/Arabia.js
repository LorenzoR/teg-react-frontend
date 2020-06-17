import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Arabia = (props) => {
  const [borderFill, setBorderFill] = useState("#caa265");
  const [fill, setFill] = useState("#d7b989");

  return (
    <g
      id="ARABIA"
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
        id="arabia-border"
        fill={props.isSelected ? shadeColor("#caa265", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1950.145 898.215c-.94 2.386-2.58 4.452-5.366 5.807-3.305 2.854-5.702 8.312-10.51 8.379-5.667-1.634-5.442 6.691-10.143 8.452-1.66 6.041-12.031-.516-12.348 7.056 1.038 5.16-3.868 2.05-7.35 9.555-1.169 4.793-.795 11.714-7.35 13.01-2.843.215-5.192 2.226-7.57 3.895a27.059 27.059 0 002.719 5.292c2.176 5.838 8.727 6.84 14.038 5.513 2.843-2.77 5.554-7.643 9.702-3.234 5.805 2.48 9.093 8.252 13.818 12.054 5.29 1.965 5.283-8.156 10.364-7.424 4.79 2.521 3.935 11.629 10.804 10.217 5.356-.118 9.348 8.068 14.26 2.425 5.418-3.77 2.444-11.152 3.968-16.464.017-6.03 6.676-4.858 8.967-9.04-.005-4.385-4.736-8.058-6.688-12.128-3.072-5.71 3.521-7.536 7.203-9.922 5.794-1.695 1.61-8.87 5.439-11.393 5.833-2.057 1.792-8.783-1.911-10.804-.901-1.063-1.715-2.224-2.5-3.381-.48 1.652-1.738 2.277-4.63.735-5.497-4.759-17.198-4.56-22.417-6.983-.914-.424-1.743-.989-2.5-1.617z"
      ></path>
      <path
        id="arabia-filling"
        fill={props.isSelected ? shadeColor("#d7b989", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M192.88 88.931c-1.51 1.484-2.66 3.422-4.67 4.311-1.146.566-2.453.522-2.924 1.883-.978 1.157-2.294 1.957-3.367 3.014-.969.705-2.77.233-2.928 1.756-.62 1.155-2.259 1.474-2.663 2.717.098 1.05-1.043 2.78-.711 3.273 1.792-.32 3.252.912 4.668 1.787 1.421.396 2.283 2.448 3.829 2.028 1.079-.774 2.344-1.268 3.689-1.144 2.418.267 4.463 2.202 5.201 4.47.984.102 2.85.998 2.36-.817.132-1.618.611-3.191 1.262-4.672.824-.666 2.14-1.83.775-2.73-1.437-2.205-1.678-5.38.14-7.452a8.51 8.51 0 013.269-2.52c.713-.77.635-2.383.984-3.008-1.599-.513-2.908-1.75-4.62-1.948-1.427-.338-2.889-.521-4.295-.948z"
        filter="url(#filter16169)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="arabia-troops-group"
        transform="matrix(.49 0 0 .49 2383.08 1160.243)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-53"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-88"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-31" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Arabia.propTypes = {
  countryState: PropTypes.object,
  isSelected: PropTypes.bool,
  countryClicked: PropTypes.func,
};

export default Arabia;
