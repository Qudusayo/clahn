import { HeroBg } from "@/assets/images";
import { cn } from "@/util";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../ui/button";
import Link from "next/link";

function Hero({
	heroImg,
	title,
	description,
	colouredBg,
	showDonateButton,
	className,
	imageClass,
}: {
	heroImg: string;
	title: React.ReactNode | string;
	description: string;
	colouredBg?: boolean;
	showDonateButton?: boolean;
	className?: string;
	imageClass?: string;
}) {
	const { pathname } = useRouter();
	const [routeTitle, setRouteTitle] = useState("");

	useEffect(() => {
		const page = pathname.slice(1);
		if (page) {
			setRouteTitle(page[0].toUpperCase() + page.slice(1).split("-").join(" "));
		}
	}, [pathname]);

	return (
		<div
			className={cn(
				"relative -z-20 grid grid-cols-1 items-center gap-8 py-12 md:min-h-[80vh] md:grid-cols-12",
				className,
			)}
			style={{
				background: !colouredBg
					? `url(${HeroBg.src}), lightgray 50% / cover no-repeat`
					: "#BFFFE0",
				mixBlendMode: !colouredBg ? "darken" : "normal",
				backgroundColor: !colouredBg ? "#fafbfbb3" : "#BFFFE0",
			}}
		>
			<div className="mx-auto flex w-4/5 flex-col items-start gap-5 md:col-start-1 md:col-end-8 md:row-start-1 md:row-end-2 md:ml-12 md:gap-10">
				{routeTitle && (
					<div className="hidden items-center justify-center gap-2 rounded-2xl border-l-2 border-[#188038] bg-white p-4 text-xl font-semibold text-[#1B1717] md:flex">
						<span>Home</span>
						<span className="text-balance">/</span>
						<div className="relative text-balance">
							<span>{routeTitle}</span>
							{/* <div className="absolute bottom-0 h-1 w-3/5 rounded-lg bg-orange"></div> */}
						</div>
					</div>
				)}
				<h1 className="text-balance text-left text-4xl font-bold md:text-6xl">
					{title}
				</h1>
				<p className="text-base md:text-xl">{description}</p>
				{showDonateButton && (
					<Link href="/donate-now">
						<Button>Donate Now</Button>
					</Link>
				)}
			</div>
			<div
				className={cn(
					"relative -order-1 mx-auto w-4/5 max-w-[600px] md:order-1 md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-2",
					imageClass,
				)}
			>
				<img
					src={heroImg}
					alt="Your Image"
					className={"z-10 h-full w-full rounded-t-3xl object-cover"}
				/>
				<div className="absolute -top-[3%] left-1/2 -z-10 h-2/5 w-[107%] -translate-x-1/2 transform rounded-t-3xl bg-[#03874894]"></div>
			</div>

			<div className="absolute h-[90%] w-1.5 bg-[#03874894] md:w-3"></div>
		</div>
	);
}

export default Hero;
