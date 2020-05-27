import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Kamchatka = (props) => {
  const [borderFill, setBorderFill] = useState("#caa265");
  const [fill, setFill] = useState("#d7b989");

  return (
    <g
      id="KAMCHATKA"
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
        id="kamchatka-border"
        fill={props.isSelected ? shadeColor("#caa265", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M2043.93 607.743c-.957.005-1.903.184-2.792.662-3.476 2.394-6.671 8.683-11.613 6.174-2.315-3.153-4.71-6.323-9.188-4.925-4.514.367-9.407.582-13.303 3.087-2.825 3.263-5.871 6.373-9.335 8.967-1.358 1.615-3.164 2.755-4.924 3.896 2.138 5.089-1.443 9.895-2.94 14.847-.603 6.525-1.773 14.589 2.72 19.992 5.42 3.257 14.683-.305 17.64 6.615-.048 1.553.557 2.807 1.47 3.895 3.786-.647 7.61-1.007 11.465-.955 4.712-.181 8.214-3.583 11.025-6.983 3.92-2.515 7.615-6.368 12.642-6.174 5.09.076 6.768-4.64 6.1-8.893 2.534-2.917 7.157-2.61 10.29-4.778 2.892-2.143 4.67-9.663.295-11.098-5.693-.024-5.724-5.312-5.807-9.482-1.607-3.766-3.653-7.453-6.247-10.657-1.638-2.339-4.622-4.203-7.497-4.19z"
      ></path>
      <path
        id="kamchatka-filling"
        fill={props.isSelected ? shadeColor("#d7b989", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M221.931-33.98c-1.918-1.047-3.852.569-5.105 1.913-1.97 1.068-2.34 3.201-2.89 5.15-.484 1.635-1.583 3.63-.65 5.256 1.196 1.49 3.437.48 4.812 1.707 1.36.68 2.252 2.725 3.993 2.276 1.696-.652 2.617-2.394 4.155-3.311 1.332-.958 2.832-1.702 4.433-2.082.636-1.79 1.888-3.308 3.335-4.296.38-1.549-1.05-2.78-1.042-4.31-1.514-4.889-6.082 1.399-11.04-2.303zm16.573 8.849c-.157.178.21-.01 0 0z"
        filter="url(#filter25987)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="kamchatka-troops-group"
        transform="matrix(.49 0 0 .49 2461.96 858.408)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-3"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-65"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-63" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Kamchatka.propTypes = {};

export default Kamchatka;
