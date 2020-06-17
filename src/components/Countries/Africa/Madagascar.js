import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Madagascar = (props) => {
  const [borderFill, setBorderFill] = useState("#fdb456");
  const [fill, setFill] = useState("#fec883");

  return (
    <g
      id="MADAGASCAR"
      onClick={(e) => props.countryClicked(e.currentTarget.id)}
      onMouseOver={() => {
        setBorderFill(shadeColor("#fdb456", -50));
        setFill(shadeColor("#fec883", -50));
      }}
      onMouseOut={() => {
        setBorderFill("#fdb456");
        setFill("#fec883");
      }}
    >
      <path
        id="madagascar-border"
        fill={props.isSelected ? shadeColor("#fdb456", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1924.182 1119.998c-4.312-3.76-4.708-9.109-4.223-14.499.2-5.347-.423-10.766.331-16.066 2.317-4.417 8.05-1.023 11.4.218 4.73-.633 3.734-6.124 6.554-9.528 1.344-4.65 3.517-9.14 7.627-11.643 2.736-4.178 10.344-1.423 13.285.604 4.034-2.479 6.764-9.503 12.497-6.35 3.52 3.687 9.435.186 12.55 4.109 2.45 4.447-3.701 8.602-6.696 11.233-2.947 2.908-4.892 7.609-4.898 11.906-.62 4.677-1.186 9.398-.112 14.128 3.404 4.98-2.267 9.829-7.21 9.343-4.67 1.553-1.523 8.875 2.889 9.184 3.289 4.003-1.404 8.413-1.763 12.565-.09 3.747 1.576 11.617-4.793 8.446-4.154-2.137-8.71 2.52-7.313 6.757-.92 4.121-4.556 7.794-1.738 12.287.965 2.852 2.617 8.504-2.578 7.464-5.19-.418-9.498 4.465-9.198 9.529-3.812 1.762-10.935-.287-11.262-5.913-2.54-4.234-8.392-5.035-11.115-8.998-.785-4.993-1.569-10.552.375-15.36 1.802-4.136 2.86-8.612 5.255-12.45.85-4.958 2.11-10.145.3-15.057-.087-.633-.093-1.273-.164-1.908z"
      ></path>
      <path
        id="madagascar-filling"
        fill={props.isSelected ? shadeColor("#fec883", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M192.473 160.181c-1.05 1.157-1.335 3.03-2.057 4.207-.634 2.042-1.875 4.018-3.909 4.893-1 .849-3.326-.07-2.756 1.771-.405 1.822-.098 3.544 1.232 4.86.644 1.59.78 3.344.957 5.04.039 2.093-.288 4.21-.927 6.195-.922 1.74-1.466 3.643-2.224 5.455-.351 1.558.65 2.81 1.94 3.48.963 1.434 2.89-.003 3.048-1.272-.324-1.77.693-3.265.93-4.957.14-2.86 2.15-5.536 4.931-6.308 1.38-.558.592-2.695-.294-3.508-1.41-2.446-1.108-5.83 1-7.786.881-.8 2.667-1.151 2.029-2.744-.131-2.233.173-4.47.471-6.668.235-.783.97-2.572-.59-1.712-1.327.188-2.646-.293-3.78-.946z"
        filter="url(#filter9294)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="madagascar-troops-group"
        transform="matrix(.49 0 0 .49 2384.69 1335.71)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-33"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-80"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-56" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Madagascar.propTypes = {};

export default Madagascar;
