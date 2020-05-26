import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Canada = (props) => {
  const [borderFill, setBorderFill] = useState("#d89a61");
  const [fill, setFill] = useState("#e0b881");

  return (
    <g
      id="CANADA"
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
        id="canada-border"
        fill={borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1123.306 582.49c-4.474-.185-12.772.375-15.55 2.977-2.651 2.483.221 7.004-4.098 7.246-3.332.214-7.885-5.768-10.84-2.377-2.279 2.616-2.166 7.512-4.605 8.282-4.744 1.497-10.333-6.052-15.438-6.457-1.355-.003-9.052-.332-13.225 3.363-2.016 1.785-.767 8.173-2.23 9.02-6.045 3.497-7.883.114-10.55.475-4.782.647 8.005-16.863-9.385-13.866-20.85 3.145-4.676 12.715-5.127 15.963-.57 4.12-3.392 4.825-6.51 7.365-2.06 2.388 1.456 6.758-.573 9.765-2.045 3.03-8.838 3.1-10.798 3.994-2.654 1.212-10.473-2.394-13.163.968-2.847 3.425-3.672 12.364-6.496 15.653 5.055-.089 10.117-.248 15.068.588 7.508.986 7.575 9.17 9.775 14.626 1.055 8.207-5.245 14.532-6.1 21.977 3.754 4.063-1.684 7.769-.956 11.098 4.835 4.276 7.558 10.307 12.128 14.7 4.441 5.056 14.433 6.13 13.597 14.553-2.703 8.454 3.584 14.388 3.602 22.27 4.083 1.774 8.658 4.258 11.54 8.086 3.891 1.222 7.67 2.305 11.539 2.352 9.354-4.846 6.775-16.196 11.392-23.667 8.932.065 14.009-9.823 13.083-18.008-3.373-12.941 12.56-9.223 20.36-9.481 10.101 1.082 13.689-10.81 20.653-15.435l.809-.882.955-.882c2.683-6.314 8.186-15.307 14.7-7.644 7.543 1.183 21.91-11.418 12.863-16.979-12.055 3.802-4.21-16.55 4.63-12.568 5.638 3.525 16.841-7.174 6.321-7.203-8.827.624-8.764-11.92-.955-13.01-5.25-7.851 3.588-7.61 8.746-7.644 6.906-3.672 1.344-11.69-5.145-9.481-7.05-4.511-10.574-12.72-16.758-17.567-6.118.193-9.663 4.83-15.508.588-8.91.092 5.661-15.321-6.836-12.715-1.263-.22-9.666.009-10.915-.043z"
      ></path>
      <path
        id="canada-filling"
        fill={fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M-159.996-45.131c-3.583.185-4.708 5.82-9.008 4.279-2.91 1.607-6.267 4.124-9.616 1.92-1.622-1.14-4.189-2.802-4.318.371-1.95 3.104-6.63 3.978-9.72 3.05 2.387-.43-3.762-.774-3.305 1.847.553 3.864-3.076 6.132-6.05 7.653 2.582 2.867 3.647 6.962 3.48 10.75-.25 3.517-3.302 6.557-2.072 10.176.73 3.778 4.586 5.039 7.167 7.256 2.733 2.183 3.087 5.768 2.694 8.987-.158 1.974 2.832 7.298 4.39 4.627.56-3.344 1.966-7.543 5.785-8.2 2.522-1.915-.315-5.85 2.096-8.11 2.186-3.381 6.644-4.049 10.361-3.794 3.59 1.667 5.02-3.018 7.39-4.644 1.647-2.41 2.932-5.729 6.159-6.307 4.468-.2 1.106-5.67 3.95-7.996 1.45-2.066 3.638-2.693 2.854-5.474.327-2.893 3.588-5.51 2.192-8.359-1.785-3.285-5.791-1.298-8.576-2.835-3.262-.275-3.534-3.798-5.488-5.249l-.365.052zm20 25.375c.472.672.472-.493 0 0z"
        filter="url(#filter4368)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="canada-troops-group"
        transform="matrix(.49 0 0 .49 1531.139 867.982)"
      >
        <circle
          id="canada-troops"
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
          id="canada-troops-number"
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
          <tspan id="tspan3745" x="-898.215" y="-432.383">
          {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Canada.propTypes = {};

export default Canada;
