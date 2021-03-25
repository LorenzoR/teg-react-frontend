import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from 'src/helpers/shadeColor';
import Country from "src/models/Country";

interface Props {
    countryState: Country["state"];
    isSelected: boolean;
    countryClicked: (id: string) => void;
}

const Mongolia = (props: Props) => {
    const [borderFill, setBorderFill] = useState("#caa265");
    const [fill, setFill] = useState("#d7b989");

    return (
        <g
            id="MONGOLIA"
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
                id="mongolia-border"
                fill={props.isSelected ? shadeColor("#caa265", -50) : borderFill}
                fillRule="evenodd"
                stroke="#000"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                strokeWidth="2.352"
                d="M1995.494 690.504c-3.747 1.138-7.585 2.622-12.568 5.292-4.594 2.841-7.673 6.296-13.671 8.6-5.998 2.304-14.254 2.388-21.903 3.013-14.044-1.459-23.832-2.687-36.236-3.454-8.021-.16-16.082.097-24.108 0-.08.597-.108 2.378-.073 4.41 7.22 2.483 8.777 8.851 11.466 14.847 9.901 2.214 20.228 6.681 21.315 18.448 1.784 7.295-3.6 22.242 9.335 19.33 10.922-3.174 5.676 13.354 16.023 12.863 2.072 2.037 2.967 4.858 3.528 7.865 5.087-4.939 10.618-7.918 15.361-9.776 8.994-.989-2.372-9.236 5.586-10.878 5.875-1.986 11.603-5.07 18.008-4.704 3.001-1.377 8.889.301 10.51-6.1.64-2.525 5.395-.4 4.557-2.132-.634-8.689 6.798-7.662 5.219-14.259-.826-5.29.654-11.137-2.352-15.582-4.957-5.097-2.282-14.565-3.234-20.727-1.824-3.631-4.335-5.488-6.762-7.056z"
            ></path>
            <path
                id="mongolia-filling"
                fill={props.isSelected ? shadeColor("#d7b989", -50) : fill}
                fillRule="evenodd"
                stroke="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                strokeWidth="1"
                d="M207.942 1.713c-1.478.704-2.587 1.99-4.096 2.656-3.282 1.814-7.058 2.46-10.768 2.553-4.063.219-8.086-.567-12.127-.823-1.585-.786-3.864.974-2.283 2.459 3.174 2.51 4.707 6.644 4.765 10.61.24 1.822 2.137 2.276 3.614 2.642 1.662.75 2.725 2.393 3.233 4.09.846 1.932 4.175 1.629 4.257-.63a5.712 5.712 0 013.648-3.817c2.716-1.041 5.464-2.17 8.405-2.336 2.372-.14 3.825-2.373 4.835-4.274.737-1.464.518-3.325.388-4.835-1.21-1.82-2.182-3.884-2.154-6.117.018-1.051-.377-2.405-1.717-2.178z"
                filter="url(#filter24009)"
                transform="translate(1499.1 701.199) scale(2.352)"
            ></path>
            <g
                id="mongolia-troops-group"
                transform="matrix(.49 0 0 .49 2403.203 952.58)"
            >
                <circle
                    id="canada-troops-5-1-9-6-6-3-7-7-48"
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
                    id="canada-troops-number-6-2-3-2-1-1-8-4-10"
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
                    <tspan id="tspan3745-2-7-6-6-2-9-4-5-30" x="-898.215" y="-432.383">
                        {props.countryState
                            ? props.countryState.troops + props.countryState.newTroops
                            : "0"}
                    </tspan>
                </text>
            </g>
        </g>
    );
};

Mongolia.propTypes = {
    countryState: PropTypes.object,
    isSelected: PropTypes.bool,
    countryClicked: PropTypes.func,
};

export default Mongolia;
