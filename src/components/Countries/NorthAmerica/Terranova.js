import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Terranova = (props) => {
  const [borderFill, setBorderFill] = useState("#d89a61");
  const [fill, setFill] = useState("#e0b881");

  return (
    <g
      id="TERRANOVA"
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
        id="terranova-border"
        fill={props.isSelected ? shadeColor("#d89a61", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1123.784 695.355c-3.307 4.115-6.673 8.27-11.907 8.673a16.24 16.24 0 00.662 5.586c1.364 2.372 3.656 3.882 5.218 6.1 4.256 4.17 10.77 7.798 11.76 14.113 0 6.357-1.654 12.564-.661 18.963-.94 8.6 12.146 1.73 14.48 9.555 2.043 5.89 8.013 5.803 13.23 5.292 5.382.894 10.603-2.839 15.728.147 6.963 1.057 11.556 7.215 18.449 8.452 5.887 2.306 11.941 4.048 18.154 5.292 5.048 3.356 11.42 3.69 16.832 1.03 6.409-.017 10.91-5.3 17.493-4.778 8.542-.683 8.906-9.592 7.938-16.023-1.475-6.936 7.575-10.925 5.439-17.273-2.847-5.298-12.038-.139-16.097-3.969-4.296-2.946-10.704-1.713-15.655-.808-6.59 3.356-6.858-6.635-13.965-5.807-5.23 3.296-11.21 4.417-16.758.735-6.074-1.274-4.094-8.525-8.247-12.546-6.384-.889-9.97-3.38-14.759-2.007-6.848 3.238-5.743-6.654-9.775-8.379-5.049-1.831-9.226 5.102-14.774 1.764-3.503-5.81-10.653-3.594-15.582-7.57-1.451-3.003-4.125-5.922-7.203-6.542z"
      ></path>
      <path
        id="terranova-filling"
        fill={props.isSelected ? shadeColor("#e0b881", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M-156.902 4.963c2.74 2.109 4.61 5.561 4.138 9.076-.363 1.92-.746 5.076 2.114 4.807 1.835.839 2.454 3.785 4.825 3.444 3.405-.558 7.017-.603 10.236.796 2.286 1.035 4.265 2.677 6.72 3.342 1.936.685 3.931 1.196 5.925 1.641 1.729.943 3.708 1.514 5.613.73 2.45-.637 4.75-1.792 7.257-2.18 1.018-1.35-.288-3.525.62-5.193.811-2.366-2.858-2.573-4.519-2.746-2.329.31-5.065 1.17-7.135-.403-1.294-2.179-3.84-.163-5.744-.626-2.586-.23-5.313-.994-7.23-2.82-1.79-1.115-1.072-4.508-3.615-4.233-2.081-.038-4.597.925-6.25-.856-1.062-1.598-2.748-2.324-4.512-1.46-3-.368-5.539-2.286-8.443-3.32z"
        filter="url(#filter13177)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="terranova-troops-group"
        transform="matrix(.49 0 0 .49 1607.948 955.87)"
      >
        <circle
          id="canada-troops-5-1-9-6-8-0"
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
          id="canada-troops-number-6-2-3-2-7-2"
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
          <tspan id="tspan3745-2-7-6-6-9-3" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Terranova.propTypes = {
  countryState: PropTypes.object,
  isSelected: PropTypes.bool,
  countryClicked: PropTypes.func,
};

export default Terranova;
