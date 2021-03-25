import React, { useState } from "react";
import PropTypes from "prop-types";

import shadeColor from 'src/helpers/shadeColor';
import Country from "src/models/Country";

interface Props {
    countryState: Country["state"];
    isSelected: boolean;
    countryClicked: (id: string) => void;
}

const Mexico = (props: Props) => {
    const [borderFill, setBorderFill] = useState("#d89a61");
    const [fill, setFill] = useState("#e0b881");

    return (
        <g
            id="MEXICO"
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
                id="mexico-border"
                fill={props.isSelected ? shadeColor("#d89a61", -50) : borderFill}
                fillRule="evenodd"
                stroke="#000"
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="4"
                strokeOpacity="1"
                strokeWidth="2.352"
                d="M1089.624 865.368c-4.688-3.576-.382-12.6 2.343-16.735 6.781-6.918 11.51 12.734 16.647 1.548 3.238-5.558 7.956-10.583 13.298-14.103 5.683-1.752 11.807-1.574 17.717-1.745 6.808-.334 13.426-1.78 20.266-1.011 6.816-1.88 11.455 1.705 12.875 8.22 1.448 7.995 7.669 13.203 15.95 11.597 6.376 1.98 5.013 15.802 13.668 13.24 3.819-1.337 7.339.25 6.104 4.78 4.003 4.147 1.933 12.335 9.664 12.86 2.728 5.502 8.683 1.147 12.016 6.444 3.25 3.687-2.209 9.13 2.766 11.861-4.16 4.253 7.962 5.223 3.007 11.2-5.599 4.57 7.789 1.488 7.792 6.921 3.748 5.88-.021 15.101-6.828 16.43-6.257-.876-7.875-10.408-14.615-12.078-6.166-1.253-13.55.975-17.28-5.82-6.452-5.324-15.177-3.994-21.765-7.725-3.829-9.12-14.889-.358-19.25-8.089-6.531-.486-10.154-5.467-8.667-11.81-2.058-6.746-10.19-7.767-16.199-6.956-7.961-.718-15.384-9.758-23.217-5.872-6.692 7.25-12.25-3.174-17.212-6.82-2.985-2.17-5.992-4.316-9.08-6.337z"
            ></path>
            <path
                id="mexico-filling"
                fill={props.isSelected ? shadeColor("#e0b881", -50) : fill}
                fillRule="evenodd"
                stroke="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="4"
                strokeOpacity="1"
                strokeWidth="1"
                d="M-143.62 61.338c-3.837-.133-7.627.59-11.461.577-2.035-.087-4.035.423-5.164 2.282-1.524 1.59-1.997 4.103-4.241 4.941-2.263 1.408 1.606 1.391 2.574.806 1.769-.367 3.557.287 5.22.86 1.38.552 2.687 1.266 4.04 1.877 4.77-.662 10.386 2.01 11.534 6.97.356 2.324 3.113 2.573 5.001 2.6 2.3-.1 3.772 1.825 5.56 2.894 2.265.543 4.657.872 6.747 2.011.735 1.202 7.103 4.485 5.595 1.36-.807-1.806-.417-4.778-2.781-5.23-1.979-1.272-4.369-2.323-5.42-4.57-1.157-1.901-.522-3.84-3.16-3.747-2.461-.72-4.026-3.032-4.888-5.319-3.833-.192-7.31-2.851-8.57-6.464a13.91 13.91 0 01-.587-1.848z"
                filter="url(#filter11213)"
                transform="translate(1499.1 701.199) scale(2.352)"
            ></path>
            <g
                id="mexico-troops-group"
                transform="matrix(.49 0 0 .49 1619.027 1099.15)"
            >
                <circle
                    id="canada-troops-5-1-9-6-6"
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
                    id="canada-troops-number-6-2-3-2-1"
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
                    <tspan id="tspan3745-2-7-6-6-2" x="-898.215" y="-432.383">
                        {props.countryState
                            ? props.countryState.troops + props.countryState.newTroops
                            : "0"}
                    </tspan>
                </text>
            </g>
        </g>
    );
};

Mexico.propTypes = {
    countryState: PropTypes.object,
    isSelected: PropTypes.bool,
    countryClicked: PropTypes.func,
};

export default Mexico;
