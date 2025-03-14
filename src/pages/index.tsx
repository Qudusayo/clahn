import {
	DreamHeroImg,
	HomeHero1,
	HomeHero2,
	HomeHero3,
	OurImpactsImg,
	PreviewClean1,
	PreviewClean2,
	PreviewClean3,
	PreviewClean4,
	PreviewDirt1,
	PreviewDirt2,
	PreviewDirt3,
	PreviewDirt4,
	SupportOurMissionImg,
	WhatWeDoImg,
	WhoWeAreImg,
} from "@/assets/images";
import MaxComponent from "@/components/organism/MaxComponent";
import FlexCard from "@/components/organism/flex-card";
import Hero from "@/components/organism/hero";
import Partners from "@/components/partners";
import Button from "@/components/ui/button";
import Layout from "@/layout";
import { CONTENT_TYPE, IEvent, IEventFields } from "@/types/contentful";
import { cn } from "@/util";
import clsx from "clsx";
import { createClient } from "contentful";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home = ({
	isPastEvent,
	events,
}: {
	isPastEvent: boolean;
	events: IEvent[];
}) => {
	const images = [HomeHero1.src, HomeHero2.src, HomeHero3.src];
	const texts = [
		"collaborative initiative",
		"community outreaches",
		"green spaces creation",
	];
	const [dirtView, setDirtView] = useState(true);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isFading, setIsFading] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			changeImage();
		}, 5000);

		return () => clearInterval(interval);
	}, [currentIndex]);

	const changeImage = () => {
		setIsFading(true);
		setTimeout(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
			setIsFading(false);
		}, 500);
	};

	return (
		<Layout>
			<Hero
				heroImg={images[currentIndex]}
				imageClass={cn(
					"transition-opacity duration-500 ease-in-out",
					isFading ? "opacity-0" : "opacity-100",
				)}
				title={
					<>
						We are changing the narrative through{" "}
						<span className="text-[#E77F28]">{texts[currentIndex]}</span>
					</>
				}
				description="CLAHN initiative envisions a sustainable environment where cleanliness
        and healthy living is the new order."
				showDonateButton
				colouredBg
				className="pb-32"
			/>
			<div className="relative -top-20 mx-auto -mb-8 grid w-[90%] max-w-5xl grid-cols-2 gap-y-4 rounded-3xl bg-white py-5 shadow-md md:-top-16 md:-mb-0 md:grid-cols-4">
				<HeroCard title="6" content="Years" />
				<HeroCard className="border-l" title="50+" content="Webinars" />
				<HeroCard className="md:border-l" title="6" content="Projects" />
				<HeroCard className="border-l" title="14" content="Outreaches" />
			</div>
			<div className="mt-8 flex flex-col gap-14">
				<FlexCard
					title="Who We Are"
					content="CLAHN (The Cleaner and Healthier Nature) initiative is a non-governmental organization committed to championing environmental sustainability and public health in Nigeria. We operate with the understanding that a thriving environment is fundamental to the well-being of communities."
					buttonTitle="Learn More"
					borderPositon="top-right"
					image={WhoWeAreImg.src}
					linkTo="/who-we-are"
				/>
				<FlexCard
					title="What we do"
					content="CLAHN Initiative is an independent, environmental nonprofit. We are on a mission to solve the world's most complex systemic environmental challenges—on the ground, at scale, and with urgency"
					buttonTitle="Learn More"
					reversed
					borderPositon="bottom-left"
					image={WhatWeDoImg.src}
					linkTo="/what-we-do"
				/>
				<FlexCard
					title="Our projects"
					content="CLAHN has pioneered some outreaches over the years which includes; celebrating world environment day and, also an outreach to commemorate the world cancer day in rural communities. In addition, CLAHN initiative has also collaborated with brands to carry out webinars and organize outreaches"
					buttonTitle="Learn More"
					borderPositon="top-right"
					image={OurImpactsImg.src}
					linkTo="/gallery"
				/>
			</div>
			<div className="my-14">
				<div className="bg-[#BFFFE0] p-2 py-4 md:py-8">
					<h2 className="text-center text-xl font-bold uppercase text-[#000000] md:text-4xl">
						SEE WHAT WE HAVE DONE TO THE EARTH
					</h2>
				</div>
				<div className="relative h-96 md:h-[100vh] md:max-h-[1024px]">
					<div
						className={clsx(
							"absolute inset-0 m-auto flex h-24 w-24 cursor-pointer items-center justify-center rounded-full p-3 text-center text-[10px] text-white transition-all duration-1000 md:h-40 md:w-40 md:text-xs",
							dirtView ? "bg-black" : "bg-[#0CBE93]",
						)}
						onClick={() => setDirtView(false)}
					>
						{dirtView
							? "Click here to clean up this mess"
							: "Thank you! Anyone can make a difference"}
					</div>
					<DirtView dirtView={dirtView} />
					<CleanView dirtView={dirtView} />
				</div>
			</div>
			<FlexCard
				title="Support Our Mission"
				content="Here's an opportunity for you to become a world changer, get involved in the movement to make your community healthier! Your contribution can make a significant impact on our ability to provide vital services, education, and resources to those in need."
				buttonTitle="Donate Now"
				borderPositon="top-right"
				image={SupportOurMissionImg.src}
				reversed
				linkTo="/donate-now"
			/>

			<Partners />

			<div
				className="apostrophe-section flex h-screen max-h-[357px] flex-col justify-center space-y-0 text-center md:max-h-[446px]"
				style={{
					background: `linear-gradient(rgba(3, 135, 72, 0.31), rgba(3, 135, 72, 0.31)), url(${DreamHeroImg.src}) no-repeat center center/cover`,
				}}
			>
				<h2 className="text-orange text-center text-9xl font-bold leading-10">
					“
				</h2>
				<div className="space-y-4">
					<h2 className="text-2xl font-bold text-white">
						“Team work makes dream work”
					</h2>
					<p className="mx-auto w-4/5 text-sm text-white md:text-xl">
						Mide Arowosegbe, Founder Clahn initiative
					</p>
				</div>
			</div>

			<MaxComponent className="mb-16 mt-14 space-y-10 md:my-28">
				<h2 className="text-center text-[28px] font-bold md:text-4xl">
					Events
				</h2>
				<div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
					{events.map(event => (
						<EventCard
							key={event.sys.id}
							event={event.fields as IEventFields}
						/>
					))}
				</div>
				<Link href="/events">
					<Button className="mx-auto block">View Events</Button>
				</Link>
			</MaxComponent>
		</Layout>
	);
};

