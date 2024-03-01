import { Icons } from "@/assets/icons";
import { EventImg, EventsHeroImg, UpComingEventImg } from "@/assets/images";
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
      <div className="bg-[#FFF] pt-16 pb-20">
        <h2 className="text-center text-2xl font-semibold pb-16">
          Upcoming Events
        </h2>
        <UpcomingEvent />
      </div>
      <div className="bg-[#EBF4F2] pt-16 pb-20">
        <h2 className="text-center text-2xl font-semibold pb-16">
          Past Events
        </h2>
        <div className="grid grid-cols-3 gap-4 max-w-6xl mx-auto">
          <PastEventCard />
          <PastEventCard />
          <PastEventCard />
          <PastEventCard />
          <PastEventCard />
          <PastEventCard />
        </div>
      </div>
    </Layout>
  );
};

const PastEventCard = () => {
  return (
    <div className="rounded-3xl overflow-hidden">
      <img src={EventImg} alt="" className="object-cover object-center" />
      <div className="bg-[#F7C665] px-6 py-2">
        <h2>December Green Webinar</h2>
        <div className="flex gap-2 items-center">
          <Icons.Calender className="w-6" />
          <span className="text-[#5E5E5E]">19th Jan, 2024.</span>
        </div>
      </div>
    </div>
  );
};

const UpcomingEvent = () => (
  <div className="bg-white flex items-center gap-10 rounded-3xl border-[#5e5e5e4d] border max-w-6xl mx-auto pr-10">
    <img
      src={UpComingEventImg}
      alt="selfie"
      className=" object-cover rounded-l-3xl max-w-96 border-r border-[#5e5e5e4d]"
    />
    <div className="space-y-4">
      <h2 className="text-[#1B1717] font-semibold text-2xl">
        Strategies for promoting a clean and sustainable environment in Nigeria
      </h2>
      <p>
        Advisory Board meeting with the purpose of looking forward: on the
        annual plan 2025. The advisory board meeting is a closed meeting that
        includes the board and our three advisory board members.
      </p>
      <div className="flex gap-10 items-center">
        <div className="flex gap-4 items-center">
          <Icons.Calender className="w-7" />
          <span className="text-[#5E5E5E]">16th feb, 2024.</span>
        </div>
        <div className="flex gap-4 items-center">
          <Icons.Clock className="w-7" />
          <span className="text-[#5E5E5E]">17:00 - 18:00 WAT</span>
        </div>
      </div>
    </div>
  </div>
);

export default Events;
