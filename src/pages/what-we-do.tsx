import { WhatWeDoHeroImg, WhoWeAreImg } from "@/assets/images";
import Hero from "@/components/organism/hero";
import Layout from "@/layout";
import { Icons } from "@/assets/icons";

const WhatWeDo = () => {
  return (
    <Layout>
      <Hero
        heroImg={WhatWeDoHeroImg}
        title="What we do"
        description="With our core values being sustainability, collaboration and education,  CLAHN initiative strives through its programs for a cleaner and healthier Nation."
      />
      <div className="flex p-16 gap-10">
        <div className="flex-1 space-y-10 flex flex-col justify-between">
          <BlockContent
            Icon={<Icons.EducationalWebinars className="w-3/5" />}
            title="Educational webinars"
            description="CLAHN Initiative has single-handedly and in conjunction with other brands organized about 30 webinars. A lot of prominent speakers in different fields have been invited to speak, some of these speakers include, Olumide Onadipe(visual artist), Doyinsola Ogunye, Dr. Femi Idowu Adegoke, Dr. Joila Jacobs, and Dr. Martins Meiske."
          />
          <BlockContent
            Icon={<Icons.CommunityCleanUp className="w-3/5" />}
            title="Community cleanups"
            description="In our mission to a create cleaner, greener, and healthier community for all, we have mobilized 3 Community cleanups. We mobilize like-minded individuals, roll up our sleeves, and pick up the litters that make our communities unhealthy."
          />
          <BlockContent
            Icon={<Icons.HealthEducation className="w-3/5" />}
            title="Health Education"
            description="We engage in advocacy and policy work to promote health education and support initiatives that improve access to healthcare and healthy living resources for all members of the community."
          />
        </div>
        <div className="flex-1 border-l border-l-[#5E5E5E] pl-10 space-y-10 flex flex-col justify-between">
          <BlockContent
            Icon={<Icons.HealthOutreaches className="w-3/5" />}
            title="Health Outreaches"
            description="We have conducted about 15 outreaches over time which include celebrating World Environment Day with students of Redeemer's secondary school where the students were taught their roles in ensuring a cleaner and healthier environment. Our team also conducted an outreach to commemorate World Cancer Day, at Ito Omu Island."
          />
          <BlockContent
            Icon={<Icons.GreenSpaceCreation className="w-3/5" />}
            title="Green Space Creation"
            description="Plastics are the major elements that litter the environment, so at CLAHN, our mission is to recover and repurpose plastic waste, creating a sustainable and circular economy while actively contributing to the restoration of our oceans and environment. Over the years we’ve organized plastic getaway and plastic recovery events and recovered over 2 metric tons of plastic"
          />
          <BlockContent
            Icon={<Icons.CollaborativeInitiative className="w-3/5" />}
            title="Collaborative Initiative"
            description="We Collaborate with other NGOs, government agencies, businesses, and local communities to gather resources, share expertise, and collectively address health and environmental challengesf"
          />
        </div>
      </div>
      <div className="bg-[#EBF4F2] p-16 px-24 space-y-16">
        <h2 className="text-center text-3xl font-bold">Our Projects</h2>
        <div className="space-y-10">
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
      </div>
    </Layout>
  );
};

const BlockContent = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: React.SVGProps<SVGSVGElement>;
}) => {
  return (
    <div className="flex gap-6">
      <div className="w-32 border-4 rounded-full h-32 p-4 box-content flex items-center justify-center">
        {Icon as React.ReactElement}
      </div>
      <div className="flex-1 space-y-4">
        <h2 className="text-[#1B1717] font-semibold text-3xl">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Event = () => (
  <div className="bg-white flex items-center gap-10 rounded-3xl">
    <img
      src={WhoWeAreImg}
      alt="selfie"
      className=" object-cover rounded-3xl max-w-96"
    />
    <div className="space-y-4">
      <h2 className="text-[#1B1717] font-semibold text-2xl">
        Ajah-Ilaje Cleanup
      </h2>
      <p>
        The Ajah-Ilaje market of Eti-Osa Local Government in Lagos state was the
        first mapped-out location for our cleanup exercise; with the support of
        the Rotaract Club of Lekki Phase 1, the Kids Beach Garden, and a total
        of 20 youth volunteers, we were able to rid the market of dirt and
        sensitize the market women, traders, and artisans on the need to always
        keep the market environment clean by disposing of their waste
        appropriately.{" "}
        <span className="text-[#038748] underline">See more</span>
      </p>
      <div className="flex gap-4 items-center">
        <Icons.Calender />
        <span className="text-[#5E5E5E]">Sapele Lagos. 24th feb, 2024.</span>
      </div>
    </div>
  </div>
);

export default WhatWeDo;
