import React from "react";

const AssemblyIcon = ({ fill = "#5F0025" }) => {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="32"
        height="32"
        transform="translate(0 0.5)"
        fill="white"
        fill-opacity="0.01"
        style={{ mixBlendMode: "multiply" }}
      />
      <path
        d="M11.4515 4.86413L8.43831 6.64493L9.45591 8.36673L12.4691 6.58593L11.4515 4.86413Z"
        fill={fill}
      />
      <path
        d="M6 12.5H4V10.4C4 9.7 4.4 9 5 8.7L6.5 7.8L7.5 9.5L6 10.4V12.5Z"
        fill={fill}
      />
      <path d="M6 14.5H4V18.5H6V14.5Z" fill={fill} />
      <path
        d="M6.5 25.2L5 24.3C4.4 23.9 4 23.3 4 22.6V20.5H6V22.6L7.5 23.5L6.5 25.2Z"
        fill={fill}
      />
      <path
        d="M9.44894 24.6046L8.43154 26.3264L11.4447 28.1069L12.4621 26.3851L9.44894 24.6046Z"
        fill={fill}
      />
      <path
        d="M17.5 27.6L16 28.5L14.5 27.6L13.5 29.3L15 30.2C15.3 30.4 15.7 30.5 16 30.5C16.4 30.5 16.7 30.4 17 30.2L18.5 29.3L17.5 27.6Z"
        fill={fill}
      />
      <path
        d="M22.5353 24.6261L19.5221 26.4069L20.5397 28.1287L23.5529 26.3479L22.5353 24.6261Z"
        fill={fill}
      />
      <path
        d="M25.2 25.4L24.2 23.7L26 22.7V20.5H28V22.6C28 23.3 27.6 24 27 24.3L25.2 25.4Z"
        fill={fill}
      />
      <path d="M28 14.5H26V18.5H28V14.5Z" fill={fill} />
      <path
        d="M28 12.5H26V10.4L24.2 9.4L25.2 7.7L27 8.7C27.6 9.1 28 9.7 28 10.4V12.5Z"
        fill={fill}
      />
      <path
        d="M20.4686 4.81886L19.4512 6.54066L22.4644 8.32111L23.4818 6.59931L20.4686 4.81886Z"
        fill={fill}
      />
      <path
        d="M17.5 5.4L16 4.5L14.5 5.4L13.5 3.7L15 2.8C15.3 2.6 15.6 2.5 16 2.5C16.4 2.5 16.7 2.6 17 2.8L18.5 3.7L17.5 5.4Z"
        fill={fill}
      />
    </svg>
  );
};

export default AssemblyIcon;
