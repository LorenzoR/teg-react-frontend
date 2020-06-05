import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Japan = (props) => {
  const [borderFill, setBorderFill] = useState("#caa265");
  const [fill, setFill] = useState("#d7b989");

  return (
    <g
      id="JAPAN"
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
        id="japon-border"
        fill={props.isSelected ? shadeColor("#caa265", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M2088.426 655.383c-.91 3.847-1.157 3.159.564 6.757 2.846 4.724 7.022 9.033 12.594 10.228 5.654 2.953 11.075 7.385 17.812 7.227 3.273 2.02 4.337 6.613 4.61 10.264-.117 4.912-5.776 6.34-7.283 10.286-1.663 5.087 5.06 4.55 7.905 6.326 1.967 2.426 3.888 5.255 7.372 2.905 4.96-1.998 8.44-8.074 14.413-6.989 3.98.861 8.984 2.025 10.425 6.415 2.17 3.93 3.252 9.337 7.434 11.576 3.484.507 7.076 1.402 10.599.828 4.897-.235 5.895-5.596 5.9-9.515 1.185-3.968-.309-9.056-5.14-8.993-.921-3.278.632-9.542-4.995-8.463-4.014-1.187-7.357-4.114-11.205-5.708-4.866-4.377-4.623-11.388-4.561-17.378-1.62-4.247-7.075-3.71-10.759-4.321-3.94-2.072-6.762-5.95-8.95-9.756-1.304-4.287-6.173-4.301-9.816-3.712-5.796.576-11.652.347-17.461.22-4.895-.978-4.695-8.518-10.313-8.838-5.13 1.037-6.826 6.512-9.145 10.64z"
      ></path>
      <path
        id="japon-filling"
        fill={props.isSelected ? shadeColor("#d7b989", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M255.473-17.412c1.862 1.547 4.343 2.027 6.283 3.448 1.872.79 4.28.624 5.638 2.377 2.36 2.478 3.117 6.345 1.865 9.53.987.195 1.86-1.187 2.991-1.23 1.52-.506 3.225-.624 4.738-.033-1.026-1.77-2.283-3.66-2.042-5.805-.227-1.6-2.21-1.42-3.283-2.129-1.8-1.005-3.04-2.72-4.14-4.412-1.56-1.11-3.483-.121-5.207-.357-2.324.038-4.942.213-6.843-1.39zm26.81 17.295c-.695 2.029 2.07 6.239 4.051 4.323.018-2.158-3.047-5.547-4.051-4.323z"
        filter="url(#filter23025)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="japon-troops-group"
        transform="matrix(.49 0 0 .49 2580.28 899.457)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-81"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-29"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-3" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Japan.propTypes = {};

export default Japan;
