import { Icons } from "@/assets/icons";
import { EventImg, EventsHeroImg, UpComingEventImg } from "@/assets/images";
import MaxComponent from "@/components/organism/MaxComponent";
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
      <div className="bg-[#FFF] pb-20 pt-16">
        <h2 className="pb-16 text-center text-2xl font-semibold">
          Upcoming Events
        </h2>
        <UpcomingEvent />
      </div>
      <div className="bg-[#EBF4F2] pb-20 pt-16">
        <h2 className="pb-16 text-center text-2xl font-semibold">
          Past Events
        </h2>
        <MaxComponent className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-20 lg:grid-cols-3">
          <PastEventCard />
          <PastEventCard />
          <PastEventCard />
          <PastEventCard />
          <PastEventCard />
          <PastEventCard />
        </MaxComponent>
      </div>
    </Layout>
  );
};

const PastEventCard = () => {
  return (
    <div className="overflow-hidden rounded-3xl">
      <img src={EventImg} alt="" className="object-cover object-center" />
      <div className="bg-[#F7C665] px-6 py-2">
        <h2>December Green Webinar</h2>
        <div className="flex items-center gap-2">
          <Icons.Calender className="w-6" />
          <span className="text-[#5E5E5E]">19th Jan, 2024.</span>
        </div>
      </div>
    </div>
  );
};

const UpcomingEvent = () => (
  <MaxComponent className="mx-auto flex max-w-6xl flex-col items-center rounded-3xl border border-[#5e5e5e4d] bg-white md:flex-row md:gap-10 md:pr-10">
    <img
      src={UpComingEventImg}
      alt="selfie"
      className="w-full rounded-t-3xl border-r border-[#5e5e5e4d] object-cover md:max-w-96 md:rounded-l-3xl md:rounded-t-none"
    />
    <div className="space-y-4 px-4 pb-8 md:px-0 md:pb-0">
      <h2 className="text-2xl font-semibold text-[#1B1717]">
        Strategies for promoting a clean and sustainable environment in Nigeria
      </h2>
      <p>
        Advisory Board meeting with the purpose of looking forward: on the
        annual plan 2025. The advisory board meeting is a closed meeting that
        includes the board and our three advisory board members.
      </p>
      <div className="flex items-center gap-10 text-sm md:text-base">
        <div className="flex items-center gap-4">
          <Icons.Calender className="w-7" />
          <span className="text-[#5E5E5E]">16th feb, 2024.</span>
        </div>
        <div className="flex items-center gap-4">
          <Icons.Clock className="w-7" />
          <span className="text-[#5E5E5E]">17:00 - 18:00 WAT</span>
        </div>
      </div>
    </div>
  </MaxComponent>
);

export default Events;
