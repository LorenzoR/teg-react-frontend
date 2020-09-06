import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from 'src/helpers/shadeColor';

interface Props {
  countryState: any;
  isSelected: boolean;
  countryClicked: (id: string) => void;
}

const Oregon = (props: Props) => {
  const [borderFill, setBorderFill] = useState("#d89a61");
  const [fill, setFill] = useState("#e0b881");

  return (
    <g
      id="OREGON"
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
        id="oregon-border"
        fill={props.isSelected ? shadeColor("#d89a61", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1070.423 749.598c-1.17 2.204-2.84 4.128-5.512 5.513-3.868-.047-7.648-1.13-11.54-2.352.581.773 1.121 1.61 1.544 2.499-1.514 4.41-10.787 2.61-15.288 3.675-7.792-.17-13.411 6.57-20.874 7.717-10.471 2.18-21.264 1.442-31.899 1.25-7.192.452-13.692 4.132-19.845 7.644-4.554.255-3.521 8.632-6.248 5.071-2.543-2.658-2.67-2.767-.294.147-1.297 6.084-8.078 9.95-12.127 14.627-4.944 4.439-10.25 7.913-16.685 9.334-4.576 3.427-12.617 6.09-12.862 12.495.665 5.778-8.328 7.588-11.613 11.687-3.85 2.968-8.38 5.04-11.687 8.673-.023.026-.05.047-.073.073.197 1.086.417 2.157.956 3.234 1.083 2.166 3.086 3.234 4.189 5.439 1.088 2.175 2.499 3.435 2.499 6.32 0 2.407-.583 5.682 0 8.012.746 2.984 1.634 4.96 2.94 7.57.896 1.794 1.76 4.676 4.19 4.19 2.658-.531 5.169-1.972 7.57-2.572 1.669-.417 4.63-1.61 4.63-4.19v-6.688c0-1.26 1.11-5.652 3.382-3.381.94.94 2.283 2.648 3.748 3.38 1.701.851 4.63 2.295 4.63 4.19v13.891c0 2.292.708 3.575 2.132 4.999 1.29 1.29 2.406 4.547 4.19 5.439 2.358 1.179 4.931.939 7.938 1.69 2.154.539 4.717.441 7.13.441h14.7c1.454 0 4.863-.575 5.88.441.85.851 1.812 2.94 3.38 2.94h6.321c2.134 0 4.448.055 6.321-.882 1.74-.87 2.706-1.663 3.749-3.748.286-.573 1.858-4.09 2.94-4.63.494-.248.967-.406 1.47-.589-4.415-8.077 12.5-15.643 16.17-23.373 6.73-9.72 3.075-23.126 13.597-31.384 3.248-13.004 11.29-24.773 26.534-21.536 12-.213 24.184-4.827 34.986-8.232 4.25-3.198 8.67-6.261 13.303-8.82-.028-.048-.046-.097-.073-.147-1.566-4.759-3.424-8.213-10.143-8.085-8.106-1.26-9.994-3.975-11.613-12.274-4.33-5.846-11.126-11.985-12.642-19.698z"
      ></path>
      <path
        id="oregon-filling"
        fill={props.isSelected ? shadeColor("#e0b881", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M-186.433 28.588c-2.616 2.233-6.24 1.28-9.302 2-2.857 1.366-5.653 3.01-8.89 3.285-4.577.785-9.249.253-13.84.547-5.172 1.457-7.599 6.795-11.663 9.863-2.99 3.263-7.5 4.116-10.993 6.617-.294 3.83-3.89 5.932-6.71 7.86-2.607 1.518.897 2.45 2.114.97 2.564-1.096 5.162.951 7 2.512 3.314 1.474 5.111 5.26 4.3 8.77-.974 4.39 3.894 3.227 6.548 3.238 3.342-.25 6.683-.165 9.666.994.797-2.027 1.2-4.441 3.02-5.982 2.05-2.402 5.36-4.044 5.968-7.388.654-3.339 1.423-6.752 3.632-9.458 2.052-2.736 2.415-6.414 4.971-8.833 2.94-3.348 7.475-4.922 11.867-4.552 3.17-.007 6.365-.791 9.25-1.946-1.88-2.136-2.495-5.637-4.746-7.712-.602-.605-1.39-.696-2.192-.785z"
        filter="url(#filter7318)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="oregon-troops-group"
        transform="matrix(.49 0 0 .49 1432.91 1031.204)"
      >
        <circle
          id="canada-troops-5-1-9"
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
          id="canada-troops-number-6-2-3"
          x="-898.215"
          y="-432.383"
          style={{
            lineHeight: "125%",
            // WebkitTextAlign: "center",
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
          <tspan id="tspan3745-2-7-6" x="-898.215" y="-432.383">
          {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Oregon.propTypes = {
  countryState: PropTypes.object,
  isSelected: PropTypes.bool,
  countryClicked: PropTypes.func,
};

export default Oregon;
