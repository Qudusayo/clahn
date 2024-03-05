import { Icons } from "@/assets/icons";
import { GetInvolvedHeroImg, WhoWeAreImg } from "@/assets/images";
import MaxComponent from "@/components/organism/MaxComponent";
import FlexCard from "@/components/organism/flex-card";
import Hero from "@/components/organism/hero";
import Button from "@/components/ui/button";
import Layout from "@/layout";

const GetInvolved = () => {
  return (
    <Layout>
      <Hero
        heroImg={GetInvolvedHeroImg}
        title="Ways to Make a Difference"
        description="Learn all the ways you can connect with our community!"
      />
      <FlexCard
        title="Volunteer with CLAHN"
        content="CLAHN (The Cleaner and Healthier Nature) initiative is a non-governmental organization committed to championing environmental sustainability and public health in Nigeria. We operate with the understanding that a thriving environment is fundamental to the well-being of communities."
        buttonTitle="Apply Below"
        borderPositon="top-right"
        image={WhoWeAreImg}
      />
      <FlexCard
        title="Partner with CLAHN"
        content="CLAHN (The Cleaner and Healthier Nature) initiative is a non-governmental organization committed to championing environmental sustainability and public health in Nigeria. We operate with the understanding that a thriving environment is fundamental to the well-being of communities."
        buttonTitle="Apply Below"
        borderPositon="bottom-left"
        image={WhoWeAreImg}
      />
      <FlexCard
        title="Give Today"
        content="CLAHN (The Cleaner and Healthier Nature) initiative is a non-governmental organization committed to championing environmental sustainability and public health in Nigeria. We operate with the understanding that a thriving environment is fundamental to the well-being of communities."
        buttonTitle="Donate Now"
        borderPositon="top-right"
        image={WhoWeAreImg}
      />
      <div className="bg-[#F6F6F6] pb-20 pt-16">
        <MaxComponent>
          <h2 className="text-balance pb-8 text-left text-2xl font-semibold md:pb-16 md:text-center">
            Reach out to CLAHN INITIATIVE
          </h2>
          <form className="mx-auto max-w-5xl space-y-10 rounded-xl bg-[#FFF] p-6 md:p-12">
            <div>
              <span>
                Fields marked with an <Req /> are required
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-3">
                <label htmlFor="full-name">
                  Full Name
                  <Req />
                </label>
                <input
                  type="text"
                  id="full-name"
                  className="block w-full rounded-lg border border-gray-300 bg-[#D9D9D9] p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="email">
                  Email
                  <Req />
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-[#D9D9D9] p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                />
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="purpose-of-inquiry">
                Purpose of inquiry <Req />
              </label>
              <select
                id="purpose-of-inquiry"
                className="block w-full rounded-lg border border-gray-300 bg-[#D9D9D9] p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="volunteer">Volunteer</option>
                <option value="partner">Partner</option>
                <option value="donate">Donate</option>
              </select>
            </div>

            <div className="space-y-3">
              <label htmlFor="message">
                Message <Req />
              </label>
              <textarea
                id="message"
                className="block w-full rounded-lg border border-gray-300 bg-[#D9D9D9] p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
                rows={10}
              ></textarea>
            </div>

            <Button>Submit</Button>
          </form>
        </MaxComponent>

        <div className="mx-auto mt-12 grid w-[90%] max-w-5xl grid-cols-6 gap-y-10 ">
          <div className="col-span-3 space-y-4 md:col-span-2">
            <div className="w-fit rounded-full border border-[#5e5e5e4d] bg-white">
              <Icons.Message className="h-12 w-12" />
            </div>
            <p>Say Hi!</p>
            <p>info@clahninitiative.org</p>
          </div>
          <div className="col-span-3 space-y-4 md:col-span-2">
            <div className="w-fit rounded-full border border-[#5e5e5e4d] bg-white">
              <Icons.Call className="h-12 w-12" />
            </div>
            <p>Let's Talk</p>
            <p> +234 817 7477 995</p>
          </div>
          <div className="col-span-full space-y-4 md:col-span-2">
            <div className="w-fit rounded-full border border-[#5e5e5e4d] bg-white">
              <Icons.Location className="h-12 w-12" />
            </div>
            <p>Our Location</p>
            <p>18, Labake Estate, Akobo, Ibadan, Ibadan, Oyo State, Nigeria.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Req = () => <span className="text-red-600">*</span>;

export default GetInvolved;
