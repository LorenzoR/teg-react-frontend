import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Colombia = (props) => {
  const [borderFill, setBorderFill] = useState("#6bb682");
  const [fill, setFill] = useState("#9be09e");

  return (
    <g
      id="COLOMBIA"
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
        id="colombia-border"
        fill={props.isSelected ? shadeColor("#6bb682", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1314.15 903.213c-1.398.176-2.45 1.355-2.353 3.896-4.197.537-8.486-1.36-12.715-.515-.226 4.693-5.3 7.19-9.335 3.896-5.455-3.537-9.656 3.658-13.01 6.982-4.03 2.938-8.1 5.714-11.76 9.188-4.887 2.965-11 1.426-16.243 1.764-1.334-1.393-2.47-1.982-3.528-1.985-.266 4.324-2.964 8.611-6.982 10.07 1.048 3.676 4.116 7.568.22 10.657-5.644-.208-2.479 8.682-.882 11.54 1.277.245 2.37.962 3.234 1.91 2.897 4.672 6.213 9.172 8.82 14.039 1.313 5.528 6.023 3.373 9.85 1.985 3.26-3.669 7.633-5.089 12.494-4.851 4.712-1.689 7.184-8.298 12.79-7.718 4.76 1.578 10.47 2.284 15.875 1.985 5.897.66 11.528-.691 16.832-3.161 5.666 1.537 5.86-6.674 10.584-6.027 5.362 4.463 7.85-4.035 9.481-7.791 1.706-3.718-.352-12 5.954-10.216 4.781-.785 6.34-6.956 8.526-10.658.066-4.915 1.013-10.934-3.381-14.406-3.532-4.187-9.737-3.642-14.7-3.454-4.799.442-11.424 4.77-13.965-1.911-.24-3.13-3.477-5.513-5.807-5.219z"
      ></path>
      <path
        id="colombia-filling"
        fill={props.isSelected ? shadeColor("#9be09e", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M-79.104 92.64c-1.862.045-3.85.027-5.191 1.512-1.735.811-3.698.46-5.524.256-1.825 2.277-4.603 3.472-6.628 5.536-2.419 1.784-5.593 2.395-8.532 1.884.287 1.991-1.65 4.216-.416 5.855.923 1.138 1.593 3.043 2.592 3.76 1.726-1.21 4.22-.834 5.672-2.5 2.226-1.938 5.489-3.026 8.33-1.846 2.162.522 4.428.431 6.624.342 1.787-.337 3.753-.78 4.916-2.312.813-.732 3.866-1.437 3.594-1.528.384-2.305.845-4.933 2.855-6.436.893-.997 3.026-.597 3.152-2.192-.154-2.032-2.925-.44-4.21-.344-2.536.51-5.504.134-7.234-1.987z"
        filter="url(#filter23989)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="colombia-troops-group"
        transform="matrix(.49 0 0 .49 1734.98 1158.236)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3"
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
          id="canada-troops-number-6-2-3-2-1-1"
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
          <tspan id="tspan3745-2-7-6-6-2-9" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Colombia.propTypes = {};

export default Colombia;
