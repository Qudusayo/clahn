import { Icons } from "@/assets/icons";
import { GetInvolvedHeroImg, WhoWeAreImg } from "@/assets/images";
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
      <div className="bg-[#F6F6F6] pt-16 pb-20">
        <h2 className="text-center text-2xl font-semibold pb-16">
          Reach out to CLAHN INITIATIVE
        </h2>
        <form className="bg-[#FFF] max-w-5xl mx-auto p-12 rounded-xl space-y-10">
          <div>
            <span>
              Fields marked with an <Req /> are required
            </span>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-3">
              <label htmlFor="full-name">
                Full Name
                <Req />
              </label>
              <input
                type="text"
                id="full-name"
                className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
                className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              />
            </div>
          </div>

          <div className="space-y-3">
            <label htmlFor="purpose-of-inquiry">
              Purpose of inquiry <Req />
            </label>
            <select
              id="purpose-of-inquiry"
              className="bg-[#D9D9D9] border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
              className="block p-2.5 w-full text-sm text-gray-900 bg-[#D9D9D9] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              rows={10}
            ></textarea>
          </div>

          <Button>Submit</Button>
        </form>

        <div className="grid grid-cols-3 max-w-5xl mx-auto mt-12">
          <div className="space-y-4">
            <div className="bg-white rounded-full w-fit border border-[#5e5e5e4d]">
              <Icons.Message className="w-12 h-12" />
            </div>
            <p>Say Hi!</p>
            <p>info@clahninitiative.org</p>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-full w-fit border border-[#5e5e5e4d]">
              <Icons.Call className="w-12 h-12" />
            </div>
            <p>Let's Talk</p>
            <p> +234 817 7477 995</p>
          </div>
          <div className="space-y-4">
            <div className="bg-white rounded-full w-fit border border-[#5e5e5e4d]">
              <Icons.Location className="w-12 h-12" />
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
