import React from "react";

const TextInput = ({
  placeholder,
  type,
}: {
  placeholder: string;
  type?: string;
}) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      className="border-b border-black/45 w-full pb-5 
	  placeholder-[#2E2E2E]/75  focus-visible:outline-none
	  disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
};

export default TextInput;
