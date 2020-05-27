import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const France = (props) => {
  const [borderFill, setBorderFill] = useState("#eeca93");
  const [fill, setFill] = useState("#f3d9b0");

  return (
    <g id="FRANCE" onClick={(e) => props.countryClicked(e.currentTarget.id)}
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
        id="francia-border"
        fill={props.isSelected ? shadeColor("#eeca93", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1690.543 808.619c-.73.104-1.491.427-2.352.955-8.124-.69-8.984 9.514-15.362 11.32-3.478-3.487-7.592.113-11.54 1.322-4.551 3.501-4.316 4.905-13.866 5.823-5.019 3.345-8.854 13.278-11.711 18.653-3.47 4.795-3.794 12.692 2.94 14.626 7.371 1.464 2.383 8.351-1.617 10.658-3.213 4.892-9.637 4.185-13.892 8.011-4 1.97-7.65 4.585-10.878 7.644 2.167.03 3.91.813 4.337 3.528-.332 4.532.75 9.016 4.41 11.98 1.17 3.977-.201 8.694 1.764 12.349 3.634 3.013 7.244 6.016 11.392 8.305 2.25 1.272 4.684 3.241 4.912 8.585 2.376-2.068 4.212-8.511 7.51-9.1 4.84-4.004 6.818-11.207 12.495-14.038 4.62 1.872 9.41 4.715 15.067 3.528 5.983 1.289 10.344-2.885 14.92-5.88 3.094-6.153 10.569-4.417 15.215-8.305 4.467-4.767 6.285-11.623 11.687-15.656 4.482-6.285-5.059-14.663 2.131-19.477 2.792-4.556 3.374-12.797-.294-16.685-5.528-3.187-3.118-11.201-9.555-13.67-6.093-.266-11.56-5.625-11.025-11.981.442-4.492-1.573-13.225-6.688-12.495z"
      ></path>
      <path
        id="francia-filling"
        fill={props.isSelected ? shadeColor("#f3d9b0", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M78.91 54.713c-1.856 2.21-4.993 1.692-7.52 2.283-1.598 1.258-3.758 1.455-5.353 2.677-1.235 1.282-2.75 3.674-1.08 5.208 2.098 1.757 2.177 4.9 1.387 7.327-.612 2.182-2.341 3.73-4 5.099-1.696 1.94-4.463 2.25-6.403 3.852.98 1.95 2.31 3.968 2.031 6.255.838 2.597 3.425.091 3.848-1.436 2.01-2.42 5.514-4.359 8.627-2.888 1.714.773 3.955 1.777 5.652.446 1.95-1.71 4.031-3.431 6.588-4.096 1.903-1.131 2.1-3.72 3.911-4.946-1.1-2.83-.496-6.23 1.475-8.533-1.145-1.975-1.774-4.688-4.175-5.516-2.335-1.15-4.153-3.273-4.987-5.732zm7.813 6.78c.031.384.303-.247 0 0z"
        filter="url(#filter19075)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="francia-troops-group"
        transform="matrix(.49 0 0 .49 2114.245 1087.803)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-8"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-6"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-8" x="-898.215" y="-432.383">
          {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

France.propTypes = {};

export default France;
