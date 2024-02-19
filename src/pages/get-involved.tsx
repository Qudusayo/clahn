import { GetInvolvedHeroImg, WhoWeAreImg } from "@/assets/images";
import FlexCard from "@/components/organism/flex-card";
import Hero from "@/components/organism/hero";
import Layout from "@/layout";

const GetInvolved = () => {
  return (
    <Layout>
      <Hero
        heroImg={GetInvolvedHeroImg}
        title="Ways to Make a Difference"
        description="Learn all the ways you can connect with our community!"
      />
      <FlexCard
        title="Volunteer with CLAHN"
        content="CLAHN (The Cleaner and Healthier Nature) initiative is a non-governmental organization committed to championing environmental sustainability and public health in Nigeria. We operate with the understanding that a thriving environment is fundamental to the well-being of communities."
        buttonTitle="Apply Below"
        borderPositon="top-right"
        image={WhoWeAreImg}
      />
      <FlexCard
        title="Partner with CLAHN"
        content="CLAHN (The Cleaner and Healthier Nature) initiative is a non-governmental organization committed to championing environmental sustainability and public health in Nigeria. We operate with the understanding that a thriving environment is fundamental to the well-being of communities."
        buttonTitle="Apply Below"
        borderPositon="top-right"
        reversed
        image={WhoWeAreImg}
      />
      <FlexCard
        title="Give Today"
        content="CLAHN (The Cleaner and Healthier Nature) initiative is a non-governmental organization committed to championing environmental sustainability and public health in Nigeria. We operate with the understanding that a thriving environment is fundamental to the well-being of communities."
        buttonTitle="Donate Now"
        borderPositon="top-right"
        image={WhoWeAreImg}
      />
    </Layout>
  );
};

export default GetInvolved;
