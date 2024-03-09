import FlexCard from "@/components/organism/flex-card";
import Layout from "@/layout";
import {
  EventImg,
  HomeHeroImg,
  OurImpactsImg,
  Partner1,
  Partner2,
  Partner3,
  Partner4,
  Partner5,
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
import Hero from "@/components/organism/hero";
import clsx from "clsx";
import MaxComponent from "@/components/organism/MaxComponent";
import { useState } from "react";

const Home = () => {
  const [dirtView, setDirtView] = useState(true);

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
      <div>
        <div className="bg-[#BFFFE0] p-2 py-4 md:py-8">
          <h2 className="text-center font-bold uppercase text-[#1B1717] md:text-2xl">
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
        image={SupportOurMissionImg}
        reversed
      />

      <MaxComponent className="my-28 space-y-10">
        <h2 className="text-center text-4xl font-bold">Our Partners</h2>
        <div className="grid grid-cols-5 gap-10">
          {[Partner1, Partner2, Partner3, Partner4, Partner5].map(
            (partner, index) => (
              <PartnerCard key={index} image={partner} />
            ),
          )}
        </div>
      </MaxComponent>

      <div className="flex h-screen max-h-[446px] min-h-[357px] flex-col justify-center space-y-0 bg-[#43ff64d9] text-center">
        <h2 className="text-center text-9xl font-bold leading-10 text-[#F36F00]">
          “
        </h2>
        <div>
          <h2 className="text-3xl font-bold text-white">
            “Team work makes dream work”
          </h2>
          <p className="text-xl text-white">
            Mide Arowosegbe, Founder Clahn initiative
          </p>
        </div>
      </div>

      <MaxComponent className="my-28 space-y-10">
        <h2 className="text-center text-4xl font-bold">Events</h2>

        <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </MaxComponent>
    </Layout>
  );
};

const PartnerCard = ({ image }: { image: string }) => {
  return (
    <div className="flex max-h-[171px] items-center justify-center bg-[#EBF4F2] px-10 py-10">
      <img src={image} alt="Partner 1" className="w-auto" />
    </div>
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
        <ImageCard key={index} image={image} />
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
        <ImageCard key={index} image={image} />
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

const EventCard = () => {
  return (
    <div className="">
      <img
        src={EventImg}
        alt=""
        className="rounded-3xl object-cover object-center"
      />
      <div className="space-y-1 py-2">
        <span className="text-sm text-[#1B1717]">19th Jan, 2024.</span>
        <h2 className="text-xl font-bold">
          Strategies for promoting a clean and sustainable environment in
          Nigeria
        </h2>
        <p>
          Environment sanitation is the cleanliness if the environment to avoid
          germs and harmful hazards
        </p>
      </div>
    </div>
  );
};

export default Home;
