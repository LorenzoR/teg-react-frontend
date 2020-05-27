import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Labrador = (props) => {
  const [borderFill, setBorderFill] = useState("#d89a61");
  const [fill, setFill] = useState("#e0b881");

  return (
    <g
      id="LABRADOR"
      onClick={(e) => props.countryClicked(e.currentTarget.id)}
      onMouseOver={() => {
        setBorderFill(shadeColor("#d89a61", -50));
        setFill(shadeColor("#e0b881", -50));
      }}
      onMouseOut={() => {
        setBorderFill("#d89a61");
        setFill("#e0b881");
      }}
    >
      <path
        id="labrador-border"
        fill={props.isSelected ? shadeColor("#d89a61", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1230.065 668.307c-5.47 3.135-5.907 1.266-12.789 1.323-4.689-3.431-5.533 3.512-9.555 3.602-3.867 1.28-7.452 3.645-11.686 2.205-6.537-1.913-4.778 6.255-4.557 10.069.246 3.292 3.365 9.64-1.176 10.878-4.21.37-5.009 5.421-4.998 8.82-.344 4.136 4.16 8.976.955 12.716-.13.052-.244.09-.367.147 4.153 4.02 2.158 11.294 8.232 12.568 5.549 3.682 11.527 2.56 16.758-.735 7.107-.828 7.375 9.163 13.965 5.807 4.951-.905 11.359-2.138 15.655.808 3.996 3.77 12.955-1.15 15.95 3.749 2.22-1.902 5.101-2.944 6.541-5.807 3.587-.556 8.4-1.535 9.188-5.806-.003-4.255 1.472-9.342-1.69-12.863-2.747-3-8.058-4.634-7.645-9.628-1.879-3.812 3.167-8.744 0-11.393-3.705-1.63-8.956 5.251-10.584-1.102-.333-3.046 1.365-10.958-3.822-9.555-3.804 3.122-2.087-3.083-4.924-3.602-4.987-.53-5.747-6.242-8.012-9.702-1.045-1.681-3.298-2.558-5.439-2.499z"
      ></path>
      <path
        id="labrador-filling"
        fill={props.isSelected ? shadeColor("#e0b881", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M-119.683-8.225c-.589.462-1.505.884-2.594 1.188l.031.093c-.37.123-1.186.526-2.562.938-.151.045-.393.052-.563.094.106.42.168.309.282 1.312.102.907.222 2.155-.47 3.813-.435 1.044-1.412 1.978-2.468 2.718.054.241.088.479.25 1 .218.702.514 1.7.469 3.094-.005.163-.105.358-.125.531.292.707.401 1.116.5 1.532.053.03.105.061.156.093.521.346.306.358 1.469-.375a5.198 5.198 0 012.187-.75c1.953-.227 4.053.455 5.313 1.313.667.454.801.695 1.156 1.062 2.105-.46 5.392-1.203 9.125 1.063.154-.002.344-.005.906-.031.566-.027 1.5.04 2.47.156a5.198 5.198 0 012.405-1.469c-.267-.187-.247-.123-.968-.75-1.028-.893-2.454-2.932-2.782-5.281-.023-.083-.073-.168-.093-.25-.11-.033-.168.009-.282-.031-2.342-.824-3.698-3.206-4.093-4.75a5.188 5.188 0 01-.125-.657c-.924-.578-1.645-1.284-1.969-1.812-.122-.2-.108-.246-.188-.406-1.438-.91-2.548-2.129-3.062-3.032-.15-.262-.069-.181-.188-.406-.546.093-1.14.237-1.593.219-1.44-.06-1.687-.216-2.594-.219zm-8.531 10.25v.125c.01-.13.024-.037.03-.125-.007.005-.022-.005-.03 0z"
        filter="url(#filter14154)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="labrador-troops-group"
        transform="matrix(.49 0 0 .49 1664.818 922.636)"
      >
        <circle
          id="canada-troops-5-1-9-6-8-0-5"
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
          id="canada-troops-number-6-2-3-2-7-2-9"
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
          <tspan id="tspan3745-2-7-6-6-9-3-2" x="-898.215" y="-432.383">
          {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Labrador.propTypes = {};

export default Labrador;
