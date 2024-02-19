import { GalleryHeroImg } from "@/assets/images";
import Hero from "@/components/organism/hero";
import Layout from "@/layout";

const Gallery = () => {
  return (
    <Layout>
      <Hero
        heroImg={GalleryHeroImg}
        title="Gallery"
        description="Enjoy with us moments that we value and impacts that we’ve made to making a difference."
      />
    </Layout>
  );
};

export default Gallery;
