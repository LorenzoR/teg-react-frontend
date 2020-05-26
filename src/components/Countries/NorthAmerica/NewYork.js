import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const NewYork = (props) => {
  const [borderFill, setBorderFill] = useState("#d89a61");
  const [fill, setFill] = useState("#e0b881");

  return (
    <g
      id="NEW_YORK"
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
        id="nueva-york-border"
        fill={borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1114.744 703.293c-.48.18-.954.404-1.47.515.527-.122.98-.32 1.47-.515zm-15.73.368c-6.275.11-11.736 1.687-9.628 9.775.926 8.185-4.151 18.073-13.083 18.008-3.298 5.337-2.953 12.643-5.88 18.154 1.517 7.713 8.312 13.852 12.642 19.698 1.62 8.3 3.508 11.015 11.613 12.275 6.72-.129 8.578 3.325 10.143 8.085 3.818 6.982 14.455 1.88 19.625 8.305 5.786 2.3 10.537-.007 16.684 3.822 7.732 3.829 16.313 5.016 24.77 5.954 9.686.633 19.298 2.036 28.959 2.572 9.274 3.012 12.46-6.55 15.655-12.2 1.577 8.434 10.011 3.863 15.362 6.247 11.146.47 9.51-6.397 16.684 1.029 1.04 4.12 3.926 7.57 4.116 11.98-2.74 2.646-4.962 10.225 2.132 8.38 7.247.528 15.93-6.448 8.452-12.937 4.798-2.703 4.805-8.41 2.205-13.083-8.362-1.878 1.26-6.119.074-10.804.883-7.128-9.52-2.842-8.306-8.012 6.258-2.99 5.458-10.808-.44-13.156-1.019 3.182-3.238 5.68-7.571 6.027-6.583-.522-11.084 4.762-17.493 4.777-5.412 2.662-11.784 2.327-16.832-1.029-6.213-1.244-12.267-2.986-18.154-5.292-6.893-1.237-11.486-7.395-18.449-8.452-5.126-2.986-10.346.747-15.729-.147-5.216.51-11.186.599-13.23-5.292-2.333-7.825-15.42-.954-14.48-9.555-.992-6.399.664-12.606.662-18.963-.99-6.315-7.504-9.943-11.76-14.112-1.562-2.219-3.854-3.73-5.218-6.101a16.239 16.239 0 01-.662-5.586c-.673.052-1.392.005-2.131-.073-2.925.097-6.966-.361-10.731-.294z"
      ></path>
      <path
        id="nueva-york-filling"
        fill={fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M-169.683 5.65c.327 4.482-2.15 9.28-6.438 10.969-1.868 2.933-.399 6.52 2.256 8.33 1.142 2.369 1.574 5.632 5.015 5.15 3.828.557 4.081 5.491 7.938 5.15 3.418 1.932 7.424 1.775 10.922 3.452 4.812 2.172 10.228 1.996 15.376 2.632 3.03.01 6.754 1.903 7.778-2.02 1.318-1.55 2.814-2.988-.176-3.046-3.808-1.053-7.727-2.127-10.998-4.411-3.447-2.145-7.364.009-11.038-.772-4-.31-5.523-4.868-9.615-5.002-3.055-1.376-3.317-5.401-3.391-8.351 1.076-3.438-.424-6.803-3.565-8.569-1.638-.853-1.848-3.732-4.064-3.512zm59.937 30c-2.317 1.62-8.126 1.525-8.734 3.143 3.403 1.486 7.058-1.78 10.404.297 1.371-.18-2.177-2.277-1.67-3.44zm5.938 16.688c-.906.518.007.438 0 0z"
        filter="url(#filter12196)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="nueva-york-troops-group"
        transform="matrix(.49 0 0 .49 1543.694 969.165)"
      >
        <circle
          id="canada-troops-5-1-9-6-8"
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
          id="canada-troops-number-6-2-3-2-7"
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
          <tspan id="tspan3745-2-7-6-6-9" x="-898.215" y="-432.383">
          {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

NewYork.propTypes = {};

export default NewYork;
