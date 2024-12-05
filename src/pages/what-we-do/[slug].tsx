import MaxComponent from "@/components/organism/MaxComponent";
import Partners from "@/components/partners";
import Layout from "@/layout";
import { CONTENT_TYPE, IProjectFields } from "@/types/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID!,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const formatDate = (date?: string) => {
	if (!date) return;

	return new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};

const Slug = ({
	project,
}: {
	project: {
		fields: IProjectFields;
		contentTypeId: CONTENT_TYPE;
	};
}) => {
	return (
		<Layout className="bg-[#f2f2f2]">
			<MaxComponent>
				<div className="absolute left-0 top-32 h-[90%] w-1.5 bg-[#03874894] md:w-3"></div>
				<div className="grid grid-cols-7 gap-10 py-14">
					<div className="col-span-full lg:col-span-5">
						<div className="mx-auto space-y-4 bg-white p-3 pt-8 md:p-8 md:pt-16">
							<img
								src={"https:" + project?.fields?.heroBanner?.fields.file?.url}
								alt="project banner"
								className="max-h-[500px] w-full object-cover object-center"
							/>
							<h2 className="text-3xl font-bold">{project?.fields?.title}</h2>
							<div>
								{documentToReactComponents(project?.fields?.projectContent, {
									preserveWhitespace: true,
									renderText: text => (text === "" ? <br /> : text),
								})}
							</div>
						</div>
					</div>
					<div className="col-span-full space-y-6 lg:col-span-2">
						<div className="mx-auto space-y-4 bg-white p-4 pt-6">
							<Header title="Project Details" />
							<div className="space-y-3">
								<ProjectDetails
									title="Project"
									description={project?.fields.project}
								/>
								<ProjectDetails
									title="NGO"
									description={project?.fields.ngoPartnerships}
								/>
								<ProjectDetails
									title="Location"
									description={project?.fields?.location}
								/>
								<ProjectDetails
									title="Sustainable Development Goals"
									description={project?.fields?.sdg}
								/>
								<ProjectDetails
									title="Start date"
									description={formatDate(project?.fields?.startDate)}
								/>
								<ProjectDetails
									title="End date"
									description={formatDate(project?.fields?.endDate)}
								/>
							</div>
						</div>
						<div className="mx-auto space-y-4 bg-white p-4 pt-6">
							<Header title="Our Recent Projects" />
						</div>
					</div>
				</div>
			</MaxComponent>
			<Partners />
		</Layout>
	);
};

const Header = ({ title }: { title: string }) => {
	return (
		<div className="flex items-center gap-3">
			<div className="h-7 w-3 bg-orange"></div>
			<h2 className="text-2xl font-semibold text-[#1B1717]">{title}</h2>
		</div>
	);
};

const ProjectDetails = ({
	title,
	description,
}: {
	title: string;
	description?: string;
}) => {
	return (
		<div className="flex items-center justify-between gap-3">
			<span className="text-balance text-[#9A9A9A]">{title}</span>
			<span className="text-right text-[#1B1717]">{description}</span>
		</div>
	);
};

export const getStaticPaths = async () => {
	const response = await client.getEntries<{
		fields: IProjectFields;
		contentTypeId: CONTENT_TYPE;
	}>({
		content_type: "project",
	});

	const paths = response.items.map(item => {
		return {
			params: { slug: item.sys.id },
		};
	});

	return {
		paths,
		fallback: true,
	};
};

export async function getStaticProps({
	params,
}: {
	params: {
		slug: string;
	};
}) {
	const { items } = await client.getEntries<{
		fields: IProjectFields;
		contentTypeId: CONTENT_TYPE;
	}>({
		content_type: "project",
		"sys.id": params.slug,
	});

	if (!items.length) {
		return {
			rediect: {
				destination: "/what-we-do",
				permanent: false,
			},
		};
	}

	return {
		props: {
			project: items[0],
		},
		revalidate: 1,
	};
}

export default Slug;
