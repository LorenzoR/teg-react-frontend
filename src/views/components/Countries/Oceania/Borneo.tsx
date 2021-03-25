import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from 'src/helpers/shadeColor';
import Country from "src/models/Country";

interface Props {
    countryState: Country["state"];
    isSelected: boolean;
    countryClicked: (id: string) => void;
}

const Borneo = (props: Props) => {
    const [borderFill, setBorderFill] = useState("#90a8a0");
    const [fill, setFill] = useState("#afc1bb");

    return (
        <g
            id="BORNEO"
            onClick={(e) => props.countryClicked(e.currentTarget.id)}
            onMouseOver={() => {
                setBorderFill(shadeColor("#90a8a0", -50));
                setFill(shadeColor("#afc1bb", -50));
            }}
            onMouseOut={() => {
                setBorderFill("#90a8a0");
                setFill("#afc1bb");
            }}
        >
            <path
                id="borneo-border"
                fill={props.isSelected ? shadeColor("#90a8a0", -50) : borderFill}
                fillRule="evenodd"
                stroke="#000"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                strokeWidth="2.352"
                d="M2100.586 911.389c.797 1.153 2.427 6.498 5.196 8.124a36.257 36.257 0 0110.094 4.274c.647 4.372-4.346 5.105-7.361 6.253-2.66 1.599-7.387 1.981-5.686 6.34 1.384 3.367 4.197 6.1 7.16 8.144 3.687.774 5.582 3.578 4.731 7.327.288 4.43-.436 8.81-1.79 13.021-.895 3.546 1.008 8.283 4.943 8.83 3.112 1.25 5.72 5.074 5.102 8.577.071 4.835-1.387 9.463-3.079 13.917-1.03 4.738-6.108 2.606-7.19-.904-2.1-2.925-4.85-5.626-8.736-5.467-4.482-.831-8.625-2.904-13.177-3.475-5.182.293-5.32-4.657-7.31-7.992-2.432-3.565-3.557-7.735-4.201-11.95-.8-3.56-2.62-6.877-5.368-9.296-1.691-3.14-1.034-7.048-.161-10.358 1.534-4.442 4.98-7.969 9.132-10.054 2.787-2.29 4.516-5.547 6.998-8.144 2.356-3.601 3.45-7.797 4.48-11.91.561-2.657 5.426-6.41 6.223-5.257z"
            ></path>
            <path
                id="borneo-filling"
                fill={props.isSelected ? shadeColor("#afc1bb", -50) : fill}
                fillRule="evenodd"
                stroke="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                strokeWidth="1"
                d="M249.041 104.02c-.888.699-1.52 1.92-1.24 3.049 3.134 2.435 1.886 9.424 5.678 10.76 2.63.679 5.28 1.51 7.883 2.127-.357-1.665-2.04-2.46-3.026-3.707-2.374-2.924-.229-6.037-.32-9.292-2.335-1.926-3.969-4.34-4.955-7.236-1.395 1.381-2.419 3.127-4.02 4.299z"
                filter="url(#filter12237)"
                transform="translate(1499.1 701.199) scale(2.352)"
            ></path>
            <g
                id="borneo-troops-group"
                transform="matrix(.49 0 0 .49 2535.206 1178.756)"
            >
                <circle
                    id="canada-troops-5-1-9-6-6-3-7-7-77"
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
                    id="canada-troops-number-6-2-3-2-1-1-8-4-54"
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
                    <tspan id="tspan3745-2-7-6-6-2-9-4-5-81" x="-898.215" y="-432.383">
                        {props.countryState
                            ? props.countryState.troops + props.countryState.newTroops
                            : "0"}
                    </tspan>
                </text>
            </g>
        </g>
    );
};

Borneo.propTypes = {
    countryState: PropTypes.object,
    isSelected: PropTypes.bool,
    countryClicked: PropTypes.func,
};

export default Borneo;
