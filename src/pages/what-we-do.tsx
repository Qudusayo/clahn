import { WhatWeDoHeroImg } from "@/assets/images";
import Hero from "@/components/organism/hero";
import Layout from "@/layout";

const WhatWeDo = () => {
  return (
    <Layout>
      <Hero
        heroImg={WhatWeDoHeroImg}
        title="What we do"
        description="With our core values being sustainability, collaboration and education,  CLAHN initiative strives through its programs for a cleaner and healthier Nation."
      />
    </Layout>
  );
};

export default WhatWeDo;
