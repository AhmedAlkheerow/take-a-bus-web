import React from 'react';

export default function LineOrSVG() {
  return (
    <div>
      <div className="hidden md:block">
        <svg
          width="50"
          height="300"
          viewBox="0 0 50 294"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="24.5"
            y1="0.998264"
            x2="25.5174"
            y2="293.998"
            stroke="black"
            strokeOpacity="0.13"
          />
          <circle cx="25" cy="147" r="25" fill="#E9E9E9" />
          <text x="20" y="35" className="small">
            My
          </text>
        </svg>
      </div>
      <div className="block md:hidden">
        <svg
          className="w-full h-16"
          viewBox="0 0 294 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.498264"
            y1="26"
            x2="293.498"
            y2="24.9826"
            stroke="black"
            strokeOpacity="0.13"
          />
          <circle
            cx="146.5"
            cy="25.5"
            r="25"
            transform="rotate(-90 146.5 25.5)"
            fill="#E9E9E9"
          />
          <path
            d="M130.467 24.5273C130.467 22.151 131.105 20.2923 132.381 18.9512C133.657 17.6035 135.304 16.9297 137.322 16.9297C138.644 16.9297 139.835 17.2454 140.896 17.877C141.958 18.5085 142.765 19.3906 143.318 20.5234C143.878 21.6497 144.158 22.929 144.158 24.3613C144.158 25.8131 143.865 27.112 143.279 28.2578C142.693 29.4036 141.863 30.2728 140.789 30.8652C139.715 31.4512 138.556 31.7441 137.313 31.7441C135.965 31.7441 134.76 31.4186 133.699 30.7676C132.638 30.1165 131.834 29.2279 131.287 28.1016C130.74 26.9753 130.467 25.7839 130.467 24.5273ZM132.42 24.5566C132.42 26.2819 132.882 27.6426 133.807 28.6387C134.738 29.6283 135.903 30.123 137.303 30.123C138.729 30.123 139.9 29.6217 140.818 28.6191C141.743 27.6165 142.205 26.194 142.205 24.3516C142.205 23.1862 142.007 22.1706 141.609 21.3047C141.219 20.4323 140.643 19.7585 139.881 19.2832C139.126 18.8014 138.276 18.5605 137.332 18.5605C135.991 18.5605 134.835 19.0228 133.865 19.9473C132.902 20.8652 132.42 22.4017 132.42 24.5566ZM146.639 31.5L146.639 17.1836L152.986 17.1836C154.262 17.1836 155.232 17.3138 155.896 17.5742C156.561 17.8281 157.091 18.2806 157.488 18.9316C157.885 19.5827 158.084 20.3021 158.084 21.0898C158.084 22.1055 157.755 22.9616 157.098 23.6582C156.44 24.3548 155.424 24.7975 154.051 24.9863C154.552 25.2272 154.933 25.4648 155.193 25.6992C155.747 26.207 156.271 26.8418 156.766 27.6035L159.256 31.5L156.873 31.5L154.979 28.5215C154.425 27.6621 153.969 27.0046 153.611 26.5488C153.253 26.0931 152.931 25.7741 152.645 25.5918C152.365 25.4095 152.078 25.2825 151.785 25.2109C151.57 25.1654 151.219 25.1426 150.73 25.1426L148.533 25.1426L148.533 31.5L146.639 31.5ZM148.533 23.5019L152.605 23.5019C153.471 23.5019 154.148 23.4141 154.637 23.2383C155.125 23.056 155.496 22.7695 155.75 22.3789C156.004 21.9818 156.131 21.5521 156.131 21.0898C156.131 20.4128 155.883 19.8561 155.389 19.4199C154.9 18.9837 154.126 18.7656 153.064 18.7656L148.533 18.7656L148.533 23.5019Z"
            fill="black"
            fillOpacity="0.5"
          />
        </svg>
      </div>
    </div>
  );
}
