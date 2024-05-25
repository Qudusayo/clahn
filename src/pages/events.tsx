import { Icons } from "@/assets/icons";
import { EventsHeroImg, UpComingEventImg } from "@/assets/images";
import MaxComponent from "@/components/organism/MaxComponent";
import Hero from "@/components/organism/hero";
import Layout from "@/layout";
import { CONTENT_TYPE, IEvent, IEventFields } from "@/types/contentful";
import { createClient } from "contentful";

const Events = ({ events }: { events: IEvent[] }) => {
  const oldEvents = events.filter((event) => {
    const eventFields = event.fields as IEventFields;
    return new Date(eventFields.date as string) < new Date();
  });

  const upcomingEvents = events
    .filter((event) => {
      const eventFields = event.fields as IEventFields;
      return new Date(eventFields.date as string) > new Date();
    })
    .reverse();

  return (
    <Layout>
      <Hero
        heroImg={EventsHeroImg.src}
        title="Events"
        description="We organize events all around positive social change to bring community development"
      />
      <div className="bg-[#FFF] pb-20 pt-16 space-y-4">
        <h2 className="pb-16 text-center text-2xl font-semibold">
          Upcoming Events
        </h2>
        {upcomingEvents.length === 0 ? (
          <div className="text-center text-[#5E5E5E]">
            <p>There are no upcoming events.</p>
          </div>
        ) : (
          upcomingEvents.map((event) => (
            <UpcomingEvent
              event={event.fields as IEventFields}
              key={event.sys.id}
            />
          ))
        )}
      </div>
      <div className="bg-[#EBF4F2] py-8 pt-14 pb-20 md:py-16">
        <h2 className="md:pb-16 pb-8 text-center text-2xl font-semibold">
          Past Events
        </h2>
        <MaxComponent className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-20 lg:grid-cols-3">
          {oldEvents.map((event) => (
            <PastEventCard
              key={event.sys.id}
              event={event.fields as IEventFields}
            />
          ))}
        </MaxComponent>
      </div>
    </Layout>
  );
};

const PastEventCard = ({ event }: { event: IEventFields }) => {
  return (
    <div className="bg-white rounded-2xl">
      <div className="overflow-hidden rounded-t-2xl">
        <img
          src={"https:" + event.banner?.fields.file?.url}
          alt={event.title}
          className="object-cover object-center"
        />
      </div>
      <div className="border-t px-6 py-2 pb-1 rounded-b-2xl">
        <h2 className="font-semibold text-lg md:text-2xl">{event.title}</h2>
        <div className="flex items-center gap-2">
          <Icons.Calender className="w-6" />
          <span className="text-[#5E5E5E] text-sm md:text-base">
            {new Date(event.date as string).toDateString()}.
          </span>
        </div>
      </div>
    </div>
  );
};

const UpcomingEvent = ({ event }: { event: IEventFields }) => (
  <MaxComponent className="mx-auto flex max-w-6xl flex-col items-center rounded-3xl border border-[#5e5e5e4d] bg-white md:flex-row md:gap-10 md:pr-10">
    <img
      src={"https:" + event.banner?.fields.file?.url}
      alt="selfie"
      className="w-full rounded-t-3xl border-r border-[#5e5e5e4d] object-cover md:max-w-96 md:rounded-l-3xl md:rounded-tr-none"
    />
    <div className="space-y-4 p-4  md:px-0 md:pb-0">
      <h2 className="text-2xl font-semibold text-[#1B1717]">{event.title}</h2>
      <p className="text-sm md:text-base">{event.description}</p>
      <div className="flex items-center gap-10 text-sm md:text-base">
        <div className="flex items-center gap-1.5 md:gap-4">
          <Icons.Calender className="w-5 md:w-7" />
          <span className="text-[#5E5E5E]">
            {new Date(event.date as string).toLocaleDateString("en-GB", {
              dateStyle: "medium",
            })}
          </span>
        </div>
        <div className="flex items-center gap-1.5 md:gap-4">
          <Icons.Clock className="w-5 md:w-7" />
          {/* <span className="text-[#5E5E5E]">17:00 - 18:00 WAT</span> */}
          <span className="text-[#5E5E5E]">
            {new Date(event.date as string).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </span>
        </div>
      </div>
    </div>
  </MaxComponent>
);

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const response = await client.getEntries<{
    fields: IEventFields;
    contentTypeId: CONTENT_TYPE;
  }>({
    content_type: "event",
    select: [
      "sys.id",
      "fields.banner",
      "fields.title",
      "fields.description",
      "fields.date",
      "fields.linkToEvent",
    ],
  });

  return {
    props: {
      events: response.items,
    },
    revalidate: 1,
  };
}

export default Events;
