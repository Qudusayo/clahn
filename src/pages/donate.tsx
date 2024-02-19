import { DonateHeroImg, WhoWeAreImg } from "@/assets/images";
import FlexCard from "@/components/organism/flex-card";
import Hero from "@/components/organism/hero";
import Layout from "@/layout";

const Donate = () => {
  return (
    <Layout>
      <Hero
        heroImg={DonateHeroImg}
        title="Give Today"
        description="Join us on our mission to create access to quality healthcare services and information in the World's most underserved region and slums in Africa"
      />
      <FlexCard
        title="How does your donation contribute?"
        content="For every euro donated, one patient can benefit from an improved quality of healthcare, leading to positive health outcomes in the world's most deprived regions."
        borderPositon="top-right"
        image={WhoWeAreImg}
      />
    </Layout>
  );
};

export default Donate;
