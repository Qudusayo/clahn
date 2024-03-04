import React from "react";

const Button = (
  props: React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
) => {
  const { className, ...rest } = props;

  return (
    <button
      className={`text-cente rounded-2xl bg-[#F36F00] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#F36F00] focus:outline-none focus:ring-4 focus:ring-[#F36F00] dark:bg-[#F36F00] dark:hover:bg-[#F36F00] dark:focus:ring-[#F36F00] ${className}`}
      {...rest}
    >
      {props.children}
    </button>
  );
};

export default Button;
