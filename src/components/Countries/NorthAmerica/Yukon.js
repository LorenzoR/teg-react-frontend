import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const Yukon = (props) => {
  const [borderFill, setBorderFill] = useState("#d89a61");
  const [fill, setFill] = useState("#e0b881");

  return (
    <g
      id="YUKON"
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
        id="yukon-border"
        fill={props.isSelected ? shadeColor("#d89a61", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M988.397 644.86c-7.33-.615-11.854 7.282-19.44 5.072-4.014-.97-12.398.408-8.308 6.044 3.825-.18 12.071 1.203 7.099 6.259-5.59 3.778-8.559 12.997-17.35 10.262-6.541.244-8.766 11.466-5.468 14.745 4.028 1.498 12.384-3.673 9.17 3.935-3.76 2.08-6.229 5.787-1.238 8.389 1.954 6.921-.085 15.754-7.919 17.656-3.701.972-11.859-7.2-11.295.887 1.883 5.976-1.9 10.587-2.728 15.834 6.16 1.947 10.862 9.781 9.356 16.405-1.824 5.784-5.503 13.885 1.345 18.102 5.961 4.826 14.147 6.059 19.141 12.14 2.726 3.561 1.693-4.791 6.247-5.046 6.153-3.512 12.659-7.169 19.85-7.621 10.636.192 21.423.908 31.894-1.273 7.463-1.148 13.102-7.908 20.894-7.739 4.501-1.064 13.769.748 15.282-3.662-2.519-5.3-8.174-8.41-13.08-10.541-.019-7.883-6.295-13.838-3.591-22.292.835-8.424-9.184-9.51-13.625-14.566-4.57-4.393-7.263-10.45-12.097-14.727-.729-3.329 4.677-6.98.924-11.043.855-7.445 7.157-13.803 6.102-22.01-2.2-5.456-2.268-13.635-9.776-14.621-7.018-1.185-14.286-.344-21.389-.588z"
      ></path>
      <path
        id="yukon-filling"
        fill={props.isSelected ? shadeColor("#e0b881", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="1"
        d="M-212.527-17.819c-2.127.282-4.775-.69-6.385 1.189-.797 1.836-1.767 3.631-3.213 5.055-.962 1.562-3.347 2.138-3.522 4.058.668 2.253-.027 4.477-.408 6.707.273 2.602.38 5.35-.988 7.735-1.238 2.492-3.394 4.56-6.029 5.507-.465 2.184 2.17 3.716 1.702 6.046.757 2.14-1.403 4.489-.005 6.322 1.428 1.484 4.002 1.084 5.336-.325 4.044-2.302 8.834-2.492 13.362-2.18 2.63.038 5.305.025 7.858-.69 1.732-.95 5.389-1.717 3.829-4.442-.671-2.13-1.438-4.3-1.375-6.565-1.522-2.184-4.271-3.157-5.61-5.512-1.535-2.06-3.267-4.004-4.602-6.196-1.154-2.7-.07-5.626.101-8.404.337-2.216 1.233-4.296 2.307-6.243.556-1.422-1.09-2.532-2.358-2.062z"
        filter="url(#filter5355)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g
        id="yukon-troops-group"
        transform="matrix(.49 0 0 .49 1424.786 933.714)"
      >
        <circle
          id="canada-troops-5"
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
          id="canada-troops-number-6"
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
          <tspan id="tspan3745-2" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

Yukon.propTypes = {};

export default Yukon;
