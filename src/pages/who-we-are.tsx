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
import MaxComponent from "@/components/organism/MaxComponent";
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
      <MaxComponent className="mx-auto space-y-6 py-10 md:py-20 text-base md:text-xl">
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
      </MaxComponent>
      <section
        style={{
          background: `url(${MissionAndVisionBG}), lightgray 50% / cover no-repeat`,
          backgroundColor: "#038748",
        }}
        className="py-20"
      >
        <MaxComponent className="grid grid-cols-1 gap-10 bg-contain lg:grid-cols-2 lg:gap-24">
          <div className="mx-auto flex flex-col items-start gap-5 border-l-8 border-[#FEE55D] bg-white p-4 py-12 md:gap-10 md:p-20">
            <h2 className="text-3xl font-bold text-[#1B1717]">MISSION</h2>
            <p className="text-base">
              Our mission is to empower individuals with the knowledge and tools
              they need to contribute positively to their surroundings. We
              believe that by fostering a deeper understanding of the
              relationship between human actions and the environment, we can
              together build a healthier and more sustainable future. Join us as
              we embark on the mission to make our communities clean and
              individuals healthy!
            </p>
          </div>
          <div className="mx-auto flex flex-col items-start gap-5 border-l-8 border-[#F0B99F] bg-white p-4 py-12 md:gap-10 md:p-20">
            <h2 className="text-3xl font-bold text-[#1B1717]">VISION</h2>
            <p className="text-base">
              Our vision is to have a country filled with healthy people living
              in a healthy environment as well as empower individuals to lead
              fulfilling lives with access to quality healthcare, mental
              well-being, and sustainable living practices. We also envision a
              community where individuals are made aware of the dangers of an
              unhealthy environment and how they can embrace healthy living.
            </p>
          </div>
        </MaxComponent>
      </section>
      <FlexCard
        title="Our Strategy"
        content="Our strategies for maintaining a new world order where cleanliness and healthy living are at the center include implementing educational programs to raise awareness about the benefits of healthy and hygienic living, Conducting workshops, seminars, and community forums to empower individuals with knowledge on sustainable practices, waste reduction, and the impact of environmental factors on health, among others."
        borderPositon="top-right"
        image={OurStrategyImg}
      />
      <div className="bg-[#F6F5F5] py-12 md:py-16">
        <MaxComponent className="space-y-12 ">
          <h2 className="text-2xl font-semibold">Our Core Values</h2>
          <div className="grid grid-cols-3 items-center justify-between gap-10 md:grid-cols-6">
            <CoreValue
              Icon={<Icons.Collaboration className="w-10" />}
              title="Collaboration"
            />
            <CoreValue
              Icon={<Icons.Education className="w-10" />}
              title="Education"
            />
            <CoreValue
              Icon={<Icons.Communication className="w-10" />}
              title="Communication"
            />
            <CoreValue
              Icon={<Icons.Sustainability className="w-10" />}
              title="Sustainability"
            />
            <CoreValue
              Icon={<Icons.Innovation className="w-10" />}
              title="Innovation"
            />
            <CoreValue
              Icon={<Icons.Integrity className="w-10" />}
              title="Integrity"
            />
          </div>
        </MaxComponent>
      </div>
      <section className="space-y-20 py-16">
        <h2 className="text-center text-2xl font-semibold">Our Team</h2>
        <MaxComponent className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20 lg:grid-cols-3">
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
        </MaxComponent>
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
      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#BFFFE0] p-4 md:h-24 md:w-24">
        {Icon as React.ReactElement}
      </div>
      <h3 className="text-sm md:text-base">{title}</h3>
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
    <div className="mx-auto flex w-4/5 flex-col items-center gap-4">
      <img src={image} alt={name} className="w-full rounded-full" />
      <h3 className="font-bold">{name}</h3>
      <p>{role}</p>
    </div>
  );
};

export default WhoWeAre;
