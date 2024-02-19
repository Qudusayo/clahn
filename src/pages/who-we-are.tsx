import { Icons } from "@/assets/icons";
import {
  Adejoke,
  Amblessed,
  Ayomide,
  Chukwudi,
  Kayode,
  MissionAndVisionBG,
  Ojo,
  Olayinka,
  OurStrategyImg,
  Temitope,
  WhoWeAreHeroImg,
} from "@/assets/images";
import FlexCard from "@/components/organism/flex-card";
import Hero from "@/components/organism/hero";
import Layout from "@/layout";

const WhoWeAre = () => {
  return (
    <Layout>
      <Hero
        heroImg={WhoWeAreHeroImg}
        title="Who we are"
        description="We fight social injustice by creating access to quality healthcare information and services in the world's most underserved region in Africa"
      />
      <div className="p-16 px-24 text-xl space-y-6">
        <p>
          CLAHN (The Cleaner and Healthier Nature ) initiative is a
          non-governmental organization committed to championing environmental
          sustainability and public health in Nigeria. We operate with the
          understanding that a thriving environment is fundamental to the
          well-being of communities
        </p>
        <p>
          Our mission is to empower individuals with the knowledge and tools
          they need to contribute positively to their surroundings. We believe
          that by fostering a deeper understanding of the relationship between
          human actions and the environment, we can together build a healthier
          and more sustainable future. Join us as we embark on the mission to
          make our communities clean and individuals healthy!
        </p>
      </div>
      <section
        style={{
          background: `url(${MissionAndVisionBG}), lightgray 50% / cover no-repeat`,
          backgroundColor: "#038748",
        }}
        className="grid grid-cols-2 p-16 px-24 gap-32 bg-contain"
      >
        <div className="flex flex-col items-start gap-10 bg-white border-l-8 border-[#FEE55D] p-20">
          <h2 className="text-3xl font-bold text-[#1B1717]">MISSION</h2>
          <p className="text-base">
            Our mission is to empower individuals with the knowledge and tools
            they need to contribute positively to their surroundings. We believe
            that by fostering a deeper understanding of the relationship between
            human actions and the environment, we can together build a healthier
            and more sustainable future. Join us as we embark on the mission to
            make our communities clean and individuals healthy!
          </p>
        </div>
        <div className="flex flex-col items-start gap-10 bg-white border-l-8 border-[#F0B99F] p-20">
          <h2 className="text-3xl font-bold text-[#1B1717]">VISION</h2>
          <p className="text-base">
            Our vision is to have a country filled with healthy people living in
            a healthy environment as well as empower individuals to lead
            fulfilling lives with access to quality healthcare, mental
            well-being, and sustainable living practices. We also envision a
            community where individuals are made aware of the dangers of an
            unhealthy environment and how they can embrace healthy living.
          </p>
        </div>
      </section>
      <FlexCard
        title="Our Strategy"
        content="Our strategies for maintaining a new world order where cleanliness and healthy living are at the center include implementing educational programs to raise awareness about the benefits of healthy and hygienic living, Conducting workshops, seminars, and community forums to empower individuals with knowledge on sustainable practices, waste reduction, and the impact of environmental factors on health, among others."
        borderPositon="top-right"
        image={OurStrategyImg}
      />
      <div className="bg-[#F6F5F5] space-y-12 p-16 px-24">
        <h2 className="text-2xl font-semibold">Our Core Values</h2>
        <div className="flex items-center justify-between">
          <CoreValue Icon={<Icons.Collaboration />} title="Collaboration" />
          <CoreValue Icon={<Icons.Education />} title="Education" />
          <CoreValue Icon={<Icons.Communication />} title="Communication" />
          <CoreValue Icon={<Icons.Sustainability />} title="Sustainability" />
          <CoreValue Icon={<Icons.Innovation />} title="Innovation" />
          <CoreValue Icon={<Icons.Integrity />} title="Integrity" />
        </div>
      </div>
      <section className="space-y-20 p-16 px-24">
        <h2 className="text-2xl font-semibold text-center">Our Team</h2>
        <div className="grid grid-cols-3 gap-20">
          <Team
            name="Ayomide Arowosegbe"
            role="Founder CLAHN Initiative"
            image={Ayomide}
          />
          <Team
            name="Adejoke Otuyelu"
            role="Founder CLAHN Initiative"
            image={Adejoke}
          />
          <Team
            name="Chukwudi C. Ahiligwo"
            role="Founder CLAHN Initiative"
            image={Chukwudi}
          />
          <Team
            name="Ojo Gloria Iyanuoluwa"
            role="Founder CLAHN Initiative"
            image={Ojo}
          />
          <Team
            name="Kayode Obakemi"
            role="Founder CLAHN Initiative"
            image={Kayode}
          />
          <Team
            name="Ayomide ArowOluwayomi"
            role="Founder CLAHN Initiative"
            image={Ayomide}
          />
          <Team
            name="Olayinka Saddiq"
            role="Founder CLAHN Initiative"
            image={Olayinka}
          />
          <Team
            name="Temitope D. Onifade"
            role="Founder CLAHN Initiative"
            image={Temitope}
          />
          <Team
            name="Amblessed Agbamoro"
            role="Founder CLAHN Initiative"
            image={Amblessed}
          />
        </div>
      </section>
    </Layout>
  );
};

const CoreValue = ({
  Icon,
  title,
}: {
  Icon: React.SVGProps<SVGSVGElement>;
  title: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-[#BFFFE0] rounded-xl p-4">
        {Icon as React.ReactElement}
      </div>
      <h3>{title}</h3>
    </div>
  );
};

const Team = ({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={image} alt={name} className="w-4/5 rounded-full" />
      <h3 className="font-bold">{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default WhoWeAre;
