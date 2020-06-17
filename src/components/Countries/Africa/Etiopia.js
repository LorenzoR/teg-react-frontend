import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Etiopia = (props) => {
  const [borderFill, setBorderFill] = useState("#fdb456");
  const [fill, setFill] = useState("#fec883");

  return (
    <g
      id="ETHIOPIA"
      onClick={(e) => props.countryClicked(e.currentTarget.id)}
      onMouseOver={() => {
        setBorderFill(shadeColor("#fdb456", -50));
        setFill(shadeColor("#fec883", -50));
      }}
      onMouseOut={() => {
        setBorderFill("#fdb456");
        setFill("#fec883");
      }}
    >
      <path
        id="etiopia-border"
        fill={props.isSelected ? shadeColor("#fdb456", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1787.49 1029.413c-2.792 2.865-5.24 5.45-10.04 5.274-1.478.56-3.273.276-4.591 1.125-9.487 6.105-14.692 19.974-19.915 29.542 8.405.721 17.357-3.067 25.21 1.47 7.424 3.456 7.739 13.749 15.362 16.979 5.362 3.912 11.63 6.714 18.262 7.344 4.366 2 10.82 1.213 13.637 5.224.41 9.062 10.357 4.14 15.929 6.24 6.129 3.595 13.544 2.804 20.084 1.13 8.108-.51 16.231.78 24.33-.019 2.63-8.118 8.038 5.631 12.12-1.071 2.984-6.81 5.251-14.634 4.464-22.167-.557-9.394-10.692-11.031-17.078-15.42-6.743-4.434-14.315-7.265-21.343-11.15-5.022-2.865-7.795-8.677-13.635-10.305-7.748-2.886-16.415-2.756-23.765-6.813-7.807-1.968-16.582 2.227-23.842-2.546-4.253-3.856-9.469-5.234-15.19-4.836z"
      ></path>
      <path
        id="etiopia-filling"
        fill={props.isSelected ? shadeColor("#fec883", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M124.098 144.15c-1.668 1.84-4.576 1.41-6.296 2.937-1.063 1.02-3.111 3.54-.247 3.264 3.15.632 6.017 2.562 7.588 5.39.822 1.292 1.434 2.794 2.918 3.462 1.77 1.208 3.814 2.01 5.941 2.239 2.606.784 5.665.905 7.634 3.027 1.11 2.258 4.165.775 5.881 2.265 2.346 1.04 4.772.021 7.156-.129 2.558-.147 5.116.084 7.675.045 1.114-1.625 4.32-.162 4.398-2.279.983-2.137-.314-3.897-2.46-4.408-2.712-1.476-5.28-3.21-8.154-4.377-2.71-1.21-5.338-2.756-7.246-5.073-2.388-1.688-5.563-1.207-8.17-2.4-2.145-1.079-4.492-1.247-6.839-1.008-2.888.118-5.938-.44-8.172-2.405-.472-.322-1.027-.56-1.607-.55z"
        filter="url(#filter6351)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="etiopia-troops-group"
        transform="matrix(.49 0 0 .49 2272.005 1287.417)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-84"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-72"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-40" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Etiopia.propTypes = {};

export default Etiopia;
