import { EventsHeroImg } from "@/assets/images";
import Hero from "@/components/organism/hero";
import Layout from "@/layout";

const Events = () => {
  return (
    <Layout>
      <Hero
        heroImg={EventsHeroImg}
        title="Events"
        description="We organize events all around positive social change to bring community development"
      />
    </Layout>
  );
};

export default Events;
