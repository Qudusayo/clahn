import clsx from "clsx";
import Button from "../ui/button";

const FlexCard = ({
	title,
	image,
	content,
	buttonTitle,
	reversed,
	borderPositon,
	className,
}: {
	title: string;
	image: string;
	content: string;
	buttonTitle?: string;
	reversed?: boolean;
	borderPositon?: "top-right" | "bottom-left";
	className?: string;
}) => {
	return (
		<div
			className={clsx(
				"mx-auto grid max-w-screen-xl grid-cols-1 gap-8 md:gap-20 lg:grid-cols-2",
				className,
			)}
		>
			<div className="relative mx-auto w-10/12 max-w-[600px]">
				<img
					src={image}
					alt="Your Image"
					className="z-10 h-full w-full rounded-t-3xl object-cover"
				/>
				{borderPositon && borderPositon === "top-right" && (
					<div className="absolute -right-[3%] -top-[3%] -z-10 h-2/4 w-[35%] max-w-[206px] rounded-t-3xl bg-[#038748]"></div>
				)}
				{borderPositon && borderPositon === "bottom-left" && (
					<div className="absolute -bottom-[3%] -left-[3%] -z-10 h-2/4 w-[35%] max-w-[206px] rounded-bl-[30px] rounded-br-2xl bg-orange"></div>
				)}
			</div>
			<div
				className={`mx-auto flex w-10/12 flex-col items-start justify-center ${
					reversed ? "lg:-order-1" : "order-1"
				}`}
			>
				<h2 className="mb-4 text-xl font-bold md:mb-6 md:text-4xl">{title}</h2>
				<p className="text-[14px] font-medium md:text-base"> {content} </p>
				{buttonTitle && <Button className="mt-9">{buttonTitle}</Button>}
			</div>
		</div>
	);
};

export default FlexCard;
