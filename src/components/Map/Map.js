import React from "react";
import PropTypes from "prop-types";

import NorthAmerica from "../Continents/NorthAmerica";
import SouthAmerica from "../Continents/SouthAmerica";
import Africa from "../Continents/Africa";
import Europe from "../Continents/Europe";
import Asia from "../Continents/Asia";
import Oceania from "../Continents/Oceania";

const map = (props) => {
  const mapWidth = "100%"; // 1602.183
  const mapHeight = "700"; // 938.997

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="svg4126"
        width={mapWidth}
        height={mapHeight}
        version="1.1"
        viewBox="0 0 1502.046 880.309"
      >
        <defs id="defs4128">
          <filter id="filter23025">
            <feGaussianBlur
              id="feGaussianBlur23027"
              stdDeviation="0.388"
            ></feGaussianBlur>
          </filter>
          <filter id="filter26979">
            <feGaussianBlur
              id="feGaussianBlur26981"
              stdDeviation="0.263"
            ></feGaussianBlur>
          </filter>
          <filter id="filter27960">
            <feGaussianBlur
              id="feGaussianBlur27962"
              stdDeviation="0.354"
            ></feGaussianBlur>
          </filter>
          <filter id="filter28939">
            <feGaussianBlur
              id="feGaussianBlur28941"
              stdDeviation="0.353"
            ></feGaussianBlur>
          </filter>
          <filter id="filter25001">
            <feGaussianBlur
              id="feGaussianBlur25003"
              stdDeviation="0.461"
            ></feGaussianBlur>
          </filter>
          <filter id="filter24009">
            <feGaussianBlur
              id="feGaussianBlur24011"
              stdDeviation="0.404"
            ></feGaussianBlur>
          </filter>
          <filter id="filter21065">
            <feGaussianBlur
              id="feGaussianBlur21067"
              stdDeviation="0.443"
            ></feGaussianBlur>
          </filter>
          <filter id="filter20088">
            <feGaussianBlur
              id="feGaussianBlur20090"
              stdDeviation="0.709"
            ></feGaussianBlur>
          </filter>
          <filter id="filter22047">
            <feGaussianBlur
              id="feGaussianBlur22049"
              stdDeviation="1.001"
            ></feGaussianBlur>
          </filter>
          <filter id="filter15192">
            <feGaussianBlur
              id="feGaussianBlur15194"
              stdDeviation="0.422"
            ></feGaussianBlur>
          </filter>
          <filter id="filter14212">
            <feGaussianBlur
              id="feGaussianBlur14214"
              stdDeviation="0.499"
            ></feGaussianBlur>
          </filter>
          <filter id="filter13218">
            <feGaussianBlur
              id="feGaussianBlur13220"
              stdDeviation="0.248"
            ></feGaussianBlur>
          </filter>
          <filter id="filter12237">
            <feGaussianBlur
              id="feGaussianBlur12239"
              stdDeviation="0.254"
            ></feGaussianBlur>
          </filter>
          <filter id="filter11249">
            <feGaussianBlur
              id="feGaussianBlur11251"
              stdDeviation="0.273"
            ></feGaussianBlur>
          </filter>
          <filter id="filter10272">
            <feGaussianBlur
              id="feGaussianBlur10274"
              stdDeviation="0.541"
            ></feGaussianBlur>
          </filter>
          <filter id="filter8312">
            <feGaussianBlur
              id="feGaussianBlur8314"
              stdDeviation="0.446"
            ></feGaussianBlur>
          </filter>
          <filter id="filter7335">
            <feGaussianBlur
              id="feGaussianBlur7337"
              stdDeviation="0.49"
            ></feGaussianBlur>
          </filter>
          <filter id="filter16169">
            <feGaussianBlur
              id="feGaussianBlur16171"
              stdDeviation="0.386"
            ></feGaussianBlur>
          </filter>
          <filter id="filter18124">
            <feGaussianBlur
              id="feGaussianBlur18126"
              stdDeviation="0.402"
            ></feGaussianBlur>
          </filter>
          <filter id="filter19101">
            <feGaussianBlur
              id="feGaussianBlur19103"
              stdDeviation="0.646"
            ></feGaussianBlur>
          </filter>
          <filter id="filter23975">
            <feGaussianBlur
              id="feGaussianBlur23977"
              stdDeviation="0.441"
            ></feGaussianBlur>
          </filter>
          <filter id="filter25975">
            <feGaussianBlur
              id="feGaussianBlur25977"
              stdDeviation="0.495"
            ></feGaussianBlur>
          </filter>
          <filter id="filter5355">
            <feGaussianBlur
              id="feGaussianBlur5357"
              stdDeviation="0.571"
            ></feGaussianBlur>
          </filter>
          <filter id="filter14154">
            <feGaussianBlur
              id="feGaussianBlur14156"
              stdDeviation="0.34"
            ></feGaussianBlur>
          </filter>
          <filter id="filter9264">
            <feGaussianBlur
              id="feGaussianBlur9266"
              stdDeviation="0.724"
            ></feGaussianBlur>
          </filter>
          <filter id="filter22016">
            <feGaussianBlur
              id="feGaussianBlur22018"
              stdDeviation="0.496"
            ></feGaussianBlur>
          </filter>
          <filter id="filter4368">
            <feGaussianBlur
              id="feGaussianBlur4370"
              stdDeviation="0.749"
            ></feGaussianBlur>
          </filter>
          <filter id="filter13177">
            <feGaussianBlur
              id="feGaussianBlur13179"
              stdDeviation="0.538"
            ></feGaussianBlur>
          </filter>
          <filter id="filter12196">
            <feGaussianBlur
              id="feGaussianBlur12198"
              stdDeviation="0.902"
            ></feGaussianBlur>
          </filter>
          <filter id="filter22998">
            <feGaussianBlur
              id="feGaussianBlur23000"
              stdDeviation="1.121"
            ></feGaussianBlur>
          </filter>
          <filter id="filter6351">
            <feGaussianBlur
              id="feGaussianBlur6353"
              stdDeviation="0.558"
            ></feGaussianBlur>
          </filter>
          <filter id="filter15135">
            <feGaussianBlur
              id="feGaussianBlur15137"
              stdDeviation="0.945"
            ></feGaussianBlur>
          </filter>
          <filter id="filter7318">
            <feGaussianBlur
              id="feGaussianBlur7320"
              stdDeviation="0.885"
            ></feGaussianBlur>
          </filter>
          <filter id="filter9294">
            <feGaussianBlur
              id="feGaussianBlur9296"
              stdDeviation="0.383"
            ></feGaussianBlur>
          </filter>
          <filter id="filter5374">
            <feGaussianBlur
              id="feGaussianBlur5376"
              stdDeviation="0.583"
            ></feGaussianBlur>
          </filter>
          <filter id="filter20059">
            <feGaussianBlur
              id="feGaussianBlur20061"
              stdDeviation="0.545"
            ></feGaussianBlur>
          </filter>
          <filter id="filter21036">
            <feGaussianBlur
              id="feGaussianBlur21038"
              stdDeviation="0.444"
            ></feGaussianBlur>
          </filter>
          <filter id="filter19075">
            <feGaussianBlur
              id="feGaussianBlur19077"
              stdDeviation="0.495"
            ></feGaussianBlur>
          </filter>
          <filter id="filter18093">
            <feGaussianBlur
              id="feGaussianBlur18095"
              stdDeviation="0.432"
            ></feGaussianBlur>
          </filter>
          <filter id="filter4397">
            <feGaussianBlur
              id="feGaussianBlur4399"
              stdDeviation="0.611"
            ></feGaussianBlur>
          </filter>
          <filter id="filter24994">
            <feGaussianBlur
              id="feGaussianBlur24996"
              stdDeviation="0.783"
            ></feGaussianBlur>
          </filter>
          <filter id="filter26952">
            <feGaussianBlur
              id="feGaussianBlur26954"
              stdDeviation="0.334"
            ></feGaussianBlur>
          </filter>
          <filter
            id="filter28915"
            width="1.231"
            height="1.043"
            x="-0.116"
            y="-0.021"
          >
            <feGaussianBlur
              id="feGaussianBlur28917"
              stdDeviation="0.432"
            ></feGaussianBlur>
          </filter>
          <filter id="filter27935">
            <feGaussianBlur
              id="feGaussianBlur27937"
              stdDeviation="0.56"
            ></feGaussianBlur>
          </filter>
          <filter id="filter11213">
            <feGaussianBlur
              id="feGaussianBlur11215"
              stdDeviation="0.575"
            ></feGaussianBlur>
          </filter>
          <filter id="filter6332">
            <feGaussianBlur
              id="feGaussianBlur6334"
              stdDeviation="0.595"
            ></feGaussianBlur>
          </filter>
          <filter id="filter25987">
            <feGaussianBlur
              id="feGaussianBlur25989"
              stdDeviation="0.318"
            ></feGaussianBlur>
          </filter>
          <filter id="filter16117">
            <feGaussianBlur
              id="feGaussianBlur16119"
              stdDeviation="0.44"
            ></feGaussianBlur>
          </filter>
          <filter id="filter17107">
            <feGaussianBlur
              id="feGaussianBlur17109"
              stdDeviation="0.367"
            ></feGaussianBlur>
          </filter>
          <filter id="filter23989">
            <feGaussianBlur
              id="feGaussianBlur23991"
              stdDeviation="0.427"
            ></feGaussianBlur>
          </filter>
          <radialGradient
            id="radialGradient5062"
            cx="365.604"
            cy="266.345"
            r="319.313"
            fx="365.604"
            fy="266.345"
            gradientTransform="matrix(2.352 0 0 1.37845 -845.615 -283.35)"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient4953"
          ></radialGradient>
          <linearGradient id="linearGradient4953">
            <stop
              id="stop4955"
              offset="0"
              stopColor="#bdd2ff"
              stopOpacity="1"
            ></stop>
            <stop
              id="stop4957"
              offset="0.812"
              stopColor="#006ba6"
              stopOpacity="1"
            ></stop>
            <stop
              id="stop4959"
              offset="1"
              stopColor="#003d66"
              stopOpacity="1"
            ></stop>
          </linearGradient>
        </defs>
        <g id="layer1" strokeOpacity="1" transform="translate(736.737 356.364)">
          <path
            id="path3277"
            fill="url(#radialGradient5062)"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeWidth="11.76"
            d="M-730.857-350.484v868.55H759.429v-868.55H-730.857z"
          ></path>
          <path
            id="path3300"
            fill="#c9ddd8"
            fillOpacity="1"
            stroke="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="0.5"
            d="M-326.807-291.39c-207.04 0-375.144 168.104-375.144 375.144s168.103 375.218 375.144 375.218c151.48 0 281.904-90.134 341.113-219.545C73.515 368.839 203.94 458.972 355.42 458.972c207.04 0 375.144-168.178 375.144-375.218 0-207.04-168.105-375.144-375.144-375.144-151.477 0-281.903 90.065-341.114 219.471-59.21-129.405-189.638-219.471-341.113-219.471z"
          ></path>
          <g
            id="g4873"
            fill="none"
            fillOpacity="1"
            stroke="#84e0fc"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            transform="translate(-1522.944 -426.63) scale(2.352)"
          >
            <circle
              id="path4875"
              cx="546.222"
              cy="220.147"
              r="37.694"
              strokeWidth="0.12"
              opacity="1"
              transform="translate(-1775.086 -703.526) scale(4.181)"
            ></circle>
            <g id="g4877" strokeWidth="0.502">
              <g id="g4879">
                <path
                  id="path4881"
                  d="M666.266 216.907a157.599 136.276 0 01-78.8 118.019 157.599 136.276 0 01-157.598 0 157.599 136.276 0 01-78.8-118.019h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4883"
                  d="M666.266 216.907a157.599 113.984 0 01-78.8 98.713 157.599 113.984 0 01-157.598 0 157.599 113.984 0 01-78.8-98.713h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4885"
                  d="M666.266 216.907a157.599 86.36 0 01-78.8 74.79 157.599 86.36 0 01-157.598 0 157.599 86.36 0 01-78.8-74.79h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4887"
                  d="M666.266 216.907a157.599 56.315 0 01-78.8 48.77 157.599 56.315 0 01-157.598 0 157.599 56.315 0 01-78.8-48.77h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4889"
                  d="M666.266 216.907a157.599 27.723 0 01-78.8 24.009 157.599 27.723 0 01-157.598 0 157.599 27.723 0 01-78.8-24.009h157.6z"
                  opacity="1"
                ></path>
              </g>
              <g id="g4891" opacity="1" transform="translate(0 2.791)">
                <path
                  id="path4893"
                  d="M666.266 214.099a157.599 136.276 0 00-78.8-118.018 157.599 136.276 0 00-157.598 0 157.599 136.276 0 00-78.8 118.018h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4895"
                  d="M666.266 214.099a157.599 113.984 0 00-78.8-98.713 157.599 113.984 0 00-157.598 0 157.599 113.984 0 00-78.8 98.713h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4897"
                  d="M666.266 214.099a157.599 86.36 0 00-78.8-74.79 157.599 86.36 0 00-157.598 0 157.599 86.36 0 00-78.8 74.79h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4899"
                  d="M666.266 214.099a157.599 56.315 0 00-78.8-48.77 157.599 56.315 0 00-157.598 0 157.599 56.315 0 00-78.8 48.77h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4901"
                  d="M666.266 214.099a157.599 27.723 0 00-78.8-24.008 157.599 27.723 0 00-157.598 0 157.599 27.723 0 00-78.8 24.008h157.6z"
                  opacity="1"
                ></path>
              </g>
            </g>
            <g
              id="g4903"
              strokeWidth="0.502"
              transform="rotate(90 508.667 216.899)"
            >
              <g id="g4905">
                <path
                  id="path4907"
                  d="M666.266 216.907a157.599 136.276 0 01-78.8 118.019 157.599 136.276 0 01-157.598 0 157.599 136.276 0 01-78.8-118.019h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4909"
                  d="M666.266 216.907a157.599 113.984 0 01-78.8 98.713 157.599 113.984 0 01-157.598 0 157.599 113.984 0 01-78.8-98.713h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4911"
                  d="M666.266 216.907a157.599 86.36 0 01-78.8 74.79 157.599 86.36 0 01-157.598 0 157.599 86.36 0 01-78.8-74.79h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4913"
                  d="M666.266 216.907a157.599 56.315 0 01-78.8 48.77 157.599 56.315 0 01-157.598 0 157.599 56.315 0 01-78.8-48.77h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4915"
                  d="M666.266 216.907a157.599 27.723 0 01-78.8 24.009 157.599 27.723 0 01-157.598 0 157.599 27.723 0 01-78.8-24.009h157.6z"
                  opacity="1"
                ></path>
              </g>
              <g id="g4917" opacity="1" transform="translate(0 2.791)">
                <path
                  id="path4919"
                  d="M666.266 214.099a157.599 136.276 0 00-78.8-118.018 157.599 136.276 0 00-157.598 0 157.599 136.276 0 00-78.8 118.018h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4921"
                  d="M666.266 214.099a157.599 113.984 0 00-78.8-98.713 157.599 113.984 0 00-157.598 0 157.599 113.984 0 00-78.8 98.713h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4923"
                  d="M666.266 214.099a157.599 86.36 0 00-78.8-74.79 157.599 86.36 0 00-157.598 0 157.599 86.36 0 00-78.8 74.79h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4925"
                  d="M666.266 214.099a157.599 56.315 0 00-78.8-48.77 157.599 56.315 0 00-157.598 0 157.599 56.315 0 00-78.8 48.77h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4927"
                  d="M666.266 214.099a157.599 27.723 0 00-78.8-24.008 157.599 27.723 0 00-157.598 0 157.599 27.723 0 00-78.8 24.008h157.6z"
                  opacity="1"
                ></path>
              </g>
            </g>
          </g>
          <g
            id="g4844"
            fill="none"
            fillOpacity="1"
            stroke="#84e0fc"
            strokeDasharray="none"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            transform="translate(-841.622 -426.63) scale(2.352)"
          >
            <circle
              id="path4673"
              cx="546.222"
              cy="220.147"
              r="37.694"
              strokeWidth="0.12"
              opacity="1"
              transform="translate(-1775.086 -703.526) scale(4.181)"
            ></circle>
            <g id="g4788" strokeWidth="0.502">
              <g id="g4717">
                <path
                  id="path4677"
                  d="M666.266 216.907a157.599 136.276 0 01-78.8 118.019 157.599 136.276 0 01-157.598 0 157.599 136.276 0 01-78.8-118.019h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4681"
                  d="M666.266 216.907a157.599 113.984 0 01-78.8 98.713 157.599 113.984 0 01-157.598 0 157.599 113.984 0 01-78.8-98.713h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4683"
                  d="M666.266 216.907a157.599 86.36 0 01-78.8 74.79 157.599 86.36 0 01-157.598 0 157.599 86.36 0 01-78.8-74.79h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4685"
                  d="M666.266 216.907a157.599 56.315 0 01-78.8 48.77 157.599 56.315 0 01-157.598 0 157.599 56.315 0 01-78.8-48.77h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4687"
                  d="M666.266 216.907a157.599 27.723 0 01-78.8 24.009 157.599 27.723 0 01-157.598 0 157.599 27.723 0 01-78.8-24.009h157.6z"
                  opacity="1"
                ></path>
              </g>
              <g id="g4710" opacity="1" transform="translate(0 2.791)">
                <path
                  id="path4700"
                  d="M666.266 214.099a157.599 136.276 0 00-78.8-118.018 157.599 136.276 0 00-157.598 0 157.599 136.276 0 00-78.8 118.018h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4702"
                  d="M666.266 214.099a157.599 113.984 0 00-78.8-98.713 157.599 113.984 0 00-157.598 0 157.599 113.984 0 00-78.8 98.713h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4704"
                  d="M666.266 214.099a157.599 86.36 0 00-78.8-74.79 157.599 86.36 0 00-157.598 0 157.599 86.36 0 00-78.8 74.79h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4706"
                  d="M666.266 214.099a157.599 56.315 0 00-78.8-48.77 157.599 56.315 0 00-157.598 0 157.599 56.315 0 00-78.8 48.77h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4708"
                  d="M666.266 214.099a157.599 27.723 0 00-78.8-24.008 157.599 27.723 0 00-157.598 0 157.599 27.723 0 00-78.8 24.008h157.6z"
                  opacity="1"
                ></path>
              </g>
            </g>
            <g
              id="g4802"
              strokeWidth="0.502"
              transform="rotate(90 508.667 216.899)"
            >
              <g id="g4804">
                <path
                  id="path4806"
                  d="M666.266 216.907a157.599 136.276 0 01-78.8 118.019 157.599 136.276 0 01-157.598 0 157.599 136.276 0 01-78.8-118.019h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4808"
                  d="M666.266 216.907a157.599 113.984 0 01-78.8 98.713 157.599 113.984 0 01-157.598 0 157.599 113.984 0 01-78.8-98.713h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4810"
                  d="M666.266 216.907a157.599 86.36 0 01-78.8 74.79 157.599 86.36 0 01-157.598 0 157.599 86.36 0 01-78.8-74.79h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4812"
                  d="M666.266 216.907a157.599 56.315 0 01-78.8 48.77 157.599 56.315 0 01-157.598 0 157.599 56.315 0 01-78.8-48.77h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4814"
                  d="M666.266 216.907a157.599 27.723 0 01-78.8 24.009 157.599 27.723 0 01-157.598 0 157.599 27.723 0 01-78.8-24.009h157.6z"
                  opacity="1"
                ></path>
              </g>
              <g id="g4816" opacity="1" transform="translate(0 2.791)">
                <path
                  id="path4818"
                  d="M666.266 214.099a157.599 136.276 0 00-78.8-118.018 157.599 136.276 0 00-157.598 0 157.599 136.276 0 00-78.8 118.018h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4820"
                  d="M666.266 214.099a157.599 113.984 0 00-78.8-98.713 157.599 113.984 0 00-157.598 0 157.599 113.984 0 00-78.8 98.713h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4822"
                  d="M666.266 214.099a157.599 86.36 0 00-78.8-74.79 157.599 86.36 0 00-157.598 0 157.599 86.36 0 00-78.8 74.79h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4824"
                  d="M666.266 214.099a157.599 56.315 0 00-78.8-48.77 157.599 56.315 0 00-157.598 0 157.599 56.315 0 00-78.8 48.77h157.6z"
                  opacity="1"
                ></path>
                <path
                  id="path4826"
                  d="M666.266 214.099a157.599 27.723 0 00-78.8-24.008 157.599 27.723 0 00-157.598 0 157.599 27.723 0 00-78.8 24.008h157.6z"
                  opacity="1"
                ></path>
              </g>
            </g>
          </g>
          <path
            id="path3296"
            fill="#fd5"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="4.9392, 1.6464"
            strokeDashoffset="1.12"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1.646"
            d="M-326.828-319.467c-222.195 0-403.22 181.026-403.22 403.221s181.017 403.295 403.22 403.295c142.332 0 267.652-74.292 339.423-186.102l1.69-2.421 1.691 2.42C87.746 412.759 213.066 487.05 355.4 487.05c222.203 0 403.221-181.1 403.221-403.295 0-222.195-181.026-403.221-403.22-403.221-142.35 0-267.656 74.27-339.424 186.102-.369.576-1.69 2.486-1.69 2.486s-1.322-1.91-1.69-2.486c-71.77-111.83-197.076-186.102-339.424-186.102zm0 31.458c152.7 0 283.904 92.195 341.114 223.955C71.495-195.814 202.699-288.01 355.399-288.01c205.221 0 371.763 166.542 371.763 371.763 0 205.221-166.541 371.837-371.763 371.837-152.703 0-283.906-92.264-341.113-224.028C-42.922 363.326-174.125 455.59-326.828 455.59c-205.221 0-371.763-166.616-371.763-371.837 0-205.221 166.542-371.763 371.763-371.763z"
          ></path>
          <path
            id="path5265"
            fill="#fff"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="2.352"
            d="M539.443 331.817c-.33.018-.688.043-1.029.073-4.838 9.266-11.081 17.225-15.95 25.284a2.39 2.39 0 01-2.13 1.176c-2.804-.046-4.51.608-6.028 1.764-1.518 1.156-2.772 2.909-3.969 4.924-2.37 3.992-4.436 9.341-9.628 11.76-.019.01-.054-.009-.074 0-.032.015-.04.06-.073.074-4.24 2.127-8.652 1.292-12.348-.515-3.741-1.828-7.128-4.586-10.143-6.835-3.015-2.25-5.686-3.82-7.277-3.896-.795-.038-1.343.144-2.131.809-.772.651-1.711 1.979-2.646 4.116.181 12.532-6.767 21.507-16.979 23.814h-.147c-7.227 1.117-10.254 1.386-11.76 2.425-1.505 1.04-2.885 3.729-6.174 10.952-.044.076-.093.15-.147.22-2.939 5.175-6.522 10.107-11.319 12.79-4.796 2.681-10.904 2.543-16.978-1.912a2.39 2.39 0 01-.882-1.25c-1.14-4.165-2.813-6.665-4.337-7.864-1.523-1.199-2.833-1.291-4.19-.808-1.406.5-3.361 1.83-5.585 3.16-2.224 1.33-4.872 2.684-8.012 2.352a2.348 2.348 0 01-.514-.073c-1.644-.515-3.702-.24-6.248.44-2.545.682-5.452 1.7-8.673 1.912-1.31.086-2.708.91-4.483 1.91-1.775 1.002-3.986 2.263-6.762 2.206-3.315-.069-6.389-1.254-9.188-2.205-2.799-.951-5.318-1.647-6.688-1.47-1.49.192-3.444 1.006-5.586 1.69-2.143.685-4.639 1.329-7.277.368-14.932-5.44-18.112-6.75-26.092-14.627-1.176-1.16-2.787-1.919-4.778-2.793-1.99-.873-4.352-1.877-6.541-3.822a2.42 2.42 0 01-.073-.073c-2.532-2.447-6.852-5.195-9.923-6.321-.995-.365-1.302-.325-1.764-.368 1.62 1.947 3.952 3.973 5.807 6.615 1.048 1.494 1.916 3.223 2.131 5.219.215 1.996-.327 4.163-1.69 6.174a2.39 2.39 0 01-2.352 1.029c-5.493-.777-9.38.45-13.818 2.058-4.269 1.547-9.08 3.357-15.215 3.748-1.269.949-2.608 1.735-4.336 2.352-2.075.74-4.48 1.365-6.836 1.985-4.713 1.24-9.624 2.545-10.951 3.307-.927.533-2.57 3.276-4.043 5.66 40.946 15.64 85.367 24.255 131.786 24.255 87.265 0 167.526-30.3 230.79-80.924-6.692-6.59-15.767-15.255-20.58-18.963-2.147 1.446-4.229 2.443-6.248 2.573-2.524.162-4.783-.776-6.615-1.985-3.665-2.418-6.342-5.991-8.894-7.79a2.39 2.39 0 01-.955-2.132c.239-4.047 1.316-7.997 1.176-10.143-.07-1.073-.229-1.44-.662-1.764-.432-.323-1.569-.794-3.969-.662z"
          ></path>
          <path
            id="path2238"
            fill="#6bb682"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="2.352"
            d="M-219.813 376.31c.289-1.477.699-3.12 1.839-4.226 1.64-.387 3.003-1.366 4.546-2.028 1.751-.387 1.595-2.454 2.374-3.7.805-1.377.748-3.071.93-4.61.695-1.186 3.066-.57 4.125.098 1.428.863 2.537 2.293 2.893 3.931-.061 1.61.258 3.188 1.292 4.47 1.299 2.319 2.547 4.667 3.82 7.001.587 1.559 1.972 2.6 3.538 3.05 1.5.69 3.847.58 4.515 2.358.665 1.329-.208 3.058-1.83 2.447-3.343-.677-6.521-2.008-9.889-2.596-3.278-.698-6.59-2.123-9.991-1.417-1.52-.315-2.87-1.414-4.536-1.424-1.267.018-2.374-.725-2.882-1.88-.258-.486-.495-.983-.744-1.474z"
          ></path>
          <path
            id="path2241"
            fill="#6bb682"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="2.352"
            d="M-183.482 361.18c-.818 1.6 1.473 1.507 2.196 2.622 1.539 1.27 2.626 3.003 3.648 4.694 1.101 2.255 3.35 3.582 5.069 5.313 1.817 1.328 3.89 2.261 5.66 3.666 1.967 1.54 4.534 1.92 6.96 1.796 1.43-.657 1.275-2.626 1.194-3.963-.467-1.837-1.88-3.217-2.837-4.804-1.118-1.308-2.49-2.398-3.375-3.9-1.017-1.21-1.783-2.613-2.113-4.169-.424-2.051-1.461-3.882-2.175-5.834-.685-1.75-2.172-2.976-3.373-4.36-1.31-1.226-3.26-1.71-4.974-1.132-2.179.39-4.375 2.13-4.434 4.48-.495 1.86-1.033 3.71-1.446 5.591z"
          ></path>
          <path
            id="path3256"
            fill="#fdb456"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="2.352"
            d="M258.197 212.135c1.492.3 2.921.732 4.337 1.25-1.411-.515-2.85-.956-4.337-1.25zm13.157 2.867a31.06 31.06 0 00-4.631.44c2 6.23-9.895 3.425-13.01 6.248-2.668 6.208-9.364 9.591-11.98 15.73.202 6.089-5.541 8.816-8.305 13.376 4.64.265 9.267.179 13.818-.735.908-.05 1.828-.095 2.719-.073 6.235.156 11.945 2.204 15.582 7.718 2.414 4.393 4.625 9.413 9.555 11.613 5.11 3.427 10.784 6.914 17.126 7.056 4.601 1.167 9.398 2.678 13.818 3.822 1.497 2.163 2.04 4.7 2.131 7.276H318.173c2.296 0 3.719.69 5.66 1.176 1.912.478 4.179 1.911 6.174 1.911h7.644c2.16 0 3.17-1.396 5.071-1.396h7.865c2.292 0 4.166.294 6.468.294h9.04c2.435 0 1.27-1.27 2.499-2.5 1.443-1.443 2.7-1.434 3.675.515.862 1.724 1.39 2.369 3.381 2.867 2.3.575 2.181-.785 3.675-2.279 1.225-1.225 2.205-3.394 2.205-5.365 0-1.844 1.176-3.206 1.176-4.484 0-2.122 1.397-3.338 1.397-5.66 0-1.944.174-4.3-.294-6.173-.41-1.639.175-3.794-1.103-5.072-1.249-1.249-2.254-2.299-2.793-3.748-5.399-1.71-9.694-6.228-15.508-7.938-5.752-4.565-12.866-6.789-19.257-10.143-5.091-4.287-9.325-10.277-16.464-11.32-7.12-1.962-14.464-2.27-20.874-6.173-7.853-1.053-16.836 2.106-23.888-2.279-3.182-3.61-7.868-4.776-12.568-4.704zm-44.762 41.38a76.25 76.25 0 000 0z"
          ></path>
          <path
            id="path4581"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M135.84 209.583l-153.29-33.047"
          ></path>
          <path
            id="path12048"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M148.58 183.304l-45.39-42.602"
          ></path>
          <path
            id="path12050"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M65.366 63.858l5.574-37.029"
          ></path>
          <path
            id="path12052"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M58.023-19.55C30.172-10.848 3.966-7.793-9.09-17.367"
          ></path>
          <path
            id="path12054"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M-9.886-39.663c43.518 0 81.541-58.454 143.336-59.325"
          ></path>
          <path
            id="path12056"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M190.785-13.384c-9.574-20.018-48.299-30.052-72.115-23.151"
          ></path>
          <path
            id="path12058"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M299.083 184.897c7.963-40.612-5.574-103.52-5.574-103.52"
          ></path>
          <path
            id="path12060"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M313.018 182.906c15.13-27.074-3.583-53.352 10.75-97.15"
          ></path>
          <path
            id="path12062"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M364.779 183.703c10.462-22.771-25.487-35.146-15.024-52.994"
          ></path>
          <path
            id="path12064"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M507.318 179.721l10.352-25.482"
          ></path>
          <path
            id="path12066"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M547.93 256.167l-20.306-19.112"
          ></path>
          <path
            id="path12068"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M591.727 213.564l-3.583-34.64"
          ></path>
          <path
            id="path12070"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M649.858 223.518l-13.936-49.77"
          ></path>
          <path
            id="path12072"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M588.94 102.08l12.741-14.333"
          ></path>
          <path
            id="path12074"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M408.178 363.669c-61.316 65.297-139.355 27.87-156.874-31.852"
          ></path>
          <path
            id="path12076"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M414.548 268.51l-16.723-16.723"
          ></path>
          <path
            id="nueva-york-groenlandia"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M-260.326-33.69l60.122-63.307"
          ></path>
          <path
            id="labrador-groenlandia"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M-261.52-124.072l37.427-35.037"
          ></path>
          <path
            id="groenlandia-islandia"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M-92.702-52.005l-63.307-39.02"
          ></path>
          <path
            id="path2255"
            fill="none"
            fillRule="evenodd"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="1"
            d="M-623.148 159.037c333.525 67.041 216.412 227.804 412.172 247.754"
          ></path>
          <path
            id="chile-australia"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M-252.845 308.594c-19.318.387-40.9-3.529-48.596 1.955-19.379 13.809-4.838 45.113-42.438 45.164-35.352.046-13.261-41.204-59.668-46.508l-212.899-.42"
          ></path>
          <path
            id="path3309"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M617.576 342.577h-22.145c-20.184-.031-19.206-.093-29.009-2.924-9.747-2.815-22.436-15.73 4.423-26.002 26.859-10.271 26.814-29.42 26.814-29.42"
          ></path>
          <path
            id="path3315"
            fill="#6b0000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="1.229, 1.229"
            strokeDashoffset="0"
            strokeMiterlimit="4"
            strokeWidth="1.229"
            d="M628.245 346.962v-10.586l17.339 2.388-2.322-8.56 13.589 11.266-13.59 10.954 2.323-8.632-17.339 3.17z"
          ></path>
          <path
            id="path5260"
            fill="#fff"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="2.352"
            d="M-480.663 319.763c-3.366.258-7.151 1.238-10.217 2.719-3.065 1.481-5.276 3.48-5.88 5.072a2.126 2.126 0 01-.661.955c-4.436 3.45-9.088 4.053-13.157 3.087-4.068-.966-7.627-3.243-11.025-5.365-3.397-2.123-6.6-4.03-9.555-4.631-2.954-.601-5.665-.187-9.114 2.867a2.125 2.125 0 01-2.94-.147c-2.558-2.723-4.967-2.842-7.57-1.691-2.604 1.151-5.147 3.934-6.542 7.203-.242.593-.71 1.064-1.323 1.25a2.197 2.197 0 01-1.837-.294c-1.664-1.081-2.814-1.377-3.528-1.397-.714-.019-1.11.112-1.617.588-1.013.951-2.027 3.503-2.94 6.1-.457 1.3-.922 2.63-1.544 3.823-.622 1.192-1.4 2.37-2.866 3.013-1.467.642-3.273.33-4.778-.588-1.364-.832-2.75-2.315-4.336-4.19-2.822-1.833-7.782-.263-11.687 1.397 67.32 70.272 162.03 114.072 266.952 114.072 79.513 0 153.191-25.152 213.518-67.914-.769-.824-1.47-1.522-1.838-1.47-1.536.216-4.55-1.58-7.13 2.573-.21.348-4.705.923-5.07 1.102-4.303 2.137-7.14 10.094-14.113 11.834-3.486.87-7.106.974-9.849-1.25-2.51-2.035-3.555-5.766-3.454-10.804-.8-.716-1.547-1.307-1.911-1.397-.462-.114-.655-.073-1.103.22-.896.588-2.235 2.65-3.454 4.851-1.22 2.202-2.108 4.633-4.704 5.807-1.298.587-3.16.328-4.41-.588-1.008-.739-1.778-2.042-2.646-3.455-4.494-.942-8.234-2.374-10.878-2.425-1.422-.027-2.573.272-3.896 1.176-1.323.904-2.843 2.548-4.483 5.365a2.125 2.125 0 01-1.985 1.03c-5.983-.327-11.494-.78-14.847.367-1.676.574-2.788 1.393-3.601 2.866-.814 1.473-1.31 3.772-1.103 7.277a2.023 2.023 0 01-.514 1.543c-.389.43-.964.719-1.544.735-6.19.165-11.649-2.958-16.537-4.263-2.445-.652-4.682-.871-6.836-.367-2.082.487-4.218 1.727-6.541 4.336-.79 2.449-1.54 4.63-2.352 6.395-.88 1.91-1.809 3.556-3.528 4.483-.86.464-1.946.625-2.94.441-.995-.183-1.882-.616-2.72-1.25-1.675-1.265-3.261-3.283-5.218-6.173a2.122 2.122 0 01-.22-.441c-1.824-4.69-3.444-6.214-5.22-6.689-1.774-.474-4.64.185-8.82 1.764a2.126 2.126 0 01-2.572-.955c-2.074-3.877-9.789-12.639-15.729-16.611-1.485-.993-2.873-1.677-3.895-1.985-1.022-.307-1.513-.177-1.69-.073-.178.104-.558.37-.736 1.69-.178 1.321-.085 3.467.515 6.468.072.315.072.642 0 .956-.6 2.345-1.33 4.125-2.352 5.439-1.023 1.314-2.626 2.151-4.19 2.058-1.563-.093-2.744-.86-3.822-1.838-1.078-.977-2.106-2.213-3.013-3.601-1.815-2.777-3.371-6.215-4.557-9.408-.877-2.36-1.23-4.194-1.544-6.027-2.654.275-5.131-.236-6.909-1.617-2.305-1.79-3.915-4.255-5.365-6.174-1.45-1.919-2.731-3.097-3.381-3.234-.325-.068-.63-.044-1.323.367-.694.412-1.667 1.318-2.867 2.867a2.217 2.217 0 01-1.47.808c-.566.056-1.106-.15-1.543-.514-2.135-1.774-4.25-1.778-7.056-1.029-2.805.75-6.053 2.435-9.335 3.895-3.281 1.46-6.715 2.772-10.29 2.058-3.455-.69-6.4-3.589-8.452-8.673-.94-1.365-2.465-2.143-4.557-2.793-2.092-.649-4.634-1.06-7.203-1.764-2.57-.703-5.24-1.71-7.277-3.895-.997-1.07-1.734-2.463-2.278-4.043-.37.446-.714 1.257-1.103 1.617-1.54 1.428-3.47 2.128-5.292 1.911-3.644-.432-5.947-3.52-8.305-6.909-2.359-3.388-4.679-7.422-7.056-10.73-2.377-3.309-4.888-5.692-6.91-6.248a2.111 2.111 0 01-1.47-1.323 2.169 2.169 0 01.295-1.985c.934-1.329 3.782-5.951 4.557-9.628.387-1.838.249-3.251-.294-4.043-.459-.668-1.632-1.217-3.749-1.396-1.283 2.342-3.089 4.111-5.218 4.924-2.637 1.008-5.436 1.148-8.159 1.323-2.722.176-5.316.361-7.497 1.103-2.18.742-3.955 1.871-5.365 4.336a2.125 2.125 0 01-.515.588c-2.657 2.152-6.266 2.684-9.849 2.573-3.583-.11-7.156-.907-9.996-2.058-1.42-.576-2.685-1.212-3.675-2.058-.99-.846-2.01-2.142-1.69-3.822.32-1.68 1.732-2.615 3.234-3.234 1.138-.47 2.868-.751 4.63-1.029.45-1.145.795-2.266.735-2.867-.076-.77-.298-1.148-.882-1.617-1.167-.937-4.062-1.581-7.423-1.323z"
          ></path>
          <path
            id="path8181"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M635.373-104.635c-14.333 19.112-41.01 33.843-68.88 33.047"
          ></path>
          <path
            id="path8183"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M608.64-162.096c-4.023-4.47-8.988-6.206-16.748-10.516-7.76-4.31-30.873-7.28-41.348-6.5"
          ></path>
          <path
            id="path8189"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M591.576-199.396l-44.422-.155c-10.398 1.45-20.15 4.271-30.307 10.317"
          ></path>
          <path
            id="path8191"
            fill="#6b0000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="1.229, 1.229"
            strokeDashoffset="0"
            strokeMiterlimit="4"
            strokeWidth="1.229"
            d="M603.958-195.326v-10.586l17.338 2.388-2.322-8.56 13.59 11.266-13.59 10.954 2.322-8.632-17.338 3.17z"
          ></path>
          <path
            id="path18651"
            fill="none"
            fillRule="evenodd"
            stroke="#0cc8fc"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="1.03"
            d="M-496.832 211.83c3.976 3.424-2.654 7.049-5.691 6.608-8.23-1.193-10.306-11.466-7.527-17.99 4.972-11.669 19.96-14.111 30.29-8.444 15.158 8.317 18.02 28.565 9.362 42.589-11.539 18.69-37.21 21.97-54.888 10.28-22.246-14.712-25.944-45.873-11.198-67.188 17.859-25.815 54.546-29.93 79.487-12.116 29.392 20.993 33.923 63.226 13.033 91.786-24.118 32.975-71.909 37.923-104.085 13.952-36.56-27.237-41.925-80.596-14.87-116.385 30.353-40.149 89.286-45.93 128.685-15.787 43.74 33.466 49.938 97.977 16.705 140.983"
          ></path>
          <path
            id="text2331"
            fill="#000"
            fillOpacity="1"
            d="M-485.478 266.315c0-.699-.075-1.41-.224-2.133a10.89 10.89 0 01-.224-2.208c0-1.348.087-2.645.261-3.892a13.615 13.615 0 00-.037-3.892c-.3 1.896-.912 3.343-1.834 4.34a34.271 34.271 0 01-2.919 2.808 18.127 18.127 0 00-2.807 3.03c-.848 1.147-1.321 2.844-1.42 5.09a27.422 27.422 0 003.891-4.94c-.648 1.647-1.122 3.194-1.421 4.64-.3 1.447-.587 2.806-.861 4.078a54.37 54.37 0 01-.9 3.593 10.24 10.24 0 01-1.57 3.181c-.724.998-1.684 1.946-2.881 2.843-1.198.898-2.795 1.746-4.79 2.543-2.894 1.098-5.787 1.647-8.681 1.647-2.245 0-4.29-.087-6.136-.261a21.616 21.616 0 01-5.201-1.123 16.97 16.97 0 01-4.603-2.506c-1.448-1.097-2.87-2.544-4.266-4.34a53.967 53.967 0 003.031-2.808c.973-.973 1.934-1.958 2.882-2.955-.15.25-.413.699-.786 1.348-.374.648-.773 1.322-1.197 2.02a45.858 45.858 0 00-1.123 1.944c-.324.599-.486.973-.486 1.124 0 .548.237 1.084.71 1.608.474.523.985.785 1.535.785.399 0 .897-.137 1.496-.41.598-.275 1.26-.574 1.983-.898a27.45 27.45 0 012.283-.899 7.108 7.108 0 012.32-.412 3.28 3.28 0 011.796.524c.55.35 1.048.749 1.495 1.198.1-.4.151-.723.151-.973 0-.5-.187-.874-.562-1.123a3.655 3.655 0 00-1.233-.524c.15-.05.373-.112.673-.187.299-.075.499-.112.6-.112.398 0 .71.125.934.375.225.25.387.523.486.822.05-.2.1-.387.15-.56.049-.175.073-.362.073-.562 0-.449-.137-.835-.41-1.16-.275-.324-.661-.486-1.16-.486-1.497 0-3.007.1-4.528.299-1.522.2-3.006.549-4.453 1.048a197.52 197.52 0 012.77-1.76c.997-.623 1.82-1.308 2.47-2.056.148-.2.323-.399.522-.598.2-.2.424-.3.674-.3.1 0 .387.075.861.224.473.15.786.25.936.3 1.298 1.595 2.52 2.755 3.667 3.479a25.782 25.782 0 003.33 1.796c1.072.474 2.158.96 3.255 1.46 1.098.499 2.22 1.298 3.367 2.395l.075-.6c0-.549-.175-1.047-.524-1.496a8.582 8.582 0 00-1.123-1.197c.899.099 1.61.36 2.134.784.523.425.91 1.086 1.16 1.984l.075-1.272c.05-.898-.237-1.522-.86-1.87-.625-.35-1.411-.648-2.359-.898a24.94 24.94 0 01-2.993-1.01c-1.047-.425-1.946-1.136-2.695-2.135.6.2 1.2.326 1.797.376.599.05 1.222.074 1.871.074 1.247 0 2.307-.237 3.18-.711a6.403 6.403 0 002.171-1.908 8.314 8.314 0 001.272-2.732 12.24 12.24 0 00.411-3.179c0-1.198-.187-2.396-.56-3.594a46.16 46.16 0 00-1.273-3.554 49.29 49.29 0 01-1.272-3.517 11.632 11.632 0 01-.56-3.554c0-.6.162-1.162.486-1.686a7.615 7.615 0 011.085-1.384c.099.599.31 1.235.635 1.909.324.673.66 1.334 1.01 1.983s.662 1.247.937 1.796c.274.55.412 1.023.412 1.422v2.097c0 .548.05 1.059.15 1.533.1.474.249.973.448 1.497.2.524.524 1.16.973 1.907.15-.449.274-.985.374-1.609.1-.623.274-1.134.524-1.533.2-.25.448-.387.748-.413.299-.025.598-.075.897-.15.3-.074.561-.273.786-.598.224-.324.337-.91.337-1.758 0-.548-.137-1.047-.411-1.496a2.818 2.818 0 01-.411-1.498c0-.2.112-.374.336-.523.225-.15.462-.312.71-.487.25-.175.486-.412.711-.711.225-.3.337-.723.337-1.271 0-.649-.075-1.272-.224-1.872-.15-.599-.324-1.197-.523-1.796 1.047-1.398 1.796-2.707 2.245-3.93.449-1.221.723-2.705.822-4.451-1.197.898-2.132 1.846-2.806 2.844-.673.998-1.26 2.195-1.76 3.591a54.622 54.622 0 01-.26-1.57c-.076-.5-.114-1.024-.114-1.572 0-.898.15-1.772.45-2.62.3-.848.624-1.67.973-2.469-1.348.65-2.296 1.447-2.845 2.395-.548.948-.898 2.145-1.047 3.591.1-1.746.015-3.218-.261-4.415-.275-1.198-.911-2.52-1.908-3.966a38.04 38.04 0 00-.224 4.19c0 .849.024 1.722.074 2.62.05.898.124 1.772.225 2.62-.848-.899-1.484-1.847-1.908-2.845a17.589 17.589 0 01-1.01-3.292c-.151.399-.301.81-.45 1.234-.15.424-.224.861-.224 1.31 0 .548.062 1.072.187 1.571.125.5.287.998.486 1.496-1.897-.348-3.406.001-4.529 1.049-1.122 1.047-1.683 2.519-1.683 4.414 0 1.597.187 3.207.561 4.828a21.76 21.76 0 01.56 4.901c0 1.098-.46 1.921-1.383 2.47-.923.55-2.033.936-3.33 1.16a29.71 29.71 0 01-3.966.413c-1.347.05-2.42.1-3.22.148a39.106 39.106 0 011.836-3.404 27.018 27.018 0 012.02-2.881 25.653 25.653 0 012.395-2.582 39.674 39.674 0 012.956-2.506 19.928 19.928 0 01-2.32-3.78 9.948 9.948 0 01-.973-4.303c0-1.847.224-3.755.673-5.725.45-1.97 1.173-3.766 2.171-5.388a13.023 13.023 0 013.817-4.005c1.546-1.048 3.416-1.572 5.612-1.572 1.148 0 2.233.175 3.256.524a19.03 19.03 0 013.03 1.349c-.55-.75-1.098-1.648-1.646-2.695-.55-1.048-.824-2.07-.824-3.07 0-.747.212-1.483.636-2.206.424-.723.948-1.421 1.572-2.095a19.973 19.973 0 011.983-1.872 15.12 15.12 0 011.946-1.384c-.899-.3-1.834-.6-2.807-.898-.973-.3-1.958-.45-2.955-.45-1.747 0-3.455.288-5.126.862a24.384 24.384 0 00-4.827 2.282 42.207 42.207 0 00-4.454 3.143 60.997 60.997 0 00-3.928 3.443c.299 1.746.448 3.467.448 5.164 0 1.297-.212 2.619-.636 3.965a23.445 23.445 0 01-1.646 3.929 37.343 37.343 0 01-2.245 3.704 41.886 41.886 0 01-2.432 3.219c1.247 1.596 2.544 2.955 3.892 4.078 1.347 1.123 2.894 2.158 4.64 3.107l-3.069-.375-6.36-5.613c-.2 1.847-.4 3.805-.599 5.875-.2 2.07-.524 4.103-.973 6.099a29.643 29.643 0 01-1.909 5.725 13.45 13.45 0 01-3.48 4.678 21.256 21.256 0 01-2.992 2.245c-1.048.648-1.921 1.521-2.62 2.62-.898-1.298-2.021-2.446-3.369-3.444-1.347-.998-2.844-1.497-4.49-1.497-1.047 0-2.007.212-2.88.636a6.743 6.743 0 00-2.208 1.685 7.545 7.545 0 00-1.384 2.432 8.621 8.621 0 00-.486 2.88c0 .948.174 1.934.523 2.956a9.768 9.768 0 001.459 2.77 7.888 7.888 0 002.246 2.02 5.496 5.496 0 002.881.786c1.646 0 3.205-.324 4.676-.973a12.833 12.833 0 003.93-2.695c.948 1.797 2.108 3.281 3.48 4.454a17.392 17.392 0 004.527 2.807 21.355 21.355 0 005.275 1.459c1.872.274 3.755.411 5.65.411 3.393 0 6.474-.237 9.243-.711 2.77-.475 5.214-1.348 7.335-2.62 2.12-1.272 3.89-3.018 5.313-5.238 1.422-2.22 2.507-5.076 3.254-8.569.151-.798.251-1.483.3-2.057.05-.574.112-1.11.187-1.61a6.832 6.832 0 01.449-1.57c.224-.55.611-1.199 1.16-1.948a15.72 15.72 0 011.72 6.137c.35-.848.663-1.709.937-2.582a8.822 8.822 0 00.411-2.655zm-30.757-38.766c0-.3-.011-.599-.037-.898-.025-.3-.063-.623-.113-.972l-.523-.226c-.848.25-1.522.524-2.022.823-.499.3-.898.649-1.197 1.049-.3.4-.562.874-.786 1.422a95.551 95.551 0 01-.86 2.02 30.8 30.8 0 00-1.609-3.965 19.776 19.776 0 00-2.47-3.892 14.348 14.348 0 00-3.293-2.994c-1.223-.799-2.582-1.198-4.079-1.198-.798 0-1.646.175-2.544.524-.899.35-1.747.811-2.544 1.385a13.48 13.48 0 00-2.17 1.946c-.649.723-1.123 1.459-1.423 2.206.649-.2 1.21-.56 1.684-1.085.475-.523 1.086-.785 1.833-.785.55 0 1.037.162 1.46.486.425.325.774.736 1.048 1.236s.486 1.036.636 1.609c.15.573.225 1.084.225 1.533 0 .599-.362 1.447-1.085 2.545a226.25 226.25 0 01-2.395 3.554 49.046 49.046 0 00-2.395 3.854c-.724 1.298-1.086 2.495-1.086 3.593l.075.673a101.256 101.256 0 012.208-4.003 22.173 22.173 0 012.807-3.854 15.487 15.487 0 013.517-2.881c1.298-.773 2.77-1.16 4.415-1.16.997 0 1.995.137 2.993.41.998.275 1.971.611 2.92 1.01l-.599.674a21.76 21.76 0 00-2.694-.71 14.45 14.45 0 00-2.768-.263c-1.199 0-2.521.5-3.967 1.497-1.447.998-2.794 2.22-4.042 3.668a24.828 24.828 0 00-3.143 4.565c-.848 1.597-1.272 2.969-1.272 4.117v.148c.199-.2.398-.523.598-.973.2-.449.411-.898.636-1.347.225-.45.462-.836.711-1.16.25-.324.524-.487.823-.487.35 0 .637.138.862.413.224.274.411.599.56.972.15.374.25.773.3 1.197.05.424.075.761.075 1.01 0 .75-.1 1.486-.3 2.21-.199.722-.41 1.458-.635 2.207a37.593 37.593 0 00-.6 2.245 9.82 9.82 0 00-.263 2.246 13.5 13.5 0 00.413 3.29 24.523 24.523 0 001.01 3.146c-.25-2.845-.2-5.576.15-8.196s1.048-5.052 2.095-7.297c1.048-2.245 2.482-4.265 4.303-6.061 1.82-1.796 4.128-3.293 6.922-4.491l-.148.824c-2.496 1.646-4.529 3.292-6.1 4.939-1.572 1.647-2.806 3.43-3.705 5.351-.898 1.92-1.534 4.016-1.908 6.286-.374 2.27-.61 4.852-.711 7.745.1-.448.275-.896.525-1.345.25-.45.649-.674 1.197-.674.25 0 .487.2.711.598.225.4.412.86.561 1.384.15.524.274 1.048.373 1.571.1.524.15.886.15 1.085 0 .55-.087 1.211-.262 1.985a55.194 55.194 0 01-.598 2.394 68.696 68.696 0 01-.711 2.432c-.25.797-.45 1.471-.599 2.02 2.295-1.596 4.053-3.068 5.276-4.415 1.223-1.347 2.12-2.644 2.695-3.892.574-1.247.935-2.495 1.085-3.742.149-1.247.249-2.569.299-3.966a51.16 51.16 0 01.374-4.49c.2-1.596.674-3.392 1.423-5.388.498-1.396 1.184-2.58 2.057-3.554a37.241 37.241 0 002.544-3.181c.823-1.148 1.547-2.52 2.17-4.117.625-1.596.937-3.741.937-6.434zm19.682 22.526c0 .3-.05.587-.15.86-.099.275-.2.562-.3.862-.398-.25-.835-.575-1.31-.974-.474-.4-.71-.874-.71-1.422 0-.25.024-.474.075-.674.05-.2.075-.399.075-.598.5.1 1.01.3 1.535.6.523.299.785.747.785 1.346zm-41.46 25.668c-.25.25-.574.536-.973.86-.399.325-.823.637-1.272.936-.45.3-.91.549-1.384.749-.474.2-.885.3-1.236.3-.848 0-1.62-.312-2.319-.936-.698-.624-1.047-1.36-1.047-2.208 0-.849.362-1.547 1.085-2.096.723-.549 1.484-.823 2.281-.823.949 0 1.847.362 2.695 1.086a19.755 19.755 0 012.17 2.132zm41.01-25.819l-.598-.747-.674.747.674.6.599-.6z"
            style={{ lineHeight: "125%" }}
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="1"
            fontFamily="Bitstream Vera Sans"
            fontSize="7.955"
            fontStyle="normal"
            fontWeight="normal"
          ></path>
          <path
            id="path2334"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="1"
            d="M-412.238-55.208c20.522 36.265 97.797 50.02 148.593 31.13"
          ></path>
          <path
            id="path4669"
            fill="none"
            fillOpacity="1"
            stroke="#fff"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.528"
            markerMid="none"
            markerStart="none"
            d="M-326.807-288.891c-205.69 0-372.645 166.955-372.645 372.645 0 205.69 166.954 372.719 372.645 372.719 150.49 0 280.02-89.525 338.835-218.075.4-.9 2.278-5.044 2.278-5.044s1.879 4.143 2.279 5.044C75.399 366.949 204.928 456.473 355.42 456.473c205.691 0 372.645-167.029 372.645-372.719S561.11-288.891 355.42-288.891C204.93-288.891 75.4-199.435 16.585-70.89c-.4.9-2.279 5.008-2.279 5.008s-1.878-4.107-2.278-5.008C-46.79-199.433-176.32-288.891-326.807-288.891z"
          ></path>
          <path
            id="path3306"
            fill="none"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="14.112, 14.112"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.528"
            markerMid="none"
            markerStart="none"
            d="M-326.807-288.891c-205.69 0-372.645 166.955-372.645 372.645 0 205.69 166.954 372.719 372.645 372.719 150.49 0 280.02-89.525 338.835-218.075a2.493 2.493 0 014.557 0C75.399 366.949 204.928 456.473 355.42 456.473c205.691 0 372.645-167.029 372.645-372.719S561.11-288.891 355.42-288.891C204.93-288.891 75.4-199.435 16.585-70.89c-.4.9-2.279 5.044-2.279 5.044s-1.878-4.143-2.278-5.044C-46.79-199.433-176.32-288.891-326.807-288.891z"
          ></path>
          <path
            id="text15645"
            d="M-209.632 29.002l-.319.798v1.116l-.797 1.196c-.886.461-2.233.993-4.04 1.595l-.24.372c-1.488.107-2.268.16-2.339.16-2.109 0-4.306-.514-6.592-1.542l-.744.213c-.23.336-.585.7-1.063 1.09-.603.478-.984.806-1.143.983-.373.868-1.081 2.162-2.127 3.88.691 1.011 1.01 1.986.957 2.925l-.585 1.409h-.372l-.212.957.212 1.17-.372.743v1.17l-.425.957.212.213c-.709 2.161-1.152 3.464-1.329 3.907-.62 1.524-1.347 2.676-2.18 3.455l-.159.798.372.797c-.07.373-.195.94-.372 1.702h-.212c-.39.602-.71 1.382-.957 2.339-.692 2.622-1.037 4.439-1.037 5.449 0 .407.026.797.08 1.17l.744 1.169 1.17.585.372.957c.443.39.974.709 1.594.957l1.702-.957.425-.745-.213-1.17.213-.797.744-.372c.727-1.098 1.312-1.754 1.755-1.967l.212-.983.771-.957h.425l.745.744.372 1.037-.16.744a19.417 19.417 0 01-2.472 2.233c-.425 1.134-.709 2.002-.85 2.605a4.534 4.534 0 00-1.01 1.17l-1.542 1.01h-1.117c.142 0-.762-.195-2.71-.585l-.798-.798c-.638-.195-1.223-.266-1.755-.212l-.372-.372-1.78-.798-.798-1.116c.07-.78.019-1.489-.16-2.127a5.256 5.256 0 01-.212-.585v-1.993c0-.177.08-.514.239-1.01.142-.426.186-.798.133-1.117l.213-.212c-.107-1.134-.036-1.967.212-2.499.035-.07.479-.744 1.33-2.02 1.275-1.914 2.259-4.032 2.95-6.353 0 .036.07-.089.212-.372v-.798l-.425-.372H-236l-.798.585c-.23.55-.753 1.311-1.568 2.286-.815.975-1.33 1.781-1.542 2.419.053.638-.106 1.294-.478 1.967l-.904.904v1.17l-1.17 2.126-.744.585-.212.797h-.16v.372l-1.595 1.542-.372.824-1.17.744-.956 1.542-1.569.585-.212 1.595c-.337.39-.78.708-1.33.956l-.212.745-2.711.212-.372-1.541.372-.798h.212v-1.329l.373-.425-.373-1.117c-.425-.336-.886-.797-1.382-1.382v-.611h-.16c.107-1.595.16-2.428.16-2.499l-.16-1.754c.036-.46.16-1.134.373-2.02.23-.408.496-1.099.797-2.074-.035-.496.02-1.24.16-2.233-.124-.194-.315-.82-.572-1.873-.257-1.055-.385-1.697-.385-1.928.266-1.276.602-2.18 1.01-2.71-.036-.71-.177-1.667-.425-2.872-.178.213-.32.656-.426 1.33l-.744.212-.372 1.754-.798.745v.212l-.584.745v.425l-.213.16c-.089.354-.354.832-.797 1.435-.39.496-.638 1.267-.745 2.312l-.983 1.701-.585.426c-.425 1.063-1.17 2.552-2.233 4.465l-1.063.692c-.337.602-.85 1.47-1.542 2.604v.16c-.266 1.116-.85 2.224-1.754 3.323 0 .708-.248 1.488-.744 2.339l-1.595.585-.532.744-1.196.212-.425.373-1.728.132c-.727.054-1.303.08-1.728.08-.762 0-1.71-.15-2.844-.452-1.489-.407-2.419-.647-2.791-.717-.124-.16-.514-.479-1.17-.957l-.983-1.755c-.815-.478-1.79-1.515-2.924-3.11l-.372-2.126.372-1.542 1.17-1.382 1.17-.32.797-.637h.77l.798.957h.16l.212.585.372.372.425 1.967-.212.372-.585.372c-.709-.124-1.356-.443-1.94-.957l-1.17-.212-.425.584c.124.993.584 1.905 1.382 2.738l.797.425c.603.638.93 1.276.984 1.914l.957.585h.957l1.382.798c1.488.248 2.197.372 2.126.372-.407 0 .94-.124 4.04-.372.408-.213 1.002-.55 1.782-1.01 1.311-1.383 2.162-2.738 2.551-4.067v-1.17c.142-.603.461-1.063.957-1.382.266-.815.585-1.453.957-1.914l.957-.372c.142-.213.337-.532.585-.957.248-.585.518-1.16.81-1.728.293-.567.732-1.037 1.317-1.409l.425-1.329.744-.824c.053-.85.248-1.63.585-2.339h.399c.478-.762.744-1.47.797-2.126l.957-1.17c-.124-.532.337-2.153 1.382-4.864l-.425-2.127-.744-.957h-.213l-.213-.585c-1.453-.602-3.322-.903-5.608-.903-.638 0-1.595.044-2.871.132-1.276.09-2.233.133-2.87.133-.249 0-.621-.044-1.117-.133-.55-.106-.93-.168-1.143-.186h-1.914l-2.127.745c-.088.035-.602.425-1.541 1.17v.584c.142.603.46 1.063.957 1.382l.957.372.212.213v.16h.585l.744.451h2.552c.177 0 .416-.07.718-.212.602-.177 1.47-.576 2.605-1.196.992-.55 2.09-.993 3.296-1.33l.585.16.531.957-.319 1.063c-.443.372-.974.93-1.595 1.675-1.045.177-1.949.514-2.711 1.01l-1.382-.213c-.426.142-.744.213-.957.213a6.45 6.45 0 01-.984-.106 6.41 6.41 0 00-.957-.107c-.212 0-.531.071-.956.213l-1.755-.425-.585-.745h-.372c-1.648-1.293-2.552-2.277-2.711-2.95h-.213l-.957-1.542v-.797c1.72-1.772 4.112-2.658 7.177-2.658.124 0 .474.084 1.05.252.576.168.944.261 1.103.28 2.534.212 6.008.212 10.42 0 .71.39 1.817.584 3.323.584l.425.213h2.127c.762-.248 1.595-.514 2.498-.798l.373-.372h.425c.797.656 1.258 1.47 1.382 2.445-.478 1.578-.691 2.57-.638 2.978h-.16c-.372 1.205-.513 2.188-.425 2.95l.426.372-.426.957.213.798-.213.16c.124.389-.124 1.293-.744 2.71h-.213l-.584 1.01v.957l.372.798.212.16c1.028 1.382 1.542 3.659 1.542 6.83 0-.088-.124.674-.372 2.287l-.585.584c-.142 1.418-.212 2.003-.212 1.755 0 .372.088 1.09.265 2.153l.585.691.904-.85 1.409-.426a22.32 22.32 0 001.914-2.153c.088-.284.221-.7.398-1.25.177-.549.31-.965.399-1.249l.744-.957c.532-1.683.922-3.048 1.17-4.093.744-.46 1.409-1.214 1.993-2.26.532-.956.966-1.506 1.303-1.648.425-.62.691-1.329.797-2.126l1.755-1.33.398-.584h.745l.425-1.17-.213-.212v-1.33l.585-.584c-.035-.124.036-.443.213-.957l.372-.212.585-1.41.372-.159h.585l.797-.797v-.372l.16-.213.212-1.329c.248-.124.443-.46.585-1.01l.372-.16c.886-.673 1.86-2.232 2.924-4.678.124-.07.39-.372.797-.904l-.956-.425-3.084.213c-.886-.23-2.126-.966-3.721-2.206h-1.489l-1.674-.745c.407-.019-.692-.088-3.296-.212h-3.456l-1.967.797c0 .036-.027.16-.08.372-.053.213-.08.337-.08.372 0 .089.054.612.16 1.569l.585.584c.372-.07 1.542-.593 3.509-1.568.513.23 1.098.558 1.754.984l.16.797-1.17 1.754c-.178-.018-.443.005-.798.067a5.08 5.08 0 01-.744.093c-.39 0-.957-.08-1.701-.24a34.098 34.098 0 00-1.754-.292l-1.41-1.01v-.372l-.584-.585.213-.372c-.568-1.258-.851-2.25-.851-2.977 0-.142.019-.257.053-.346h.425l.16-.372.212-.212c.284.053.731-.01 1.343-.186.611-.177 1.076-.24 1.395-.186l1.542-.585h2.127c.177 0 .513.08 1.01.24.425.14.797.185 1.116.132l.425-.372c1.294.053 3.199.23 5.715.531l1.276 1.276 1.276.426.106.69c.567.16 1.4.355 2.499.586.727-.02 1.772.106 3.137.372l.983-.957.957-.213a4.96 4.96 0 01.585-.957v-.372c.957-.638 1.595-1.152 1.914-1.542v-.797h.212l.585-.585 2.127-.372.584-.372h3.084c.088 0 .416.106.983.319.567.212.904.354 1.01.425h.585l.16-.372.797.372 1.754 1.967.32 1.33zm-2.977.904l-.372-.319-.266-1.595-1.78-.16v-.584l-.373-.372-2.551-.213-1.702.798-.212.584c-.638.16-1.294.674-1.967 1.542v.213l-.957.585v.531l.372.426 1.382.77c1.24-.124 2.41.02 3.509.426 1.736-.071 3.287-.54 4.652-1.41l-.213-.743-.372-.213.85-.266zm9.915 26.555l-.212.372-.373.212v.213l-1.541.16-.213.425v.532l-.16.212v.585h-.212v.213l-.319.372-.106.478-.426.32.16.371c-.16.284-.381.922-.665 1.914l-.797.957h.213v.213c-.585.39-1.046.788-1.383 1.196l-.106.319.106.266-.212 1.754h-.16v.372l-.372.585.16.372.584.16c.461-.514 1.179-.957 2.153-1.33l.32.585-.506 1.01a6.743 6.743 0 00-1.967 1.914c-1.063.301-1.772.425-2.126.372v-.16h-.585a4.536 4.536 0 00-1.17-1.01c.036-.407-.018-.974-.159-1.7l-.425-.426h-.16c-.815.691-1.276 1.205-1.382 1.542l-.957.213-.372.584-1.116.426-.665-.213-.638.106c-.656-.407-1.223-.638-1.701-.69l-.744-.586c-.532-1.205-.798-2.073-.798-2.605 0-.283.07-.637.213-1.063h.16c.088-.248.212-.7.371-1.355l-.16-.426v-.212c0-.177.112-.435.333-.771.222-.337.341-.594.359-.771 1.063-.744 1.701-1.843 1.914-3.296a3.52 3.52 0 00.877-.798c.638-.212 1.099-.39 1.382-.531h.213c.39-.46.833-.85 1.329-1.17l.213-.425 1.754-.585 1.542.213.584.372h.745l.797-.744h.744l1.01.372.771-.213.426.213.16.372 1.381-.16.585-.425.372.213.585-.213c.16.16.284.425.372.798zm-6.034.797l-1.17-.425c-.708.195-1.346.266-1.913.212l-1.382.585-.745.745c-.053.283-.367 1.134-.943 2.551-.576 1.418-.917 2.162-1.024 2.233l-.106.585-.532.478-.106.373.106.372-.584.824v.69l-.32.32v.531l-.212.373v.212l-.558.213v.744l.16.213.823.372c.426-.142 1.063-.532 1.914-1.17h.213l.584-.372c.195-.283.514-.673.957-1.17v-.159l.373-.213c.39-.708.974-1.745 1.754-3.11v-.212l.585-.585c.053-.585.283-1.223.69-1.914-.035-.124.02-.46.16-1.01l.426-.16v-.212l-.107-.213c.107-.248.302-.62.585-1.116h.16l.212-.585zm22.036 2.127l-.106 1.276-.665.159c-.124-.07-.638-.106-1.541-.106-.32 0-.727-.124-1.223-.372-.355-.567-.638-.975-.85-1.223l-.798-.32a3.514 3.514 0 00-1.117 1.383l-.106.744-.585.373-.585.956.054.692-.213.69-.479.213.054.745-.585.61c-.071.55-.248.993-.532 1.33l-.585.213-.106.69.106.48-.212.797-.372.531-.16.745-.691.85c-.638.142-1.108.266-1.409.372-.372-.283-.904-.425-1.595-.425-.16 0-.474.08-.943.24-.47.159-.793.22-.97.185l-.266-.531.053-.638c.301-.23.726-.62 1.276-1.17-.089-.638-.02-1.152.212-1.542h.213l.106-.478.266-.106.16-.479h.212l.372-.957c.213-.266.567-.611 1.064-1.036 0-.373.248-.869.744-1.489v-.638c.478-1.028.664-1.843.558-2.445l-.399-.745-.531-.16c-.213.036-.55.054-1.01.054l-.585.372-.585-.319-.585.107-.212-.16h-.745v-.425c.266-.372.656-.62 1.17-.745l.532.054c.354-.408.886-.691 1.594-.851h.745l.212-.16.824.107c.266 0 .71-.248 1.33-.744.513.195.956.407 1.328.638.32.46.514.832.585 1.116v.213l.426.903h.159c.284-.567.718-1.17 1.302-1.807.692-.727 1.303-1.152 1.835-1.276l.584.213.373.531c.46.195.815.479 1.063.85v.426l.69.691.745.213v.16l.399.425zm40.59-16.029l-.585 1.17-.585.425-.372.585-.798.531-.903-.584v-.745c-.674-.3-1.746-.673-3.217-1.116-1.08.106-2.09.514-3.03 1.223-.354.602-.514 1.028-.478 1.276l-.32.16c-.159.478-.23.743-.212.797h-.372l-.213 1.17-.744.956.213.16c-.373.46-.638 1.24-.798 2.339l.213.372-.213.425v.16c-.106.07-.412.615-.917 1.634-.505 1.02-.784 1.653-.837 1.9l-.372.373-.426 1.116.054.851-.426.372-.16.585h-.238l-.957 1.17c-.195 1.648-.532 2.8-1.01 3.455v.213l-.532.372v1.409c-.355.46-.833 1.205-1.436 2.232l.266.692.745.531 1.382-.372v-.16c.407-.194.797-.513 1.17-.956.46-.532.788-.869.983-1.01l.213-.585c.372-.443 1.01-1.09 1.913-1.94a5.91 5.91 0 00.373-.798l.425-.372h.957c.16.478.212.868.16 1.17l-.745.61c-.32.48-.727 1.223-1.223 2.234l-.744.265-.16.798-.584.16c-.302.3-.497.566-.585.797-.301.23-.771.549-1.409.957-.337.106-.833.354-1.488.744-.532.106-.833.16-.904.16a4.65 4.65 0 01-.598-.067 2.796 2.796 0 00-.678-.04l-.957-.532-.532-.638-.16-1.116c-.938.62-1.683 1.187-2.232 1.701h-.957l-.957.372c-1.08-.567-2.135-.762-3.163-.585l-.16-.372-1.17-.585v-.797l-.584-.744v-.213c.053-1.223.195-2.596.425-4.12l-.159-.532.425-.425v-.372l.426-.213.159-.744.797-.585c.355-.815.762-1.56 1.223-2.233a28.71 28.71 0 011.622-1.17l.372-.69h.957l.585-.372c.655-.177 1.7-.302 3.136-.372l.106.637.638.107v.212h.213l.16.373h.212v.212c-.283.195-.753.275-1.409.24l-1.515-.08c-.46.69-1.134 1.417-2.02 2.18v.584l-.213.532-.584.212.159.213v.16c-.106.407-.16.602-.16.584h-.212c.019.053-.053.39-.213 1.01l-.372.16.213.904-.16.797-.425.505a6.448 6.448 0 00-.452 2.392l.346 1.064.212.212.585.16.372-.16c.32 0 .567-.019.745-.053l.478-.266c.266.019.727-.203 1.382-.664.833-.603 1.276-.913 1.33-.93.425-.78.726-1.71.903-2.792l.372-.584c.036-.532.16-1.33.372-2.393l.638-.69-.212-.586c0-1.01.195-1.79.584-2.339v-.372h.213c.337-.797.46-1.382.372-1.754.337-.39.567-.869.691-1.436l.745-.664.212-1.117.585-.797c-.07-.567-.106-.975-.106-1.223 0-.39.106-.904.319-1.542.372-.443.77-1.098 1.196-1.967.46-.974.815-1.63 1.063-1.967.39-.248.921-.69 1.595-1.329l.797-.16.691-.664.692.054.584-.479c.302.036.75-.019 1.343-.16.593-.141 1.014-.212 1.262-.212 1.347 0 2.508.213 3.482.638a46.185 46.185 0 002.552-.372l.585.585.16.558zm5.369 16.294l-.213.213-.053.585.213.532-.213.637.107.798c-.443.957-.886 1.595-1.33 1.914-.035 0-.168.026-.398.08-.23.053-.363.08-.399.08-.035 0-.425-.054-1.17-.16l-.372-.213c-.425.053-1.377-.057-2.857-.332-1.48-.275-2.477-.518-2.99-.731l-.665.319c-.053.089-.226.558-.518 1.409-.293.85-.439 1.311-.439 1.382 0 .16.01.39.027.691.018.301.026.532.026.691l.798 1.648c.496.177.788.266.877.266.053 0 .106-.01.16-.027a.472.472 0 01.159-.026l1.594.16c.408-.107.869-.32 1.383-.639.638-.407 1.063-.655 1.276-.744l.372-.053a3.22 3.22 0 00.957-1.117l1.116-.319.213.585c-.089.443-1.01 1.542-2.765 3.296-.585.284-1.409.47-2.472.559-1.17.088-1.993.221-2.472.398l-1.196-.212-.16-.16-.956-.212c-.904-.603-1.755-1.63-2.552-3.084-.036-.425-.124-.94-.266-1.542.089-.319.213-.983.372-1.993l.213-.213-.107-.16.373-.371.212-.798c.301-.195.55-.585.744-1.17v-1.754l.426-.16.372-1.381c1.294-1.507 2.667-2.481 4.12-2.924.089 0 .222.009.399.026.177.019.31.027.398.027.514-.142.762-.213.745-.213l.638.266c.212-.036.514-.124.903-.266.266.019.656.115 1.17.293.514.177.904.274 1.17.292l.531.585.532.212.266.372.744.32.425.478c.089.195.177.505.266.93.089.426.177.736.266.93zm-3.03.638l-.213-.212c0-.638-.019-1.117-.053-1.436-.213-.425-.886-1.08-2.02-1.967-.674 0-1.542.213-2.605.638l-.266.426-.478.319-.213.478-.16.16v.425l-.318.266c-.107.212-.195.567-.266 1.063h-.213l-.053.478.16.638c1.098.567 3.065.922 5.9 1.064.142-.55.337-.886.585-1.01l.213-1.33zm25.066-18.82l-.372.214h-1.17c-.372-.107-.55-.16-.531-.16-.39 0-.887.142-1.489.425-.691.302-1.196.479-1.515.532-.266.496-.656 1.037-1.17 1.621 0 .142.01.355.027.638.019.284.026.497.026.638a4.477 4.477 0 01-1.01 1.542l-.16 2.127-.478.584v1.383c-.514.443-.85.903-1.01 1.382l.053.797c-.301.691-.407 1.196-.319 1.515-.39.514-.673.975-.85 1.383-.036.319-.169 1-.399 2.046-.213.94-.31 1.48-.292 1.622-.355.283-.638.478-.851.585l.266.584-.426.372c-.123.213-.265.638-.425 1.276l-.531.638-.16 1.595-.425.771c0 1.187-.443 2.091-1.33 2.711l-.797.213c-.425.408-1.019.921-1.78 1.542-.745.283-1.454.478-2.127.584-.39-.23-.957-.3-1.701-.212l-.426-.16-.957-1.01v-.744l.798-.585h.372l.372.372.957.426c.354-.16.731-.443 1.13-.85.398-.408.73-.674.997-.798.106-.302.248-.762.425-1.383 0-.708.124-1.71.372-3.003h.213v-.426l.372-.744v-1.01l.611-.744c.337-1.701.85-2.871 1.542-3.509.035-.407.407-1.71 1.116-3.907.036-.355.142-.869.32-1.542.371-.55.85-1.4 1.435-2.552l-.16-.744.213-.957.744-.213.213-.372v-.744l.372-.213.585-1.382c.443-.514 1.116-1.178 2.02-1.994l.638.054.478-.585h.372c.355-.372.984-.674 1.888-.904 1.045-.248 1.718-.46 2.02-.638.585.142 1.028.195 1.329.16l.585.797v.957zm66.24-11.828l-.585 2.738-.584.213-.585.744-.957.372-.425.585a3.829 3.829 0 00-1.701 1.01l-1.037.16-.744-.16c-.32.106-1.223.16-2.712.16-.283 0-.815-.169-1.595-.505-.78-.337-1.346-.506-1.7-.506a1.21 1.21 0 00-.373.054l-1.595 1.17-.16.371-.425.372v.426l-.531.585-.452.159v.213l-.957.957-.213.584-.372.372-.212.585c-.284.266-.603.656-.957 1.17h-.16l-.425 1.409-.585.584-.372 1.914c-.425.71-1.134 1.737-2.127 3.084-.07.602-.265 1.063-.584 1.382v.957c-.23.496-.497 1.347-.798 2.552-.407.407-.806 1.147-1.196 2.22-.39 1.071-.824 1.811-1.302 2.219l-.585 1.382.212.213-.451.372v.585l-.373.372c-.513 2.392-.77 3.898-.77 4.518 0 .195.009.381.026.559l-.425.957.425 1.541c.195.408.443.922.744 1.542l.373.213a6.1 6.1 0 001.036 1.17v.743l-.797 1.01-.984.16-1.754-.744h-.744c-.213-.213-.523-.745-.93-1.595-.408-.85-.825-1.489-1.25-1.914h-.16l-.425-.372-.212-.585c-.02-.833.053-2.064.212-3.695-.106-.212-.16-.797-.16-1.754 0-.177.072-.487.213-.93.142-.443.195-.789.16-1.037-.248-.425-.496-.744-.744-.957-.32-1.595-.479-2.747-.479-3.456 0-.39.053-1.072.16-2.046.088-.886.124-1.577.106-2.074l.213-.212a4.669 4.669 0 00-1.01-.745c-.071-.69-.196-1.205-.373-1.541h-.212c-.39.496-.71 1.205-.957 2.126l-.372.372v1.383l-.798 2.153-.983 1.116h-.213l-.16 1.01-1.169.957c-.089.425-.346 1.001-.77 1.728-.568.921-.896 1.48-.984 1.675l-1.064.637c-.372 1.152-1.116 2.136-2.232 2.951v.213l-.957.957v.372l-.585.797-1.755 1.17-.372 1.329c-.655.195-1.125.46-1.408.797h-.957l-.745.372-.212.372h-.957l-1.755.798c-.478-.036-1.116-.266-1.913-.691-.798-.426-1.33-.833-1.595-1.223l-.372-1.01-.798-.585-1.568-3.083.212-1.196c.585-.798 1.427-2.02 2.526-3.669v-.372l.584-.585c.692-.265 1.205-.531 1.542-.797a38.45 38.45 0 011.17-.16c.035 0 .168.027.398.08.23.053.364.08.4.08.868.673 1.381 1.329 1.54 1.967v.744c0 .213-.07.532-.212.957h-.16l-.212 1.17-1.17.585-.372-.16-.212-.213h-.16l-.584-.956-1.542-.426-.425-.585h-.373c-.053.302-.257.886-.61 1.755-.302.744-.453 1.338-.453 1.78 0 .178.036.444.107.798l.584.372c.266.567.71 1.4 1.33 2.499l1.541 1.17c1.258-.32 2.428-.904 3.509-1.755h.585c.283-.354.673-.921 1.17-1.701l.584-.425.983-1.755 1.064-.611c.496-.975 1.56-2.321 3.19-4.04.39-.302.974-.816 1.754-1.542.266-.372.709-.886 1.329-1.542.407-1.24.797-2.09 1.17-2.552h.212l.213-.584.744-.373c.266-2.232.93-4.173 1.994-5.82-.071-.958.177-1.808.744-2.553v-.372l.957-2.339-.16-1.728-.212-.212-1.702.584c-1.453-.035-3.163-.398-5.13-1.09-2.357-.832-3.97-1.32-4.838-1.461l-.372-.372h-2.153c-1.045.602-2.392.868-4.04.797-.514.124-1.294.709-2.34 1.754l-.956.372-1.382 2.154c-.09.726-.284 1.24-.585 1.541l.212.372.745-.744 1.01-.372c.62.39 1.382.762 2.286 1.116l.585 1.01v.745h-.373l.213 2.339c1.116.319 2.215.762 3.296 1.329l.532-.16.585-.584v-.213l.584-.372-.584-1.382v-.585c.283-.07.824-.337 1.621-.797.638-.355 1.205-.532 1.701-.532v-.213l.798.213c.23.425.549.868.957 1.329v.585c-.78.69-1.223 1.4-1.33 2.126-1.24.39-2.144.922-2.71 1.595l-1.037.16-.745-.16-.797.16-1.33-.585h-.956l-.798-.585c-1.116-.019-2.268-.673-3.455-1.967-1.418-1.524-2.33-2.375-2.738-2.552l-.425-1.063.212-.797.771-.745.425-2.206 1.542-1.116h.16l.425-.798c.354-.23.868-.496 1.542-.797l.16-.372 1.169-.585h.585l.956-.372c.426.018 1.772-.054 4.04-.213 2.269-.16 3.59-.283 3.961-.372.426.62 1.347 1.205 2.765 1.754 1.347.514 2.516.771 3.509.771.177 0 .336-.01.478-.026l.611-.373h1.17l1.967-.744.585-.797.744.212.797-.584h1.542l.213.584h.16l-.373 2.286.213 1.01 1.116.373c.248.46.32 1.107.213 1.94l-.957.797-.213 1.17.426 1.542.531.372v.585l.213.212v1.33h.212c-.141.425-.212.744-.212.956 0-.567.124 1.444.372 6.034l.213.213-.213.372.213.797.957-.957.584-1.382.612-.585.372-1.568h.212c.284-.567.479-1.01.585-1.329h.213v-1.01l.585-.957v-.744l.744-1.755.372-.212c.496-1.382.957-2.286 1.382-2.711l.372-1.33.426-.425c.141-.673.722-1.643 1.74-2.91 1.02-1.268 1.591-2.167 1.715-2.699l.957-.584.213-1.01.212-.16.373-.797.824-.745v-.212l-1.037-.957h-2.499c-.106 0-.319.035-.638.106-.974.089-2.445.248-4.412.479.141.23.212.744.212 1.541l-.584 1.914-.372.426-1.17-.213-.425-1.382-.372-.372-1.781-.373-.957-.957v-.584l.212-.426h.372l.585-.372a55.66 55.66 0 011.33-.16c.052 0 1.355.054 3.907.16l.425-.372a17.012 17.012 0 016.99-.983l.586.398.16.585c.46.213.991.284 1.594.213.602-.78 1.311-1.374 2.126-1.781l.373-.798c.638-.425 1.612-1.01 2.924-1.754.46-.07 1.098-.319 1.913-.744 1.312-.053 2.685-.32 4.12-.798.957.71 1.595 1.365 1.914 1.967l.213.957zm-4.465.957l-.984-.585.16-.584c-1.205 0-2.5.46-3.881 1.382l-.372.585-.745.16-1.17 1.408.745.585h1.01l.532.372c2.038-.23 3.012-.355 2.924-.372l.797-.426c.284-.513.611-1.355.984-2.525zm1.116 31.552l-.24 1.436h-.159v.372l-.372.425v.16l-.585.425-.584.983-.585.372.212.32c-.212.425-.425.744-.637.956l-.107.532c-.301.177-.69.567-1.17 1.17-.531.637-.939 1.063-1.222 1.275-.425-.053-.868.02-1.33.213-.46-.142-1.169-.213-2.126-.213-.496.107-.815.195-.957.266l-1.01-.266c-.62-.549-1.16-.886-1.621-1.01-.284-.248-.656-.673-1.117-1.276-.07-.283-.141-.78-.212-1.488-.284-.337-.603-.886-.957-1.648-.709-.585-1.063-1.55-1.063-2.898l.531-1.382c.355-.354.85-.69 1.489-1.01.177-.248.319-.496.425-.744l.957-.585.957-1.329.983-.372h.585l.798-.798.957-.212.372.212c.16.213.301.674.425 1.383h.372l.213-.213.957-.372.372-.425h.957l.797.425.372 1.329.957.372h.213c.213.32.532.585.957.798.354.584.753 1.524 1.196 2.817zm-1.568-.478l-.372-1.01v-.16l-.426-.372-.16-.425-.797-.372-.584.372a2.408 2.408 0 01-.585.957c.035.124-.019.39-.16.797l-.425.213v.16l-.585.424-.957-.584-.16-.213v-1.542l-.424-.957v-.212l-.373-.213v-.16l-.372-.212-.797.213-.266.478-.904.479h-.16c-.088.319-.424.708-1.01 1.17v.371l.213.213v.372l.107.266-.479 1.116v.745c.107.106.23.3.372.584 0 .071-.009.169-.026.293a2.022 2.022 0 00-.027.292c0 .053.01.146.027.28.019.132.026.225.026.278.16.248.284.656.373 1.223l.797.585.372.744.957.798 1.382.212c.39-.266.993-.585 1.808-.957l-.053-.425c.319-.23.78-.567 1.382-1.01l.16-.532c.336-.283.655-.682.956-1.196l.798-.372c.319-.78.443-1.684.372-2.711zm19.643-2.286l-.106 1.276-.665.159c-.124-.07-.638-.106-1.541-.106-.32 0-.727-.124-1.223-.372-.354-.567-.638-.975-.85-1.223l-.798-.32a3.514 3.514 0 00-1.116 1.383l-.107.744-.585.373-.584.956.053.692-.213.69-.478.213.053.745-.585.61c-.07.55-.248.993-.532 1.33l-.584.213-.107.69.107.48-.213.797-.372.531-.16.745-.69.85c-.639.142-1.108.266-1.41.372-.372-.283-.903-.425-1.594-.425-.16 0-.474.08-.944.24-.47.159-.793.22-.97.185l-.266-.531.053-.638c.301-.23.727-.62 1.276-1.17-.089-.638-.019-1.152.213-1.542h.212l.107-.478.265-.106.16-.479h.213l.372-.957c.212-.266.567-.611 1.063-1.036 0-.373.248-.869.744-1.489v-.638c.479-1.028.665-1.843.558-2.445l-.398-.745-.532-.16c-.213.036-.55.054-1.01.054l-.585.372-.585-.319-.584.107-.213-.16h-.744v-.425c.265-.372.655-.62 1.17-.745l.53.054c.355-.408.887-.691 1.596-.851h.744l.213-.16.824.107c.265 0 .708-.248 1.329-.744.514.195.957.407 1.329.638.319.46.514.832.585 1.116v.213l.425.903h.16c.283-.567.717-1.17 1.302-1.807.69-.727 1.302-1.152 1.834-1.276l.585.213.372.531c.46.195.815.479 1.063.85v.426l.691.691.744.213v.16l.4.425zm15.603-4.253l-.159.957-.585.16c-.177-.036-.629-.143-1.355-.32-.532-.142-.984-.213-1.356-.213-.036 0-.372.054-1.01.16l-.16.213h-1.116l-.585.531c-.088.46-.301.993-.638 1.595.053.514-.019 1.099-.212 1.754l-.373.373.213 1.01-.372.16-.213.371.213.426-.425.478-.16.797-.212.054-.373.797v.16l-.797.425.213.611-.426.372-.16.585-.61.798v.372l.159.16h.452v.424l-.213.16c.142.337.248.744.32 1.223l1.062-.213.426.266.319-.266.425.16c.372-.142.94-.337 1.701-.585l.585-.585.425-1.117v-1.01c.302-.762.62-1.32.957-1.674l-.425-.266.425-.372v-.213l.585-.372h.585c.407.106.602.16.585.16l.531 1.17-.372.61v.585c-.425.585-.868.975-1.329 1.17v.212l-.585.745c-.07.602-.301 1.098-.69 1.488l-.639.426-.425.584c-.78.426-1.418.62-1.914.585l-.213.425h-.372l-.212-.212c-.373.089-.638.212-.798.372l-.957.213v-.213c-.833-.142-1.48-.195-1.94-.16-.142-.23-.452-.487-.93-.77-.532-.32-.878-.576-1.037-.771v-1.01l-.16-.16v-.797c.408-1.081.603-1.79.585-2.127l.32-.319c.212-.372.283-.86.212-1.462l.69-.903c-.018-.16.107-.833.373-2.02l.478-.532-.212-.425c.195-.692.478-1.72.85-3.084h.373c.159-.213.292-.673.398-1.382l-.239-.213-.957.213c-.372.301-.691.496-.957.585l-.585-.16c-.726.355-1.435.479-2.126.372l.213-.797a8.149 8.149 0 011.541-.957h.372l.213-.372h.585l.744-.372.479.106a9.434 9.434 0 001.834-.505l.265-.797h.373l.797-.957.16-.585c.354-.213.62-.355.797-.425l.16-.585.584.212.213-.212v-.372l.797-.373v-.372l.372-.584h.373l.212.159.372-.16v1.33l-.372.212v.16l-.212.212v.585l-.798.957a3.481 3.481 0 01-.691 1.834c.691.053 1.382.16 2.073.32.32-.107.815-.16 1.489-.16.726 0 1.329.053 1.807.16l.373.797zm14.94 4.518l-.214.213-.053.585.213.532-.213.637.107.798c-.443.957-.886 1.595-1.33 1.914-.035 0-.168.026-.398.08-.23.053-.363.08-.399.08-.035 0-.425-.054-1.17-.16l-.372-.213c-.425.053-1.377-.057-2.857-.332-1.48-.275-2.477-.518-2.99-.731l-.665.319c-.053.089-.226.558-.518 1.409-.293.85-.439 1.311-.439 1.382 0 .16.01.39.027.691.018.301.026.532.026.691l.798 1.648c.496.177.788.266.877.266.053 0 .106-.01.16-.027a.473.473 0 01.159-.026l1.595.16c.407-.107.868-.32 1.382-.639.638-.407 1.063-.655 1.276-.744l.372-.053a3.22 3.22 0 00.957-1.117l1.116-.319.213.585c-.089.443-1.01 1.542-2.765 3.296-.584.284-1.408.47-2.472.559-1.17.088-1.993.221-2.472.398l-1.196-.212-.16-.16-.956-.212c-.904-.603-1.755-1.63-2.552-3.084-.036-.425-.124-.94-.266-1.542.089-.319.213-.983.372-1.993l.213-.213-.106-.16.372-.371.212-.798c.302-.195.55-.585.745-1.17v-1.754l.425-.16.372-1.381c1.294-1.507 2.667-2.481 4.12-2.924.089 0 .222.009.399.026.177.019.31.027.399.027.514-.142.762-.213.744-.213l.638.266c.212-.036.514-.124.904-.266.265.019.655.115 1.17.293.513.177.903.274 1.169.292l.531.585.532.212.266.372.744.32.425.478c.09.195.178.505.266.93.089.426.177.736.266.93zm-3.031.638l-.213-.212c0-.638-.019-1.117-.053-1.436-.213-.425-.886-1.08-2.02-1.967-.674 0-1.542.213-2.605.638l-.266.426-.478.319-.213.478-.16.16v.425l-.318.266c-.107.212-.195.567-.266 1.063h-.213l-.053.478.16.638c1.098.567 3.065.922 5.9 1.064.142-.55.337-.886.585-1.01l.213-1.33z"
            style={{
              lineHeight: "125%",
              WebkitTextAlign: "start",
              textAlign: "start",
            }}
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="1"
            fontFamily="Blackadder ITC"
            fontSize="23.146"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="normal"
            textAnchor="start"
            writingMode="lr-tb"
          ></path>
          <path
            id="text2247"
            d="M-516.71 136.874l-.594.825-.319 1.282-1.257 1.146c-1.15.276-2.848.501-5.095.677l-.381.359a176.9 176.9 0 01-2.732-.485c-2.422-.602-4.798-1.82-7.13-3.653l-.915.031c-.36.321-.871.637-1.532.948-.829.377-1.36.645-1.593.803-.676.89-1.86 2.174-3.55 3.849.504 1.357.592 2.568.263 3.63l-1.074 1.452-.427-.107-.518 1.038-.09 1.404-.64.748-.333 1.343-.762.978.183.305c-1.431 2.28-2.312 3.649-2.642 4.107-1.148 1.573-2.31 2.688-3.49 3.345l-.41.87.199 1.023a56.556 56.556 0 01-.913 1.847l-.245-.06c-.62.58-1.208 1.384-1.766 2.412-1.543 2.814-2.459 4.801-2.747 5.961a9.764 9.764 0 00-.243 1.366l.52 1.555 1.177 1.006.154 1.205a6.454 6.454 0 001.558 1.554l2.227-.612.7-.734.09-1.403.473-.855.96-.215c1.149-1.054 2.007-1.64 2.577-1.758l.525-1.068 1.158-.879.489.121.642 1.068.131 1.296-.396.81a22.977 22.977 0 01-3.476 1.857c-.812 1.181-1.386 2.097-1.72 2.749a5.364 5.364 0 00-1.495 1.054l-2.059.72-1.282-.32c.163.041-.819-.44-2.946-1.445l-.688-1.144c-.677-.406-1.328-.654-1.954-.745l-.32-.534-1.818-1.424-.597-1.51c.304-.875.446-1.704.424-2.487a6.154 6.154 0 01-.077-.732l.57-2.29c.05-.203.238-.567.563-1.091.284-.448.441-.863.472-1.244l.304-.184c.202-1.332.521-2.268.958-2.808.061-.071.762-.718 2.103-1.94 2.012-1.833 3.746-3.984 5.203-6.452-.009.04.107-.082.35-.367l.228-.916-.382-.549-.855-.212-1.082.444c-.422.565-1.24 1.29-2.454 2.177-1.215.886-2.035 1.665-2.461 2.337-.121.748-.492 1.455-1.112 2.122l-1.295.78-.335 1.343-1.95 2.107-1.022.46-.472.854-.183-.045-.106.427-2.272 1.315-.662.84-1.556.52-1.54 1.497-1.967.224-.7 1.77c-.498.352-1.098.592-1.8.72l-.456.794-3.174-.53.014-1.877.655-.81.244.061.38-1.526.549-.382-.109-1.388c-.392-.508-.79-1.169-1.192-1.982l.174-.702-.183-.046c.578-1.8.877-2.742.897-2.823l.318-2.06c.172-.52.507-1.257 1.004-2.214.381-.402.884-1.12 1.508-2.153.101-.58.375-1.42.821-2.518-.087-.26-.127-1.031-.121-2.316.007-1.284.042-2.058.108-2.323.67-1.389 1.314-2.33 1.934-2.824.162-.824.273-1.964.332-3.418-.264.193-.554.661-.868 1.404l-.915.032-.929 1.908-1.128.627-.06.244-.885.688-.121.488-.29.122c-.203.382-.645.856-1.326 1.42-.59.46-1.094 1.274-1.515 2.444l-1.615 1.672-.793.322c-.792 1.1-2.072 2.596-3.84 4.49l-1.418.49c-.559.595-1.397 1.446-2.514 2.55l-.046.184c-.624 1.206-1.612 2.31-2.963 3.314-.203.814-.71 1.639-1.523 2.474l-1.999.216-.823.702-1.434-.097-.595.306-2.022-.341c-.85-.147-1.518-.28-2.006-.402-.875-.218-1.921-.661-3.137-1.331-1.593-.893-2.593-1.434-3-1.622-.097-.218-.454-.696-1.07-1.432l-.628-2.296c-.8-.782-1.623-2.25-2.47-4.406l.18-2.548.868-1.664 1.738-1.254 1.434-.032 1.098-.505.885.22.642 1.327.184.046.077.732.32.534-.072 2.38-.351.366-.778.26c-.778-.344-1.43-.895-1.955-1.652l-1.282-.579-.655.55c-.141 1.175.127 2.355.805 3.539l.794.716c.51.905.704 1.731.583 2.479l.932.945 1.099.273 1.359 1.31c1.638.71 2.417 1.055 2.336 1.035-.469-.116 1.113.126 4.745.727a49.9 49.9 0 002.334-.651c1.9-1.213 3.264-2.527 4.092-3.942l.334-1.343c.335-.651.832-1.089 1.493-1.314.538-.86 1.087-1.501 1.646-1.924l1.205-.154c.223-.204.538-.514.945-.932.452-.6.927-1.185 1.424-1.752.498-.568 1.136-.982 1.914-1.242l.868-1.405 1.09-.733a7.474 7.474 0 011.34-2.52l.457.114c.767-.738 1.275-1.476 1.523-2.214l1.433-1.07c.009-.645 1.002-2.376 2.977-5.19l.119-2.564-.582-1.311-.244-.06-.077-.733c-1.497-1.107-3.557-1.987-6.182-2.64-.733-.182-1.844-.404-3.335-.667-1.49-.263-2.602-.485-3.334-.667-.285-.071-.7-.228-1.244-.472-.6-.279-1.02-.459-1.26-.54l-2.197-.547c-.819.078-1.704.16-2.655.248-.112.016-.813.316-2.104.902l-.167.672c-.01.732.225 1.352.704 1.86l.993.7.183.306-.046.183.672.167.725.732 2.93.728c.204.05.5.038.886-.039.742-.031 1.853-.241 3.332-.63a18.054 18.054 0 014.165-.584l.626.35.337 1.25-.67 1.13c-.615.301-1.385.79-2.31 1.468-1.25-.095-2.385.033-3.401.385l-1.527-.639c-.529.042-.915.032-1.16-.029-.264-.066-.63-.2-1.098-.403-.469-.202-.825-.334-1.069-.395-.244-.06-.63-.07-1.16-.03l-1.893-.989-.459-1.021-.427-.107c-1.523-1.956-2.28-3.343-2.27-4.162l-.245-.06-.658-2.045.228-.915c2.48-1.544 5.48-1.878 9-1.003.143.036.52.232 1.134.59.613.358 1.008.57 1.187.636 2.849.968 6.837 1.96 11.965 2.976.702.65 1.918 1.19 3.648 1.62l.428.366 2.441.607c.946-.067 1.979-.134 3.097-.202l.534-.32.488.12c.729.981 1.025 2.049.89 3.204-1 1.674-1.528 2.753-1.584 3.236l-.183-.046c-.772 1.278-1.215 2.367-1.331 3.267l.382.549-.762.977.017.977-.29.122c.031.483-.512 1.45-1.629 2.9l-.244-.06-.96.993-.273 1.099.2 1.022.198.244c.785 1.88.725 4.642-.18 8.284.024-.101-.336.738-1.081 2.519l-.839.505c-.567 1.587-.816 2.238-.745 1.953-.106.428-.21 1.277-.31 2.549l.475.96 1.28-.718 1.74-.086c.858-.5 1.796-1.142 2.812-1.926.183-.3.454-.74.815-1.32.36-.581.632-1.021.815-1.322l1.128-.886c1.09-1.781 1.928-3.237 2.512-4.366.986-.317 1.964-.992 2.934-2.025.884-.947 1.54-1.454 1.967-1.52.665-.592 1.173-1.33 1.523-2.215l2.394-1.025.625-.558.854.213.823-1.222-.184-.304.38-1.527.838-.504c-.005-.153.168-.499.518-1.038l.488-.138 1.074-1.45.473-.078.671.167 1.144-.688.106-.427.244-.199.624-1.465c.32-.072.64-.403.96-.993l.473-.077c1.21-.52 2.774-2.032 4.693-4.537.163-.046.554-.316 1.174-.81l-.977-.761-3.602-.637c-.951-.518-2.166-1.716-3.643-3.596l-1.709-.425-1.71-1.333c.473.096-.769-.3-3.724-1.186l-3.968-.987-2.487.354c-.009.04-.076.176-.198.404-.122.23-.188.364-.198.405-.025.102-.113.717-.264 1.846l.504.839c.448.025 1.94-.241 4.477-.799.524.412 1.102.955 1.734 1.63l-.045.962-1.844 1.68c-.198-.07-.51-.121-.935-.151-.424-.03-.718-.065-.88-.106-.449-.111-1.077-.365-1.886-.76-.952-.432-1.595-.71-1.931-.837l-1.33-1.563.107-.427-.504-.839.35-.366c-.292-1.607-.334-2.827-.126-3.662.04-.162.093-.29.16-.381l.488.121.29-.382.304-.183c.31.142.842.199 1.595.17.752-.03 1.304.033 1.655.185l1.938-.232 2.442.608c.203.05.567.238 1.091.563.448.284.863.441 1.244.471l.595-.305c1.47.43 3.607 1.178 6.41 2.242l1.101 1.83 1.344.853-.076.824c.606.345 1.507.807 2.703 1.385.839.187 2.004.628 3.495 1.323l1.403-.818 1.16.03c.223-.29.538-.601.944-.932l.106-.428c1.281-.459 2.16-.867 2.638-1.223l.228-.916.244.06.839-.504 2.548.18.778-.26 3.54.88c.102.026.448.242 1.039.648.59.406.936.665 1.038.777l.672.167.29-.382.808.655 1.453 2.76-.014 1.617zm-3.677.188l-.336-.473.15-1.907-2-.692.168-.671-.321-.534-2.87-.973-2.181.43-.411.61c-.778.001-1.678.404-2.7 1.209l-.06.244-1.266.398-.152.61.306.596 1.367 1.28c1.46.211 2.762.708 3.908 1.49 2.014.415 3.929.318 5.744-.29l-.032-.914-.366-.35 1.052-.063zm4.276 36.133l-.376.34-.497.102-.078.24-1.793-.388-.395.4-.196.598-.257.18-.215.659-.24-.079-.077.24-.496.301-.295.499-.596.203.043.477c-.284.26-.768.896-1.451 1.908l-1.249.783.24.078-.079.24c-.801.223-1.466.502-1.994.837l-.237.32.02.337-.883 1.895-.18-.058-.137.418-.633.521.042.477.6.395c.707-.409 1.677-.643 2.91-.704l.144.775-.94.95a7.98 7.98 0 00-2.916 1.43c-1.306-.052-2.15-.173-2.528-.363l.058-.18-.658-.214a5.367 5.367 0 00-.944-1.566c.19-.446.339-1.103.446-1.972l-.322-.635-.18-.059c-1.17.478-1.877.887-2.12 1.226l-1.155-.112-.633.52-1.413.068-.669-.483-.756-.115c-.588-.7-1.141-1.167-1.66-1.403l-.622-.931c-.155-1.55-.135-2.625.06-3.223.105-.319.315-.692.63-1.118l.18.059c.191-.247.497-.71.917-1.388l-.023-.537.078-.24c.065-.199.284-.447.657-.744.373-.297.602-.542.687-.735 1.47-.446 2.59-1.448 3.364-3.004.51-.142.937-.334 1.28-.574.796-.005 1.38-.035 1.75-.09l.24.078a7.037 7.037 0 011.924-.827l.396-.4 2.188-.012 1.656.806.52.634.838.273 1.17-.544.837.274 1 .79.945.044.4.396.043.477 1.613.328.814-.263.34.376.736-.024c.12.238.163.582.125 1.034zm-7.08-1.322l-1.159-.908c-.869-.041-1.612-.196-2.23-.464l-1.77.15-1.111.563c-.164.3-.83 1.14-2 2.523-1.168 1.383-1.826 2.094-1.971 2.135l-.335.619-.774.342-.256.38-.017.457-.96.712-.254.778-.476.241-.196.598-.376.34-.078.24-.706.033-.274.838.102.297.79.722c.53-.003 1.39-.207 2.582-.612l.24.078.794-.204c.323-.247.825-.568 1.506-.963l.059-.18.496-.102c.7-.654 1.738-1.605 3.117-2.853l.078-.24.873-.442c.274-.638.768-1.27 1.48-1.898.005-.153.19-.512.551-1.078l.537-.023.078-.24-.041-.278c.21-.24.566-.587 1.068-1.04l.18.058.453-.58zm24.233 11.442l-.644 1.371-.803-.097c-.108-.13-.663-.38-1.666-.753-.354-.131-.755-.437-1.203-.916-.16-.775-.306-1.344-.44-1.707l-.753-.682a4.158 4.158 0 00-1.808 1.073l-.424.782-.802.172-1.043.82-.226.789-.52.679-.619.039-.247.847-.901.438c-.305.58-.684.998-1.137 1.255l-.736-.005-.403.723-.08.574-.563.797-.632.437-.484.76-1.117.658c-.766-.105-1.338-.161-1.716-.167-.296-.468-.827-.844-1.594-1.129-.177-.065-.558-.107-1.145-.123-.587-.017-.97-.081-1.153-.193l-.076-.7.322-.685c.429-.132 1.061-.39 1.897-.772.164-.744.455-1.285.87-1.623l.237.088.315-.487.338-.01.374-.464.236.087.807-.908c.346-.207.881-.445 1.607-.712.153-.413.633-.861 1.439-1.345l.262-.707c.955-.943 1.497-1.77 1.627-2.483l-.136-.99-.524-.396c-.25-.048-.631-.167-1.142-.357l-.802.172-.517-.595-.693-.123-.17-.264-.826-.307.175-.472c.449-.303.983-.417 1.604-.343l.568.278c.561-.306 1.268-.402 2.12-.287l.825.307.302-.09.87.458c.295.11.889.016 1.781-.278.49.427.894.846 1.212 1.255.163.642.227 1.135.188 1.479l-.087.236.1 1.178.176.065c.548-.512 1.278-1.002 2.19-1.468 1.066-.522 1.919-.742 2.56-.66l.56.477.195.743c.43.406.707.866.829 1.381l-.176.472.482 1.051.738.543-.065.177.267.636zm71.937 13.558l-1.255.905-.846.125-.711.409-1.128.12-.626-1.11.408-.78c-.54-.686-1.46-1.664-2.759-2.936-1.191-.482-2.474-.61-3.847-.382-.703.437-1.103.796-1.202 1.075l-.422-.007c-.43.414-.65.654-.66.72l-.39-.205-.866 1.11-1.305.594.135.284c-.643.279-1.35.95-2.12 2.014l.02.507-.457.33-.088.166c-.15.017-.77.42-1.858 1.21-1.09.791-1.73 1.302-1.921 1.533l-.595.186-1.058.937-.412.92-.65.157-.488.526-.25-.131-1.646.7c-1.109 1.62-2.094 2.644-2.955 3.068l-.117.223-.762.098-.773 1.477c-.624.289-1.534.806-2.73 1.553l-.1.87.488.966 1.653.369.087-.167c.535.018 1.118-.101 1.752-.362.774-.304 1.303-.477 1.585-.519l.544-.496c.633-.26 1.657-.588 3.071-.983.209-.128.485-.338.828-.632l.65-.157 1.003.526c-.095.589-.253 1.027-.474 1.313l-1.116.233c-.597.326-1.433.882-2.508 1.669l-.926-.13-.605.749-.7-.154c-.481.15-.832.322-1.051.515-.442.076-1.11.152-2.002.23-.411-.074-1.068-.086-1.969-.038-.616-.18-.96-.29-1.035-.328a5.73 5.73 0 01-.59-.398c-.283-.207-.512-.345-.69-.414l-.71-1.083-.208-.96.446-1.258c-1.325.134-2.416.32-3.274.557l-1.003-.525-1.208-.135c-.822-1.188-1.82-1.971-2.995-2.35l.038-.477-.905-1.255.437-.836-.204-1.101.117-.223c.726-1.253 1.629-2.615 2.707-4.086l.125-.644.679-.213.204-.39.563.009.575-.693 1.157-.175a15.873 15.873 0 012.508-1.67c.527-.102 1.307-.214 2.341-.335l.77-.52 1.003.525.817-.07c.785.175 1.949.619 3.492 1.332l-.238.727.61.462-.117.223.223.117-.037.477.223.117-.117.223c-.404.049-.94-.125-1.608-.523a351.54 351.54 0 01-1.544-.915c-.862.472-1.967.864-3.314 1.176l-.321.613-.515.44-.73-.097.05.31-.087.167c-.335.37-.498.544-.488.526l-.223-.117c-.012.065-.27.38-.777.942l-.478-.037-.273 1.064-.605.748-.723.296a7.63 7.63 0 00-1.787 2.26l-.221 1.304.106.34.525.488.478.037c.334.175.604.293.81.353l.647-.016c.269.164.873.185 1.814.062 1.203-.174 1.838-.256 1.903-.246.874-.584 1.7-1.394 2.48-2.43l.71-.408c.33-.538.898-1.306 1.704-2.304l1.048-.374.098-.73c.555-1.059 1.187-1.769 1.897-2.13l.205-.39.223.116c.79-.651 1.241-1.196 1.353-1.635.567-.224 1.07-.599 1.512-1.125l1.145-.288.836-1.054 1.05-.515c.237-.633.424-1.08.56-1.34.214-.409.608-.889 1.18-1.44.634-.261 1.412-.73 2.334-1.406 1.018-.769 1.75-1.262 2.195-1.479.545-.046 1.345-.218 2.401-.517l.924.27 1.089-.317.695.435.876-.18c.296.202.794.392 1.494.57.7.176 1.18.333 1.44.47 1.412.739 2.513 1.599 3.3 2.58 1.267.473 2.227.81 2.88 1.01l.292.934-.14.673zm-3.21 21.653l-.346.083-.416.557-.115.667-.609.512-.386.87c-1.04.69-1.881 1.06-2.525 1.108a4.235 4.235 0 00-.452-.167 4.044 4.044 0 01-.451-.166 42.986 42.986 0 01-1.08-.885l-.245-.445c-.461-.21-1.353-.91-2.676-2.103-1.322-1.193-2.176-2.056-2.563-2.588l-.868-.09c-.108.056-.573.423-1.394 1.1-.822.677-1.254 1.05-1.298 1.122-.099.161-.233.4-.401.714-.169.315-.302.552-.401.713l-.216 2.156c.39.486.63.756.72.81a.595.595 0 00.177.073.57.57 0 01.178.072l1.51 1.148c.476.145 1.073.216 1.788.212.896-.016 1.478-.003 1.748.04l.408.176a3.809 3.809 0 001.656-.534l1.323.37-.147.72c-.364.393-1.973.93-4.828 1.614-.766-.076-1.712-.399-2.839-.967-1.234-.635-2.147-1.01-2.74-1.128l-1.074-.955-.062-.26-.834-.806c-.538-1.167-.76-2.73-.665-4.69.228-.45.456-1.023.686-1.719.287-.267.824-.86 1.61-1.78l.346-.083-.01-.227.606-.144.708-.673c.425-.009.916-.25 1.475-.719l1.086-1.77.527.103 1.231-1.163c2.237-.719 4.225-.852 5.965-.399.09.055.218.146.386.274.167.127.296.218.385.273.606.175.9.257.883.246l.478.663c.237.096.595.193 1.076.292.257.182.59.522.999 1.018.408.497.741.837.998 1.02l.175.918.404.544.038.54.553.782.133.745c-.032.252-.134.62-.308 1.103-.174.484-.277.852-.308 1.103zm-3.451-1.232l-.083-.346c.395-.644.673-1.137.835-1.48.049-.561-.225-1.64-.82-3.235-.68-.417-1.686-.74-3.022-.969l-.531.264-.68.026-.51.35-.26.063-.264.429-.486.07c-.239.15-.547.452-.926.908l-.215-.131-.35.45-.233.741c.757 1.252 2.521 2.827 5.293 4.725.483-.466.888-.685 1.215-.657l1.037-1.208zm37.779-1.079l-.506-.045-1.135-.792c-.29-.355-.425-.526-.408-.514-.378-.264-.956-.462-1.733-.595-.874-.175-1.484-.345-1.83-.51-.594.302-1.338.563-2.233.783-.096.138-.23.35-.406.637-.174.287-.31.5-.406.637a5.3 5.3 0 01-2.023.813l-1.594 1.956-.86.244-.936 1.342c-.799.082-1.437.301-1.916.658l-.488.81c-.76.467-1.205.885-1.335 1.255-.726.235-1.313.49-1.761.766-.25.285-.841.858-1.772 1.716-.842.768-1.303 1.227-1.381 1.376-.536.036-.943.033-1.222-.007l-.138.748-.664.073c-.265.123-.69.44-1.277.95l-.947.26-1.235 1.44-.934.46c-.804 1.153-1.845 1.73-3.125 1.733l-.918-.333c-.689.108-1.613.205-2.772.291a12.637 12.637 0 01-2.46-.872c-.222-.487-.725-.94-1.507-1.357l-.305-.443-.245-1.628.503-.722 1.17-.028.361.251.11.613.64 1.06c.453.086 1.01.066 1.673-.06s1.165-.16 1.507-.1c.307-.22.757-.572 1.348-1.054.48-.688 1.278-1.576 2.394-2.663l.207.144.288-.413.865-.47.683-.981 1.097-.309c1.479-1.423 2.769-2.21 3.872-2.362.31-.372 1.552-1.384 3.728-3.037.274-.32.725-.747 1.353-1.28.733-.282 1.773-.784 3.12-1.506l.349-.83.854-.786.866.298.458-.218.504-.722.505.045 1.503-.945c.778-.2 1.881-.389 3.31-.568l.584.483.86-.244.361.252c.596-.121 1.41.012 2.443.4 1.183.467 1.98.716 2.393.748.472.534.866.885 1.182 1.054l.028 1.17-.648.929zm54.17 49.58l-2.007.969c-1.286-.108-2.63-.53-4.034-1.268l-.336-1.308a11.716 11.716 0 00-.51-.515c-.226-.22-.396-.391-.508-.516-.676-.745-1.468-2.15-2.375-4.214l-.187.169.03.313-.422 1.315.169.187-.223.456c.136 1.15-.103 2.526-.716 4.129-.566 1.53-1.257 2.751-2.074 3.66l-.15 1.24-.615.727-.031.622a8.279 8.279 0 01-1.099 1.504c-.331.697-.695 1.903-1.092 3.62-.45.409-.965 1.066-1.545 1.973-.579.907-1.064 1.55-1.453 1.932-2.07 1.338-3.065 1.927-2.983 1.768l.17.186-1.522 1.039-1.29-.02-.537.486-.168-.186-.995.307-.96-.404c-1.671.467-2.965.507-3.88.12l-.496.11a5.133 5.133 0 01-2.09-.95c-.904-.653-1.464-1.037-1.68-1.152-.58-.296-2.029-.865-4.348-1.707-1.363-1.255-1.932-1.758-1.707-1.51-.858-.947-1.729-2.408-2.611-4.382-.882-1.973-1.38-3.616-1.493-4.928l.186-.169c-.317-.787-.703-1.994-1.157-3.62.282-1.5 1.021-2.792 2.218-3.876l2.338-1.354c2.874-.482 4.751-.69 5.632-.624.88.066 2.782.542 5.707 1.43l.64-.325 1.146.234c.227.22.841.71 1.843 1.472.814.649 1.383 1.152 1.706 1.51.226.248.504.618.836 1.11l.37 1.532-.187.169c-.152.675-.365 1.69-.64 3.041l-.899 1.07-.948.264-.513.465-.809.138-1.273-.375-1.69.852c-1.885-.301-3.382-.798-4.49-1.491-.894-.55-2.023-1.577-3.389-3.085-.45-1.091-.228-2.438.668-4.042l.186-.169 1.757-.403c.867.177 1.51.542 1.927 1.098l.345 1.13-1.094 1.416c-.574.209-.973.456-1.194.742.413.644.662 1.013.746 1.106.057.062.427.377 1.112.946.074-.012.597.222 1.568.7l.653-.59-.7-1.149.344-.65c.618-.504 1.572-1.17 2.86-1.997l1.286.108.64-.324.572-.774a8.195 8.195 0 00-1.55-1.991l-1.272-.375-.496.109-.82-.53c-.436.112-1 .113-1.692.005-.944-.136-1.512-.201-1.705-.196l-.91-.535c-.381-.078-1.142-.012-2.28.2l-.838-.176c-.648.502-1.782.907-3.4 1.213l-1.295 1.428-.923 2.448c.478.84.761 1.715.85 2.625.639.893 1.456 2.232 2.451 4.018l.9.713c.374.85.941 1.694 1.701 2.533.028.031.172.127.431.289l2.333 1.451c.7.272 1.47.31 2.31.114l.327-.295 1.146.234c1.19-.342 2.013-.48 2.47-.412.535-.315 1.362-.527 2.481-.635.297-.297.773-.615 1.428-.953.929-.474 1.431-.731 1.508-.772.757-.913 1.074-1.313.95-1.2a5.04 5.04 0 01.646-.458 5.06 5.06 0 00.646-.458c.124-.113.311-.296.562-.551.25-.255.437-.439.561-.551.362-1.007 1.424-3.285 3.188-6.835l-.138-.808.373-.338c.029-.28.092-.649.188-1.104.231-.464.547-1.146.948-2.047.066-.145.197-.688.392-1.628a3.05 3.05 0 01.1-.218c.05-.101.083-.174.1-.218l.036-1.646.76-.942c.48-1 .644-2.084.494-3.249-1.975-.587-4.047-1.47-6.215-2.645-2.414-1.322-4.212-2.636-5.395-3.941-.394-.435-.814-1.258-1.258-2.467-.405-1.134-.841-1.912-1.31-2.336l.063-.821a61.634 61.634 0 01-1.019-1.921c-.325-.64-.475-1.352-.45-2.138.962-.56 1.639-.891 2.03-.99.632-.177 1.41-.146 2.333.093.67-.324 1.328-.284 1.976.12l.14-.127c.846.309 1.973 1.24 3.38 2.794 1.267 1.4 2.146 2.556 2.635 3.47l.012.67-.404.96-.513.464-1.242-.997-1.642-.125-1.069-.9-.125-1.074 1.182-.476-.452-.78c-.722-.11-1.667-.81-2.835-2.1l-1.413-.248-.862 1.205c.148.913.491 2.088 1.029 3.524.63 1.665 1.201 2.717 1.714 3.158.968.85 2.468 2.037 4.5 3.563 2.019.916 4.186 1.966 6.503 3.15.41-.203 1.052-.268 1.924-.195.873.073 1.498.037 1.876-.108.712.317 1.276.627 1.691.93l.542-.151.731.526.978.048c.586.46 1.347.83 2.283 1.115.223.278.592.63 1.105 1.056.514.427.869.748 1.066.966-.225-.249.27.548 1.485 2.39.021 1.054.25 1.867.681 2.438l-.186.169.493.826-.246.478-.037 1.646c-.154.11-.545.522-1.174 1.233zm-.871-2.181l.357-.918-.103-1.52a6.545 6.545 0 01-.85-2.624l-1.91-1.92c-.914-.417-2.016-.79-3.306-1.122l-.778-.484-.14.127-2.243.335c.621.936 1.509 2.353 2.662 4.25l-.016.356c.242.205.562.637.96 1.295.495.796.784 1.256.867 1.379l1.551 1.056c1.15.176 2.133.106 2.95-.21zm-6.222 47.974c-.39-.001-.944-.175-1.663-.52-.719-.346-1.162-.51-1.33-.49l-.204.147c-.33-.096-.79-.229-1.378-.396l-1.022.2-1.379-.397-.555.093c-.838-.297-1.689-1.143-2.55-2.54a11.075 11.075 0 01-.655-2.714l.666-.796c.782-.492 1.807-.902 3.074-1.228-.933-.747-1.84-1.137-2.72-1.17-1.459-.079-2.253-.136-2.382-.171l-.079.212a6.812 6.812 0 01-.39.052 7.745 7.745 0 00-.391.05l-.519-.71c-.811-.188-1.522-.63-2.133-1.326-1.073-1.58-1.494-3.44-1.263-5.58a94.24 94.24 0 002.111-2.55c1.17-.852 2.376-1.315 3.618-1.39l.153-.111c2.092.058 3.532-.316 4.319-1.123l-.093-.555-.315-.005-.296-.407-.615-.097-.611-.41-.464-1.064 1.508-.71.99.291c.53.444 1.055 1.022 1.574 1.733l.763.3.278.382.504-.056.722.563 1.174-.31.352.055.2 1.022 1.022.656.46 1.377c-.324.34-.846.798-1.567 1.375l-.467.107-.87-.767c-.24-.007-.643.08-1.212.26l-.111-.152c-1.107.546-1.919.75-2.437.608l-.153.11c-.276-.058-.783-.077-1.521-.058l-1.586.922-.3-.092c-.714.052-1.368.348-1.963.885l-.092.3c-.304.118-.685.636-1.145 1.554-.46.919-.715 1.591-.767 2.018l.482.661c.141.053 1.414.267 3.816.645l.61.41.43-.157c.266.222.55.326.852.314l.412.245.203-.149c.37-.062.82-.104 1.348-.126.407.274.914.489 1.52.644.894.23 1.398.37 1.51.417.418-.174.759-.24 1.022-.2l.149.204c.906-.323 2.276-.685 4.11-1.088.378-.016.958-.075 1.74-.177.318-.31.74-.514 1.266-.612l1.735.993.469 1.605c-.225.475-.616.863-1.174 1.166l-.504.056-.56.408-.11-.153-1.527.256-.148-.204c-.342-.113-1.02.095-2.034.626l-.111-.152a11.77 11.77 0 01-1.933.552l-.915.667-1.704.385-.352-.055-1.882.515-.559.407a6.238 6.238 0 00-.388.322c-.174.153-.304.26-.388.322.876.347 1.523.524 1.943.53l.967 1.007.315.005.356-.259c.569.104 1.418.238 2.548.4.532.339.843.605.933.8l-.38 1.133-.357.26zm18.908 13.425l-1.311.759-.604-.538c-.014-.168-.328-.691-.94-1.57-.215-.309-.37-.789-.464-1.438.311-.728.515-1.279.612-1.653l-.229-.99a4.16 4.16 0 00-2.097-.15l-.794.4-.757-.317-1.325.08-.635.518-.815.26-.53-.32-.687.554-.989-.154c-.581.302-1.132.43-1.65.382l-.602-.425-.743.364-.393.427-.918.332-.768-.002-.83.348-1.294-.096c-.569-.524-1.007-.896-1.314-1.117.024-.553-.197-1.165-.665-1.836-.107-.155-.397-.407-.87-.755-.472-.348-.75-.62-.836-.817l.336-.617.656-.38c.427.137 1.093.287 1.998.45.56-.518 1.107-.797 1.641-.836l.144.206.537-.22.283.186.572-.168.144.206 1.18-.285c.403.027.978.138 1.726.332.362-.252 1.011-.346 1.95-.283l.619-.432c1.321-.23 2.239-.6 2.752-1.11l.454-.89-.205-.625c-.178-.182-.423-.497-.734-.945l-.757-.316-.085-.784-.499-.496.012-.314-.503-.723.413-.288c.541.007 1.045.218 1.513.633l.308.552c.635.07 1.27.394 1.904.975l.503.722.299.1.454.871c.18.259.72.521 1.62.788.159.631.252 1.205.28 1.722-.232.621-.462 1.062-.69 1.323l-.206.144-.59 1.023.107.155c.743-.107 1.621-.093 2.636.044 1.173.18 2 .486 2.48.919l.188.711-.265.721c.122.58.086 1.115-.108 1.608l-.413.287-.204 1.139.297.866-.155.108-.144.675z"
            style={{
              lineHeight: "125%",
              WebkitTextAlign: "start",
              textAlign: "start",
            }}
            fill="#000"
            fillOpacity="1"
            stroke="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeWidth="1"
            fontFamily="Blackadder ITC"
            fontSize="27.388"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="normal"
            textAnchor="start"
            writingMode="lr-tb"
          ></path>
          <path
            id="path8185"
            fill="#6b0000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="1.229, 1.229"
            strokeDashoffset="0"
            strokeMiterlimit="4"
            strokeWidth="1.229"
            d="M-628.511 313.973v-10.585l-17.339 2.388 2.322-8.561-13.589 11.266 13.59 10.954-2.323-8.631 17.339 3.17z"
          ></path>
          <path
            id="alaska-kamchatka"
            fill="none"
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#6b0000"
            strokeDasharray="6.5856, 3.2928"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="3.293"
            d="M-614.074-74.628c.87-38.295 43.58-73.11 4.415-76.59"
          ></path>
          <path
            id="path8193"
            fill="#6b0000"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="1.229, 1.229"
            strokeDashoffset="0"
            strokeMiterlimit="4"
            strokeWidth="1.229"
            d="M-617.17-145.982v-10.586l-17.34 2.388 2.322-8.56-13.588 11.266 13.588 10.954-2.321-8.632 17.338 3.17z"
          ></path>
          <path
            id="path3644"
            fill="none"
            fillOpacity="1"
            stroke="#000"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="0.706"
            markerMid="none"
            markerStart="none"
            d="M-326.828-290.875c-206.776 0-374.63 167.853-374.63 374.629s167.853 374.703 374.63 374.703c151.287 0 281.54-90.008 340.673-219.25.077-.175.44-.938.44-.938s.364.763.442.938c59.131 129.244 189.385 219.25 340.672 219.25 206.778 0 374.63-167.927 374.63-374.703 0-206.776-167.854-374.63-374.63-374.63-151.283 0-281.539 89.94-340.672 219.178-.073.164-.441.955-.441.955s-.368-.791-.441-.955c-59.135-129.237-189.39-219.178-340.673-219.178z"
          ></path>
          <path
            id="path3649"
            fill="none"
            fillOpacity="1"
            stroke="#000"
            strokeDashoffset="0"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeWidth="0.706"
            markerMid="none"
            markerStart="none"
            d="M-326.828-286.906c-204.624 0-370.66 166.036-370.66 370.66 0 204.624 166.036 370.734 370.66 370.734 149.71 0 278.567-89.103 337.071-216.972.578-1.302 4.043-8.737 4.043-8.737s3.465 7.509 4.042 8.81C76.831 365.46 205.688 454.489 355.4 454.489c204.625 0 370.66-166.11 370.66-370.734 0-204.624-166.035-370.66-370.66-370.66-149.707 0-278.566 89.034-337.07 216.898-.157.353-.318.607-.442.882-.654 1.398-3.601 7.662-3.601 7.662s-2.947-6.264-3.602-7.662c-.123-.275-.284-.602-.44-.955-58.506-127.863-187.365-216.825-337.072-216.825z"
          ></path>
        </g>
        <g id="layer2" fillOpacity="1" transform="translate(-781.677 -458.12)">
          <NorthAmerica
            countries={props.countries}
            countrySelection={props.countrySelection}
            countryClicked={props.countryClickedHandler}
          />

          <SouthAmerica
            countries={props.countries}
            countrySelection={props.countrySelection}
            countryClicked={props.countryClickedHandler}
          />

          <Europe
            countries={props.countries}
            countrySelection={props.countrySelection}
            countryClicked={props.countryClickedHandler}
          />

          <Oceania
            countries={props.countries}
            countrySelection={props.countrySelection}
            countryClicked={props.countryClickedHandler}
          />

          <Africa
            countries={props.countries}
            countrySelection={props.countrySelection}
            countryClicked={props.countryClickedHandler}
          />

          <Asia
            countries={props.countries}
            countrySelection={props.countrySelection}
            countryClicked={props.countryClickedHandler}
          />
        </g>
      </svg>
    </div>
  );
};

map.propTypes = {
  countries: PropTypes.object,
  countrySelection: PropTypes.object,
  countryClickedHandler: PropTypes.func,
};

export default map;
