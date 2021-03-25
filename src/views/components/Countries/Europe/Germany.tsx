import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from 'src/helpers/shadeColor';
import Country from "src/models/Country";

interface Props {
    countryState: Country["state"];
    isSelected: boolean;
    countryClicked: (id: string) => void;
}

const Germany = (props: Props) => {
    const [borderFill, setBorderFill] = useState("#eeca93");
    const [fill, setFill] = useState("#f3d9b0");

    return (
        <g
            id="GERMANY"
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
                id="alemania-border"
                fill={props.isSelected ? shadeColor("#eeca93", -50) : borderFill}
                fillRule="evenodd"
                stroke="#000"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                strokeWidth="2.352"
                d="M1728.322 780.1c-.721-.058-8.33-2.641-6.04 2.207.204 1.303-.284 3.763-2.12 4.802-3.226 1.824-5.683 2.343-6.614 7.25-.82 4.9 1.273 13.804-6.468 13.157-4.737-.959-8.873.461-12.642 2.793 2.228 2.644 3.097 7.717 2.793 10.805-.535 6.356 4.932 11.715 11.025 11.98 6.437 2.47 4.027 10.484 9.555 13.671 3.668 3.888 3.086 12.13.294 16.685-5.525 3.699-1.161 9.505-.882 14.847 4.195.943 8.057 3.127 11.32 6.027 4.215 4.088 9.279 7.455 15.434 6.247 4.956-.5 10.176 1.327 14.847-.955 4.799.155 13.387-6.046 13.598 2.572 2.382 5.14 9.567 3.684 11.613 9.776 2.33 1.645 3.652 5.07 3.528 8.011 3.626-.673 7.006-2.36 9.555-5.218 3.474-6.82 8.224-14 8.82-21.903 1.99-6.792-3.933-11.354-6.174-17.052-5.725-3.827-14.06-5.56-15.582-13.45-1.11-5.864-9.082-8.866-7.865-15.583.64-5.411.522-10.938 1.838-16.243.816-5.713 1.41-11.888-.735-17.346-5.866-1.431-11.973-3.613-16.317-8.453-4.33-6.256-11.668-5.386-17.934-8.085-5.465.269-10.111-6.547-14.847-6.541z"
            ></path>
            <path
                id="alemania-filling"
                fill={props.isSelected ? shadeColor("#f3d9b0", -50) : fill}
                fillRule="evenodd"
                stroke="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                strokeWidth="1"
                d="M98.223 40.338c-1.99.968-1.253 3.475-1.907 5.188-.756 2.49-2.851 4.604-5.437 5.124 2.925 1.133 4.984 3.883 5.813 6.844 3.589 3.108 3.943 8.629 2.153 12.786-1.145 2.103 2.663 2.291 3.23 4.035 1.765 1.095 3.878-.165 5.78.406.805.024 2.8-.355 2.481-.584 2.833-.692 6.14-1.22 8.648.674 1.599 1.02 1.906 3.23 3.686 3.98 1.932 1.766 2.555-2.429 1.593-3.555-1.239-1.918-3.8-2.262-5.274-3.989-1.682-1.551-2.98-3.582-3.422-5.847-.177.837-1.352-1.584-1.845-2.028-1.527-2.331-1.838-5.214-1.457-7.92.145-2.253.473-4.495.873-6.71-.357-2.151-3.218-2.135-4.469-3.644-1.358-1.662-3.067-2.545-5.195-2.865-1.819-.465-3.73-.676-5.25-1.895z"
                filter="url(#filter20059)"
                transform="translate(1499.1 701.199) scale(2.352)"
            ></path>
            <g
                id="alemania-troops-group"
                transform="matrix(.49 0 0 .49 2180.247 1042.729)"
            >
                <circle
                    id="canada-troops-5-1-9-6-6-3-7-7-43"
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
                    id="canada-troops-number-6-2-3-2-1-1-8-4-1"
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
                    <tspan id="tspan3745-2-7-6-6-2-9-4-5-4" x="-898.215" y="-432.383">
                        {props.countryState
                            ? props.countryState.troops + props.countryState.newTroops
                            : "0"}
                    </tspan>
                </text>
            </g>
        </g>
    );
};

Germany.propTypes = {
    countryState: PropTypes.object,
    isSelected: PropTypes.bool,
    countryClicked: PropTypes.func,
};

export default Germany;
