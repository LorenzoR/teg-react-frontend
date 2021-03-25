import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from 'src/helpers/shadeColor';
import Country from "src/models/Country";

interface Props {
    countryState: Country["state"];
    isSelected: boolean;
    countryClicked: (id: string) => void;
}

const Aral = (props: Props) => {
    const [borderFill, setBorderFill] = useState("#caa265");
    const [fill, setFill] = useState("#d7b989");

    return (
        <g
            id="ARAL"
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
                id="aral-border"
                fill={props.isSelected ? shadeColor("#caa265", -50) : borderFill}
                fillRule="evenodd"
                stroke="#000"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                strokeWidth="2.352"
                d="M1844.265 614.355c-1.66-.07-5.75 1.595-8.532 2.959-5.138 2.517 2.437 7.474.487 8.584-3.16 1.798-6.09-2.496-6.321.882.487 6.979 3.08 9.58-1.617 15.508-3.943 5.308-10.588 7.989-14.48 13.598-1.165 1.332-1.81 2.807-2.205 4.336 3.876 1.092 7.138 4.254 9.555 5.733 5.492 3.359 14.412 6.737 12.569 17.052-6.765 11.61 5.506 16.028 14.259 18.228 6.148 6.046 19.959 3.284 18.448 14.039.786-.338 1.554-.685 2.352-1.03 3.538-.637 4.873.695 6.91.662 3.357-.054 5.263-2.046 7.496-4.042 1.626-1.453 3.447-2.93 3.896-7.497-1.138-8.633-6.688-10.102-6.468-17.861-.26-7.364 1.836-15.217.735-22.711-.93-4.013-4.366-4.84-5.292-6.321-2.833-4.535-1.606-7.962-1.323-13.451-1.509-8.121-11.988-4.882-17.86-6.835-8.735-.638-11.13-8.769-10.144-16.17-.61-1.605 2.518-5.452-2.465-5.663z"
            ></path>
            <path
                id="aral-filling"
                fill={props.isSelected ? shadeColor("#d7b989", -50) : fill}
                fillRule="evenodd"
                stroke="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                strokeWidth="1"
                d="M145.442-26.225c-.595 3.186-2.868 5.75-5.375 7.656 2.983 1.474 5.737 3.923 6.55 7.265.523 1.83.641 3.877-.175 5.642 1.516.963 3.447 1.006 4.871 2.126 2.415 1.182 5.327 1.49 7.315 3.457.4.387 1.147 1.862 1.34.546-.574-1.183-1.366-2.317-1.746-3.613-1.14-3.437-.511-7.091-.33-10.624.31-1.394-1.455-1.951-1.815-3.216-.881-1.62-1.257-3.48-1.224-5.309-.826-.66-2.28-.352-3.359-.74-2.288-.402-4.505-1.415-6.052-3.19z"
                filter="url(#filter28939)"
                transform="translate(1499.1 701.199) scale(2.352)"
            ></path>
            <g
                id="aral-troops-group"
                transform="matrix(.49 0 0 .49 2292.932 886.579)"
            >
                <circle
                    id="canada-troops-5-1-9-6-6-3-7-7-7"
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
                    id="canada-troops-number-6-2-3-2-1-1-8-4-2"
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
                    <tspan id="tspan3745-2-7-6-6-2-9-4-5-2" x="-898.215" y="-432.383">
                        {props.countryState
                            ? props.countryState.troops + props.countryState.newTroops
                            : "0"}
                    </tspan>
                </text>
            </g>
        </g>
    );
};

Aral.propTypes = {
    countryState: PropTypes.object,
    isSelected: PropTypes.bool,
    countryClicked: PropTypes.func,
};

export default Aral;
