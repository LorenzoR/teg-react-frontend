import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Taimir = (props) => {
  const [borderFill, setBorderFill] = useState("#caa265");
  const [fill, setFill] = useState("#d7b989");

  return (
    <g
      id="TAIMIR"
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
        id="tamir-border"
        fill={props.isSelected ? shadeColor("#caa265", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1933.387 600.834c-3.135-.037-6.728.836-8.526 3.528-1.013 1.72-2.565 2.499-4.263 2.793.023.608-.116 1.277-.441 2.132-.724 4.88-6.039 7.633-7.497 12.274-1.155 4.332 7.164 6.45 2.205 10.51-3.028 1.913-5.19 4.798-2.573 8.159.378 3.362 7.257 4.996 2.426 8.159-2.612 2.154-6.649 2.285-5.44 6.982.103 3.446.257 6.91.221 10.364 5.212.386 10.344 1.414 15.582 1.543 3.986-.271 8.409 1.63 12.054-.661 3.872-1.6 6.292-5.21 10.143-6.836 3.292-2.587 7.55-1.51 11.246-2.572 3.567-2.018 6.37-5.265 8.232-8.894 1.237-3.7 5.294-4.676 7.57-7.35.869-2.86.445-6.017.147-8.967.382-3.813-2.43-5.392-5.66-6.1-2.41-2.356-3.329-5.795-4.189-8.967-.87-2.57-.903-7.941-4.85-6.836-3.636.477-6.358 3.177-9.482 4.704-4.157.37-8.982-1.786-10.29-6.027-.88-3.134-2.814-5.878-5.366-7.864a13.975 13.975 0 00-1.25-.074z"
      ></path>
      <path
        id="tamir-filling"
        fill={props.isSelected ? shadeColor("#d7b989", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M183.442-37.35c-.79 1.532-2.649 3.118-1.68 4.99.634 1.45.18 2.982-.587 4.263-.633 1.57.855 2.903.842 4.457.035 1.295-.33 2.72-1.398 3.547-.591 1.517 1.76 1.599 2.706 1.284 2.714-.586 4.521-3.117 7.28-3.617 1.748-.461 3.893-.9 4.704-2.739.696-1.065 2.311-2.299 1.314-3.678-1.218-.904-1.668-2.291-2.54-3.418-1.106-.84-2.349.392-3.574.087-3.03-.308-6.003-2.247-7.067-5.176z"
        filter="url(#filter26979)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="tamir-troops-group"
        transform="matrix(.49 0 0 .49 2382.276 856.798)"
      >
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-15"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-9"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-77" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Taimir.propTypes = {
  countryState: PropTypes.object,
  isSelected: PropTypes.bool,
  countryClicked: PropTypes.func,
};

export default Taimir;
