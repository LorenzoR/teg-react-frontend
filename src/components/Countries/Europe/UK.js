import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from "../../../helpers/shadeColor";

const UK = (props) => {
  const [borderFill, setBorderFill] = useState("#eeca93");
  const [fill, setFill] = useState("#f3d9b0");

  return (
    <g
      id="UK"
      onClick={(e) => props.countryClicked(e.currentTarget.id)}
      onMouseOver={() => {
        setBorderFill(shadeColor("#eeca93", -50));
        setFill(shadeColor("#f3d9b0", -50));
      }}
      onMouseOut={() => {
        setBorderFill("#eeca93");
        setFill("#f3d9b0");
      }}
    >
      <path
        id="uk-border"
        fill={props.isSelected ? shadeColor("#eeca93", -50) : borderFill}
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="2.352"
        d="M1575.074 830.397c2.573 3.17 7.263 4.594 11.13 6.51 3.977 2.574 8.594 1.58 7.208-3.895 4.261 2.119 8.364 4.228 11.272 8.305 5.223 2.86 5.672-4.41 6.826-7.724 1.398-2.795 3.395-9.7 7.025-4.782 3.058 4.438 10.5 3.535 11.74-1.793 1.147-2.659 3.1-4.16 5.195-4.783.199-3.92.366-7.862.649-11.768 1.872-4.22 7.058-2.824 9.786-4.52 2.74-4.983-.03-10.309-1.427-15.2-1.894-5.407-7.37-7.802-11.613-10.93-2.7-.972-9.147-.39-5.547-5.444 3.381-4.055 9.404-4.097 13.025-7.755-1.925-3.776-8.401-1.635-12.104-2.547-.237-5.868 9.067-3.383 8.863-8.923.785-6.265-6.84-4.722-9.773-7.685.057-3.563 4.88-10.692-2.201-9.892-6.024 1.215-7.542 8.429-12.629 11.176-5.434 1.444-3.066 6.042-1.085 9.384 1.384 4.878-3.205 9.605-7.99 6.956-5.705-3.162-7.268 3.538-6.776 7.813-.498 2.89 7.128 6.211 1.253 7.136-3.894-.732-10.804-4.535-12.802.817-2.905 4.316 7.536 9.531-.111 10.036-3.98 1.486-2.204 7.417-6.527 9.246-3.915 3.775-7.063 8.452-11.577 11.572-1.949 2.264-9.379-2.525-6.963 2.904 3.236 3.49-.832 6.783-3.647 8.038-1.411 5.291 4.402 8.688 9.029 7.521 3.148-.25 4.619-6.399 7.52-1.574.609.743 1.266 1.567 2.251 1.8z"
      ></path>
      <path
        id="uk-filling"
        fill={props.isSelected ? shadeColor("#f3d9b0", -50) : fill}
        fillRule="evenodd"
        stroke="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeOpacity="1"
        strokeWidth="1"
        d="M50.817 28.994c-.722 1.656-3.007 1.67-3.782 3.281.008 1.422.271 3.204-1.228 4.02-1.51 1.105-3.795 1.406-4.53 3.36-1.13 2.082-3.288 3.365-4.393 5.468-1.227 1.662-3.536 2.546-4.002 4.726 1.443.89 2.408 2.743 4.276 2.795 1.423-.595 3.008-1.52 4.484-.475 1.251.726 3.173 1.2 3.709-.574 1.139-1.511 3.015-2.658 4.962-2.363 1.173 1.184 3.547.616 3.723-1.154.038-1.369-.3-2.87.669-4.027.748-1.125 1.882-1.929 3.068-2.54.771-1.504-.63-2.983-1.922-3.586-1.587-.82-3.603-.922-4.785-2.419-1.595-1.742-1.805-4.676-.249-6.512zM38.004 42.119c.154.096-.047-.233 0 0z"
        filter="url(#filter17107)"
        transform="translate(1499.1 701.199) scale(2.352)"
      ></path>
      <g id="uk-troops-group" transform="matrix(.49 0 0 .49 2049.854 1020.192)">
        <circle
          id="canada-troops-5-1-9-6-6-3-7-7-5"
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
          id="canada-troops-number-6-2-3-2-1-1-8-4-4"
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
          <tspan id="tspan3745-2-7-6-6-2-9-4-5-7" x="-898.215" y="-432.383">
            {props.countryState
              ? props.countryState.troops + props.countryState.newTroops
              : "0"}
          </tspan>
        </text>
      </g>
    </g>
  );
};

UK.propTypes = {
  countryState: PropTypes.object,
  isSelected: PropTypes.bool,
  countryClicked: PropTypes.func,
};

export default UK;
