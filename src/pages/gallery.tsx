import { GalleryHeroImg } from "@/assets/images";
import Hero from "@/components/organism/hero";
import Layout from "@/layout";
import { cn } from "@/util";

const Gallery = () => {
	return (
		<Layout>
			<Hero
				heroImg={GalleryHeroImg.src}
				title="Gallery"
				description="Enjoy with us moments that we value and impacts that we’ve made to making a difference."
			/>
			<div className="bg-[#EFEFEF]">
				<ul className="mx-auto flex w-[90%] max-w-7xl overflow-x-scroll">
					<LinkSelector title="All" active onClick={() => {}} />
					<LinkSelector
						title="Ibadan Cleanup"
						active={false}
						onClick={() => {}}
					/>
					<LinkSelector
						title="Breast cancer"
						active={false}
						onClick={() => {}}
					/>
					<LinkSelector
						title="World malaria day"
						active={false}
						onClick={() => {}}
					/>
				</ul>
			</div>
			<div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-5 py-20">
				<div className="flex w-full flex-col gap-5 sm:flex-row">
					<div>
						<img
							className="w-full sm:w-auto sm:max-w-full"
							src="/gallery/g-1.png"
							alt="placeholder"
						/>
					</div>
					<div>
						<img
							className="w-full sm:w-auto sm:max-w-full"
							src="/gallery/g-2.png"
							alt="placeholder"
						/>
					</div>
				</div>
				<div className="flex w-full flex-col gap-5 sm:flex-row">
					<div>
						<img
							className="w-full sm:w-auto sm:max-w-full"
							src="/gallery/g-3.png"
							alt="placeholder"
						/>
					</div>
					<div>
						<img
							className="w-full sm:w-auto sm:max-w-full"
							src="/gallery/g-4.png"
							alt="placeholder"
						/>
					</div>
				</div>
				<div className="flex w-full flex-col gap-5 sm:flex-row">
					<div>
						<img
							className="w-full sm:w-auto sm:max-w-full"
							src="/gallery/g-5.png"
							alt="placeholder"
						/>
					</div>
					<div>
						<img
							className="w-full sm:w-auto sm:max-w-full"
							src="/gallery/g-6.png"
							alt="placeholder"
						/>
					</div>
				</div>
				<div className="flex w-full flex-col gap-5 sm:flex-row">
					<div>
						<img
							className="w-full sm:w-auto sm:max-w-full"
							src="/gallery/g-7.png"
							alt="placeholder"
						/>
					</div>
					<div>
						<img
							className="w-full sm:w-auto sm:max-w-full"
							src="/gallery/g-8.png"
							alt="placeholder"
						/>
					</div>
				</div>
				<div className="flex w-full flex-col gap-5 sm:flex-row">
					<div>
						<img
							className="w-full sm:w-auto sm:max-w-full"
							src="/gallery/g-9.png"
							alt="placeholder"
						/>
					</div>
					<div>
						<img
							className="w-full sm:w-auto sm:max-w-full"
							src="/gallery/g-10.png"
							alt="placeholder"
						/>
					</div>
				</div>
			</div>
		</Layout>
	);
};

const LinkSelector = ({
	title,
	active,
	onClick,
}: {
	title: string;
	active: boolean;
	onClick: () => void;
}) => {
	return (
		<li
			onClick={onClick}
			className={cn(
				"relative w-fit cursor-pointer text-nowrap px-4 py-3 pt-4",
				"before:absolute before:bottom-0 before:h-1 before:w-full before:rounded-sm",
				"before:duration-20 before:left-1/2 before:-translate-x-1/2 before:transition-all",
				active
					? "before:bg-[#E77F28]"
					: "before:bg-transparent hover:before:bg-[#E77F28]/40",
			)}
		>
			{title}
		</li>
	);
};

export default Gallery;
