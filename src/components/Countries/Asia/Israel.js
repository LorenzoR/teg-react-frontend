import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Israel = (props) => {
  const [borderFill, setBorderFill] = useState("#caa265");
  const [fill, setFill] = useState("#d7b989");

  return (
    <g
      id="ISRAEL"
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
        id="israel-border"
        fill={props.isSelected ? shadeColor("#caa265", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1910.16 879.914c-2.858-.017-6.549 1.94-9.04 2.572-6.68-.392-11.326-2.022-14.406 4.851-3.677 4.995-7.39 12.92-14.92 11.32-7.9-.864-13.641 4.56-18.302 10.142-2.509 2.913-4.507 3.108-6.027 1.985-1.816 5.991-1.208 12.279-1.323 18.448-.59 6.744 7.309 8.687 12.054 11.246 3.907 3.093 8.729 2.705 13.377 2.646 4.985 2.223 3.168 11.62 9.996 12.862 6.004 2.846 9.756-5.076 15.509-5.512 6.555-1.296 6.181-8.217 7.35-13.01 3.482-7.505 8.388-4.395 7.35-9.555.317-7.572 10.689-1.015 12.348-7.056 4.701-1.76 4.476-10.086 10.143-8.452 4.808-.067 7.205-5.525 10.51-8.38 2.786-1.354 4.426-3.42 5.366-5.806-3.56-2.958-5.81-7.617-11.099-8.893-6.411-1.548-11.12-4.47-17.052-2.132-3.374-1.153-6.256-6.029-10.657-7.13a4.99 4.99 0 00-1.176-.146z"
      ></path>
      <path
        id="israel-filling"
        fill={props.isSelected ? shadeColor("#d7b989", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M174.286 81.306c-1.627.976-3.591.729-5.392 1.007-1.302 1.57-2.197 3.511-3.948 4.671-1.985 1.504-4.547 2.307-7.035 1.979-2.128.55-3.145 2.703-4.712 4.037-1.157 1.331-.44 3.697 1.322 4.05.972.622 2.157.809 3.31.74 2.958-.22 5.607 2.043 6.548 4.735 1.56-.672 3.33-1.693 3.123-3.628.623-1.772 1.908-3.245 3.409-4.34.674-2.46 2.77-4.893 5.505-4.82 2.155-.249 2.413-2.936 4.15-3.851.844-.818 2.576-.786 3.191-1.316-.944-1.376-2.824-.26-4.167-.398-2.081-.125-3.928-1.374-5.304-2.866zm10.687 3.407c-.508-.266-.326.369 0 0z"
        filter="url(#filter18124)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="israel-troops-group"
        transform="matrix(.49 0 0 .49 2332.372 1133.682)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-41"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-8"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-5" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Israel.propTypes = {};

export default Israel;
