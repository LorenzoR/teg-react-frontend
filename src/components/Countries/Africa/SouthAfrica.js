import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const SouthAfrica = (props) => {
  const [borderFill, setBorderFill] = useState("#fdb456");
  const [fill, setFill] = useState("#fec883");

  return (
    <g
      id="SOUTH_AFRICA"
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
        id="sudafrica-border"
        fill={props.isSelected ? shadeColor("#fdb456", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1826.297 1099.679c.5 3.206.097 6.635-.147 9.775-3.302 5.59-8.181 10.083-11.76 15.509-3.3 3.608-6.711 6.75-11.833 4.63-3.486 1.816-6.916 5.688-7.424 9.849.164 3.587-.298 7.815-2.499 10.437a116.222 116.222 0 012.5 4.19c2.569 3.838 4.066 7.537 4.042 12.274 2.17 5.121 7.134 8.222 11.172 11.76 4.696 4.586 10.636 4.822 16.684 3.675 4.819 1.674 8.913 5.148 11.246 9.702 4.885 2.29 10.386 4.192 13.597 8.967 5.566 5.524 9.331-1.714 11.246-6.394-.684-6.655 6.991-5.412 10.657-8.747 2.219-4.27-1.852-10.94 2.573-14.185 6.204-2.8 2.46-12.082-1.704-14.21-4.022-4.218-2.95-9.273-2.562-14.737.388-5.64-1.962-12.264 1.655-17.113 2.431-5.185 5.25-7.49 7.976-12.52 1.666-2.772 3.518-5.629 4.043-8.82-8.1.8-16.22-.51-24.329 0-6.54 1.674-13.936 2.493-20.065-1.102-4.691-1.769-12.473 1.412-15.068-2.94z"
      ></path>
      <path
        id="sudafrica-filling"
        fill={props.isSelected ? shadeColor("#fec883", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M143.942 174.931c-1.608.994-1.868 3.13-3.328 4.297-1.524 1.75-2.825 3.698-4.461 5.344-1.48 1.343-3.407 2.271-5.428 2.305-.648 1.42-.77 3.31-.234 4.738 1.069 1.498.845 3.472 1.822 4.962 1.186 1.076 2.23 2.395 3.601 3.215 1.419.564 2.94-.084 4.382.076 2.729.708 4.988 2.622 6.646 4.845 1.388.037 3.201 2.7 4.2 1.207.734-1.55 2.28-2.517 3.831-3.114-.258-1.988.375-4.092 1.75-5.562-2.627-2.471-3.293-6.367-2.724-9.801.026-2.705-.512-5.562.743-8.094.24-1.242 1.811-2.641 1.516-3.615-1.42-.325-2.872.253-4.288.39-2.713.37-5.569.06-8.028-1.193z"
        filter="url(#filter8312)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="sudafrica-troops-group"
        transform="matrix(.49 0 0 .49 2280.859 1368.711)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-40"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-39"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-19" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

SouthAfrica.propTypes = {
  countryState: PropTypes.object,
  isSelected: PropTypes.bool,
  countryClicked: PropTypes.func,
};

export default SouthAfrica;
