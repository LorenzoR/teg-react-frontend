import React, { useState } from "react";

import shadeColor from 'src/helpers/shadeColor';
import Country from "src/models/Country";

interface Props {
    countryState: Country["state"];
    isSelected: boolean;
    countryClicked: (id: string) => void;
}

const Egipt = (props: Props) => {
    const [borderFill, setBorderFill] = useState("#fdb456");
    const [fill, setFill] = useState("#fec883");

    return (
        <g
            id="EGYPT"
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
                id="egipto-border"
                fill={props.isSelected ? shadeColor("#fdb456", -50) : borderFill}
                fillRule="evenodd"
                stroke="#000"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                strokeWidth="2.352"
                d="M1873.484 983.181c-1.2.016-2.537.914-4.042 3.087-6.06 1.06-13.043-1.332-18.816.809.841 11.233-11.158 14.063-19.992 12.2-7.5-3.301-4.775 2.866-11.393 3.823-7.483.158-13.882-2.468-21.462-.515-5.33 6.285-11.056-.723-17.346 1.103-3.737 6.683-11.035 8.739-17.86 5.659-.813.489-1.736.92-2.72 1.323.022.03.054.044.074.073 2.592 4.635 1.021 12.362 7.423 14.847 6.017.425 12.579.923 17.787 4.263.01.026-.007.049 0 .074 6.098-1.015 12.957-.55 17.2 4.263 7.051 4.385 16.035 1.226 23.887 2.278 6.41 3.904 13.755 4.212 20.874 6.174 7.14 1.043 11.373 7.033 16.464 11.32 6.392 3.354 13.505 5.577 19.257 10.142 7.996 2.353 13.147 10.006 22.197 8.38 9.256-2.15 9.537-13.102 18.154-15.877 6.667-2.391 5.363-10.239 9.188-15.508 5.551-3.558 11.078-17.593 2.205-15.803-2.002 9.182-5.674-2.345-10.584-.735-4.915 6.817-12.108 5.252-16.685-1.91-5.847-3.354 1.423-10.22-3.675-11.1-5.028-5.982-3.027-10.387-8.452-12.2-5.506-1.848-16.397 4.696-16.758-4.19.74-4.225-1.322-12.027-4.925-11.98z"
            ></path>
            <path
                id="egipto-filling"
                fill={props.isSelected ? shadeColor("#fec883", -50) : fill}
                fillRule="evenodd"
                stroke="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                strokeWidth="1"
                d="M153.504 126.619c-1.099 2.01-2.697 3.683-4.437 4.5-2.933 1.378-5.818 1.413-8.531.937-.989.713-2.225 1.423-3.625 1.625a5.386 5.386 0 01-.657.063c-3.946.084-5.843-.426-7.218-.344-.829.52-1.73.874-2.625 1.063 1.856.326 3.683 1.189 5.343 2.593l.032-.03c.138.085.582.255 1.968.218 1.387-.037 3.424-.385 6.063-.031.732.105 1.434.36 2.062.75 1.275.776 3.73.983 7.532 2.031l-.032.062c4.864.977 7.295 4.135 8.688 5.47 1.942.929 4.668 1.968 7.562 4.03 2.278.86 3.886 1.988 4.813 2.532.897.526.862.443 1.031.406-.011.03-.157.247.656-.938.831-1.208 2.484-3.677 5.532-5.062.121-.38.228-1.029.531-1.906-.635.067-1.275.154-1.906.062-3.201-.466-5.497-2.496-7.063-4.844-.935-1.042-1.682-2.225-1.906-3.375-.167-.856-.201-1.547-.156-2.125-.477-.717-.947-1.409-1.219-2-.478.012-.813.007-1.469.063-1.158.098-2.869.304-5.031-.938-1.707-.98-2.668-2.96-3.125-4.78-1.1.027-2.062.026-2.813-.032z"
                filter="url(#filter5374)"
                transform="translate(1499.1 701.199) scale(2.352)"
            ></path>
            <g
                id="egipto-troops-group"
                transform="matrix(.49 0 0 .49 2305.81 1243.148)"
            >
                <circle
                    id="canada-troops-5-1-9-6-6-3-7-7-05"
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
                    id="canada-troops-number-6-2-3-2-1-1-8-4-11"
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
                    <tspan id="tspan3745-2-7-6-6-2-9-4-5-08" x="-898.215" y="-432.383">
                        {props.countryState
                            ? props.countryState.troops + props.countryState.newTroops
                            : "0"}
                    </tspan>
                </text>
            </g>
        </g>
    );
};

export default Egipt;
