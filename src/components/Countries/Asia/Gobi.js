import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Gobi = (props) => {
  const [borderFill, setBorderFill] = useState("#caa265");
  const [fill, setFill] = useState("#d7b989");

  return (
    <g
      id="GOBI"
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
        id="gobi-border"
        fill={props.isSelected ? shadeColor("#caa265", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M2007.548 737.838c-1.457 2.792-5.391 3.885-4.924 10.29.838 1.733-3.918-.393-4.557 2.132-1.621 6.401-7.509 4.723-10.51 6.1-6.405-.366-12.133 2.718-18.008 4.704-7.958 1.642 3.408 9.889-5.586 10.878-4.743 1.858-10.274 4.837-15.362 9.776 1.204 6.454.848 14.016 6.983 18.154 9.528 4.967 6.076 18.882 15.14 24.182 7.314 2.975 10.211 10.352 13.23 17.125.035-.074.041-.143.074-.22 3.27-4.499 7.7-9.04 13.818-8.012 4.897 1.602 5.271-1.805 5.954-5.586 3.365-4.638 5.828-8.817 6.1-14.773 2.641-4.746 7.14-8.61 11.613-11.76 3.611-3.214 7.452-6.689 7.203-11.98-1.073-6.022 5.985-8.198 6.027-13.966.511-6.475-9.544-7.3-8.158-14.332 2.012-5.963-2.334-10.817-7.718-11.834-.41-4.752-3.515-7.212-7.13-9.996a46.008 46.008 0 00-4.189-.882z"
      ></path>
      <path
        id="gobi-filling"
        fill={props.isSelected ? shadeColor("#d7b989", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M217.504 22.119c-1.025 1.738-3.282 2.16-4.486 3.776-2.445 1.822-5.657 1.251-8.424 2.097-2.02.29-1.174 2.938-2.458 4.035-.972 1.473-2.805 1.508-4.173 2.348-1.122.473-2.757 1.227-2.393 2.72.268 1.998 2.64 2.489 3.519 4.13 1.434 1.998 2.068 4.41 2.799 6.72 1.053 1.612 3.158 2.04 4.314 3.567.518 1.054 1.456 1.87 2.552 1.128 1.873-.053 3.162-1.66 3.877-3.231.772-1.631.423-3.662 1.73-5.076 1.493-2.26 3.687-3.89 5.785-5.54 1.613-1.09.866-3.12 1.617-4.635.44-1.306 2.305-2.678.45-3.753-1.71-1.434-2.102-3.87-1.91-5.991-.854-.875-2.453-.937-2.799-2.295z"
        filter="url(#filter21065)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="gobi-troops-group"
        transform="matrix(.49 0 0 .49 2433.789 1004.094)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-85"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-61"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-15" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Gobi.propTypes = {};

export default Gobi;
