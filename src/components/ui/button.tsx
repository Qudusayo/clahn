import { cn } from "@/util";
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
			className={cn(
				"cursor-pointer rounded-3xl bg-orange px-4 py-3.5 text-center text-sm font-medium text-white md:h-[60px] md:px-7",
				className,
			)}
			{...rest}
		>
			{props.children}
		</button>
	);
};

export default Button;
