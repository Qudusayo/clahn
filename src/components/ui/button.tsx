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
      className={`text-center rounded-[30px] bg-[#F36F00] px-4 md:px-7 md:h-[60px] py-3.5 text-sm font-medium text-white ${className}`}
      {...rest}
    >
      {props.children}
    </button>
  );
};

export default Button;
