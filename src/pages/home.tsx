import FlexCard from "@/components/organism/flex-card";
import Layout from "@/layout";
import {
  HomeHeroImg,
  OurImpactsImg,
  SupportOurMissionImg,
  WhatWeDoImg,
  WhoWeAreImg,
} from "@/assets/images";
import Hero from "@/components/organism/hero";

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
      />
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
    </Layout>
  );
};

export default Home;
