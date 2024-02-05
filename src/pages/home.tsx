import FlexCard from "@/components/organism/flex-card";
import Layout from "@/layout";

const Home = () => {
  return (
    <Layout>
      <div>Home</div>
      <FlexCard
        title="Who We Are"
        content="CLAHN Initiative is an independent, environmental nonprofit. We are on a mission to solve the world's most complex systemic environmental challenges—on the ground, at scale, and with urgency"
        buttonTitle="Learn More"
        borderPositon="top-right"
      />
      <FlexCard
        title="What we do"
        content="CLAHN Initiative is an independent, environmental nonprofit. We are on a mission to solve the world's most complex systemic environmental challenges—on the ground, at scale, and with urgency"
        buttonTitle="Donate now"
        reversed
        borderPositon="bottom-left"
      />
      <FlexCard
        title="Our Impacts"
        content="CLAHN Initiative is an independent, environmental nonprofit. We are on a mission to solve the world's most complex systemic environmental challenges—on the ground, at scale, and with urgency systemic environmental challenges—on the ground, at scale, and with urgency."
        buttonTitle="Donate now"
        borderPositon="top-right"
      />
    </Layout>
  );
};

export default Home;
