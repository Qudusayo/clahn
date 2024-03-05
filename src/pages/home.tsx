import FlexCard from "@/components/organism/flex-card";
import Layout from "@/layout";
import {
  HomeHeroImg,
  OurImpactsImg,
  PreviewDirt1,
  PreviewDirt2,
  PreviewDirt3,
  PreviewDirt4,
  SupportOurMissionImg,
  WhatWeDoImg,
  WhoWeAreImg,
} from "@/assets/images";
import Hero from "@/components/organism/hero";
import clsx from "clsx";

const Home = () => {
  return (
    <Layout>
      <Hero
        heroImg={HomeHeroImg}
        title={
          <>
            We elevate wellness through{" "}
            <span className="text-[#E77F28]">educational webinars</span>
          </>
        }
        description="CLAHN initiative envisions a sustainable environment where cleanliness
        and healthy living is the new order."
        showDonateButton
        colouredBg
        className="pb-32"
      />
      <div className="relative -top-24 mx-auto grid w-[90%] max-w-5xl grid-cols-2 gap-y-4 rounded-3xl bg-white py-5 shadow-md md:-top-14 md:grid-cols-4">
        <HeroCard title="6" content="Years" />
        <HeroCard className="border-l" title="30" content="Webinars" />
        <HeroCard className="md:border-l" title="6" content="Projects" />
        <HeroCard className="border-l" title="14" content="Outreaches" />
      </div>
      <FlexCard
        title="Who We Are"
        content="CLAHN Initiative is an independent, environmental nonprofit. We are on a mission to solve the world's most complex systemic environmental challenges—on the ground, at scale, and with urgency"
        buttonTitle="Learn More"
        borderPositon="top-right"
        image={WhoWeAreImg}
      />
      <FlexCard
        title="What we do"
        content="CLAHN Initiative is an independent, environmental nonprofit. We are on a mission to solve the world's most complex systemic environmental challenges—on the ground, at scale, and with urgency"
        buttonTitle="Donate now"
        reversed
        borderPositon="bottom-left"
        image={WhatWeDoImg}
      />
      <FlexCard
        title="Our Impacts"
        content="CLAHN Initiative is an independent, environmental nonprofit. We are on a mission to solve the world's most complex systemic environmental challenges—on the ground, at scale, and with urgency systemic environmental challenges—on the ground, at scale, and with urgency."
        buttonTitle="Donate now"
        borderPositon="top-right"
        image={OurImpactsImg}
      />
      <FlexCard
        title="Support Our Mission"
        content="Here's an opportunity for you to become a world changer, get involved in the movement to make your community healthier! Your contribution can make a significant impact on our ability to provide vital services, education, and resources to those in need."
        buttonTitle="Donate Now"
        borderPositon="top-right"
        image={SupportOurMissionImg}
        reversed
      />
      <div>
        <div className="bg-[#BFFFE0] p-2 py-4 md:py-8">
          <h2 className="text-center font-bold uppercase text-[#1B1717] md:text-2xl">
            SEE WHAT WE HAVE DONE TO THE EARTH
          </h2>
        </div>
        <div className="relative grid h-72 grid-cols-2 gap-2 md:h-[80vh] md:gap-4">
          <ImageCard image={PreviewDirt1} />
          <ImageCard image={PreviewDirt2} />
          <ImageCard image={PreviewDirt3} />
          <ImageCard image={PreviewDirt4} />

          <div
            // Center element with inset and absolute
            className="absolute inset-0 m-auto flex h-24 w-24 cursor-pointer items-center justify-center rounded-full bg-black p-3 text-center text-xs text-white md:h-40 md:w-40 md:text-base"
          >
            Click here to clean up this mess
          </div>
        </div>
      </div>
      <FlexCard
        title="Support Our Mission"
        content="Here's an opportunity for you to become a world changer, get involved in the movement to make your community healthier! Your contribution can make a significant impact on our ability to provide vital services, education, and resources to those in need."
        buttonTitle="Donate Now"
        borderPositon="top-right"
        image={SupportOurMissionImg}
        reversed
      />
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

export default Home;
