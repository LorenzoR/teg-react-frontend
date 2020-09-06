import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from 'src/helpers/shadeColor';

interface Props {
  countryState: any;
  isSelected: boolean;
  countryClicked: (id: string) => void;
}

const California = (props: Props) => {
  const [borderFill, setBorderFill] = useState("#d89a61");
  const [fill, setFill] = useState("#e0b881");

  return (
    <g
      id="CALIFORNIA"
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
        id="california-border"
        fill={props.isSelected ? shadeColor("#d89a61", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1104.895 789.803c-4.633 2.558-9.054 5.622-13.304 8.82-10.801 3.404-22.985 8.018-34.986 8.232-15.243-3.238-23.285 8.531-26.533 21.535-10.522 8.258-6.867 21.663-13.598 31.385-4.131 8.703-25.1 17.21-13.45 26.46 9.538.737 19.188-.63 28.444 2.499 6.73 8.552 20.78-.49 30.43 3.16 9.117 7.023 19.043 11.722 29.62 16.023 1.888 9.413 8.832 3.722 13.083 10.878 4.575-5.153 12.202-7.707 18.08-.367 5.55-9.824 13.578.26 19.478 4.483 12.233-2.2-2.656-12.231-3.454-18.595-5.508-13.825-24.25-.53-28.592-14.333-8.38-3.453-13.752-9.792-24.916-8.379-10.652 1.576-20.633-14.12-8.82-18.89 3.847.273 7.756.544 11.686.736-1.889-4.232 1.58-11.334 3.896-14.847 6.781-6.918 11.547 12.729 16.684 1.543 3.238-5.558 7.963-10.518 13.304-14.038 5.683-1.752 11.804-1.594 17.713-1.764 6.809-.334 13.373-1.8 20.213-1.03 2.914-.803 5.46-.628 7.497.368 6.31-5.073 13.438-8.867 20.58-13.524-.662-4.719 2.362-6.942 4.336-10.07-8.79-.617-17.565-1.775-26.386-2.351-8.457-.938-17.038-2.125-24.77-5.954-6.147-3.83-10.898-1.522-16.684-3.822-5.134-6.38-15.664-1.396-19.551-8.158z"
      ></path>
      <path
        id="california-filling"
        fill={props.isSelected ? shadeColor("#e0b881", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M-167.277 45.619c-1.798 1.317-3.751 2.447-5.943 2.94-5.128 1.718-10.45 3.397-15.928 3.07-2.55-.895-3.158 2.7-3.734 4.434-.366 2.102-2.65 2.972-3.143 4.922-.72 2.807-1.005 5.765-2.473 8.333-.397 1.375-3.092 3.564-.277 3.408 2.528.197 4.324 2.601 6.912 1.45 1.293-.573 4.174.521 3.15-1.676-.545-5.016 3.532-9.975 8.499-10.569.996-2.896 3.106-5.598 6.201-6.363 2.387-1.17 5.256 1.516 6.71-1.272 2.058-2.115 4.685-3.777 7.674-4.08 2.242-.383 4.525-.322 6.79-.41-1.947-.886-3.918-1.65-6.09-1.547-2.748-.245-4.728-2.383-7.49-2.432l-.43-.103-.428-.105z"
        filter="url(#filter9264)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="california-troops-group"
        transform="matrix(.49 0 0 .49 1500.858 1057.792)"
      >
        <circle
          id="canada-troops-5-1-9-6"
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
          id="canada-troops-number-6-2-3-2"
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
          <tspan id="tspan3745-2-7-6-6" x="-898.215" y="-432.383">
          {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

California.propTypes = {
  countryState: PropTypes.object,
  isSelected: PropTypes.bool,
  countryClicked: PropTypes.func,
};

export default California;
