import MaxComponent from "@/components/organism/MaxComponent";
import Partners from "@/components/partners";
import Layout from "@/layout";
import { CONTENT_TYPE, IProjectFields } from "@/types/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";
import React from "react";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const Slug = ({
  project,
}: {
  project: {
    fields: IProjectFields;
    contentTypeId: CONTENT_TYPE;
  };
}) => {
  return (
    <Layout>
      <MaxComponent>
        <div className="absolute h-[90%] w-1.5 md:w-3 bg-[#03874894] left-0 top-32"></div>
        <div className="grid grid-cols-7 py-14 gap-10">
          <div className="col-span-full lg:col-span-5">
            <div className="mx-auto space-y-4 bg-white p-3 md:p-8 pt-8 md:pt-16">
              <img
                src={"https:" + project?.fields?.heroBanner?.fields.file?.url}
                alt="project banner"
                className="w-full object-cover max-h-[500px] object-center"
              />
              <div>
                {documentToReactComponents(project?.fields?.projectContent)}
              </div>
            </div>
          </div>
          <div className="col-span-full lg:col-span-2 space-y-6">
            <div className="mx-auto space-y-4 bg-white p-4 pt-6">
              <Header title="Project Details" />
              <div className="space-y-3">
                <ProjectDetails
                  title="Project"
                  description="World Breast Cancer day"
                />
                <ProjectDetails
                  title="NGO"
                  description="World Breast Cancer day"
                />
                <ProjectDetails title="Location" description="Nigeria" />
                <ProjectDetails
                  title="Sustainable Development Goals"
                  description="No Poverty"
                />
                <ProjectDetails title="Start date" description="July 1, 2023" />
                <ProjectDetails title="End date" description="July 31, 2023" />
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
      <div className="h-7 w-3 bg-[#F36F00]"></div>
      <h2 className="text-2xl font-semibold text-[#1B1717]">{title}</h2>
    </div>
  );
};

const ProjectDetails = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-[#9A9A9A] text-balance">{title}</span>
      <span className="text-[#1B1717] text-right">{description}</span>
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

  const paths = response.items.map((item) => {
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