const ImageCard = ({ image }: { image: string }) => {
	return (
		<div
			style={{
				backgroundImage: `url(${image})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		></div>
	);
};

const DirtView = ({ dirtView }: { dirtView: boolean }) => (
	<div
		className={clsx(
			"absolute top-0 -z-10 grid h-full w-full grid-cols-2 gap-2 transition-opacity duration-1000 md:gap-4",
			dirtView ? "opacity-100" : "opacity-0",
		)}
	>
		{[PreviewDirt1, PreviewDirt2, PreviewDirt3, PreviewDirt4].map(
			(image, index) => (
				<ImageCard key={index} image={image.src} />
			),
		)}
	</div>
);

const CleanView = ({ dirtView }: { dirtView: boolean }) => (
	<div
		className={clsx(
			"absolute top-0 -z-10 grid h-full w-full grid-cols-2 gap-2 transition-opacity duration-1000 md:gap-4",
			dirtView ? "opacity-0" : "opacity-100",
		)}
	>
		{[PreviewClean1, PreviewClean2, PreviewClean3, PreviewClean4].map(
			(image, index) => (
				<ImageCard key={index} image={image.src} />
			),
		)}
	</div>
);

const HeroCard = ({
	title,
	content,
	className,
}: {
	title: string;
	content: string;
	className?: string;
}) => {
	return (
		<div className={clsx("space-y-2 text-center", className)}>
			<h2 className="text-3xl font-bold text-[#E77F28] md:text-5xl">{title}</h2>
			<p>{content}</p>
		</div>
	);
};

const EventCard = ({ event }: { event: IEventFields }) => {
	return (
		<div className="">
			<img
				src={"https:" + event.banner?.fields?.file?.url}
				alt={event.title}
				className="rounded-3xl object-cover object-center"
			/>
			<div className="space-y-1 py-2">
				<span className="text-xs text-[#1B1717]">
					{new Date(event.date as string).toLocaleDateString("en-GB", {
						day: "2-digit",
						month: "short",
						year: "numeric",
					})}
				</span>
				<h2 className="text-xl font-bold">{event.title}</h2>
				<p>{event.description}</p>
			</div>
		</div>
	);
};

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID!,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
	});

	const response = await client.getEntries<{
		fields: IEventFields;
		contentTypeId: CONTENT_TYPE;
	}>({
		content_type: "event",
		select: [
			"sys.id",
			"fields.banner",
			"fields.title",
			"fields.description",
			"fields.date",
			"fields.linkToEvent",
		],
	});

	// If no upcoming events, return recent 3 events
	const events = response.items
		.filter(event => {
			const eventFields = event.fields as IEventFields;
			const eventDate = new Date(eventFields.date as string);
			const currentDate = new Date();
			return eventDate > currentDate;
		})
		.sort((a, b) => {
			const aDate = new Date((a.fields as IEventFields).date as string);
			const bDate = new Date((b.fields as IEventFields).date as string);
			return aDate.getTime() - bDate.getTime();
		});

	return {
		props: {
			isPastEvent: events.length === 0,
			events: events.length ? events.slice(0, 3) : response.items.slice(0, 3),
		},
		revalidate: 1,
	};
}

export default Home;
