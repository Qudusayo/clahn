import React from "react";

const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      className="text-white bg-[#F36F00] hover:bg-[#F36F00] focus:outline-none focus:ring-4 focus:ring-[#F36F00] font-medium rounded-full text-sm px-5 py-2.5 text-cente dark:bg-[#F36F00] dark:hover:bg-[#F36F00] dark:focus:ring-[#F36F00]"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;