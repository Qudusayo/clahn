import {
	Partner1,
	Partner2,
	Partner3,
	Partner4,
	Partner5,
} from "@/assets/images";

const Partners = () => {
	return (
		<div className="my-28 w-full space-y-10">
			<h2 className="text-center text-4xl font-bold">Our Partners</h2>
			<div className="mx-auto flex w-full gap-5 overflow-x-auto md:w-11/12 md:items-center md:justify-center">
				{[Partner1, Partner2, Partner3, Partner4, Partner5].map(
					(partner, index) => (
						<PartnerCard key={index} image={partner.src} />
					),
				)}
			</div>
		</div>
	);
};

const PartnerCard = ({ image }: { image: string }) => {
	return (
		<div className="flex h-[100px] min-w-36 items-center justify-center bg-[#EBF4F2] px-10 py-10 md:h-[171px] md:flex-1">
			<img src={image} alt="Partner 1" className="w-auto" />
		</div>
	);
};

export default Partners;
