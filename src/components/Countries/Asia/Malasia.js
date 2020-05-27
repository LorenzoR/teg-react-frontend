import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Malasia = (props) => {
  const [borderFill, setBorderFill] = useState("#caa265");
  const [fill, setFill] = useState("#d7b989");

  return (
    <g
      id="MALASIA"
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
        id="malasia-border"
        fill={props.isSelected ? shadeColor("#caa265", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M2156.092 817.292c-1.34 1.331-3.042 2.19-6.248 2.058-4.294-.177-10.7 4.978-13.156 8.011-4.337 2.923-10.613 10.163-16.905 12.716-4.125 1.673-4.062-.674-7.644.808-3.055 1.264-8.072 3.5-11.025 3.749-7.14-.657-7.971 2.166-15.068 5.586-.977.47-1.784 1.02-2.572 1.543 1.773 4.036 3.317 8.283 5.953 11.834 3.397 2.51 5.38 7.796 10.29 7.276 5.504.222 10.516 3.178 12.642 8.159 3.027 3.304 7.356 6.566 5.219 11.686-.684 4.482 1.436 10.751 7.056 9.776 4.792.228 4.967 6.018 4.85 9.628-.593 6.15 4.06 4.491 5.587.147 2.177-3.858 7.162-4.852 9.628-8.6 1.911-3.83 3.273-8.408 7.57-10.29 3.36 1.28 10.562 3.947 9.188-2.792-.259-5.686 3.496-11.302.956-16.832 2.237-5.39-5.656-6.303-3.822-11.392-.202-5.695 10.35-6.402 6.247-12.348-1.953-4.526 2.317-8.479 2.573-12.936.718-4.574-3.697-7.968-4.337-12.201-3.465-.623-5.321-3.003-6.982-5.586z"
      ></path>
      <path
        id="malasia-filling"
        fill={props.isSelected ? shadeColor("#d7b989", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M277.91 54.838c-2.115.318-3.631 2.532-5.61 4.085-2.383 2.087-4.898 4.47-8.145 4.975-2.153-.098-4.014 1.168-6.016 1.704-.942.248-4.204-.25-2.585 1.349 1.399.901 3.225.703 4.638 1.63 1.738.896 3.243 2.262 4.25 3.944 1.993 1.737 3.655 4.262 3.39 7.01.375 1.161 2.346 2.167 3.156 1.883 1.017-2.668 3.384-4.93 6.266-5.362.873-1.883-.402-3.684-1.25-5.27-.86-2.446-.295-5.231 1.114-7.358 1.635-1.252.546-3.584 1.58-5.17.65-1.137.458-2.66-.704-3.368l-.07-.044-.013-.008zm-11.718 31.687c-.357.524-.348.944 0 0z"
        filter="url(#filter15192)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="malasia-troops-group"
        transform="matrix(.49 0 0 .49 2573.84 1084.583)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-889"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-77"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-64" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Malasia.propTypes = {};

export default Malasia;
