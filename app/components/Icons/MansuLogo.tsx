import React from "react";

const MansuLogo = () => {
  return (
    <svg
      width="17"
      height="10"
      viewBox="0 0 17 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="0.94043"
        y="0.519989"
        width="15.12"
        height="8.96"
        rx="3.64"
        fill="url(#pattern0_41_25)"
      />
      <defs>
        <pattern
          id="pattern0_41_25"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_41_25"
            transform="matrix(0.0138154 0 0 0.0233135 -0.149324 0)"
          />
        </pattern>
        <image
          id="image0_41_25"
          width="94"
          height="63"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default MansuLogo;