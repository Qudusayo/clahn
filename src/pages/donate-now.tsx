import { DonateHeroImg, PaystackOptions, WhoWeAreImg } from "@/assets/images";
import FlexCard from "@/components/organism/flex-card";
import Hero from "@/components/organism/hero";
import MaxComponent from "@/components/organism/MaxComponent";
import PaystackButton from "@/components/paystack-btn";
import Layout from "@/layout";

const Donate = () => {
  return (
    <Layout>
      <Hero
        heroImg={DonateHeroImg.src}
        title="Give Today"
        description="Join us on our mission to create access to quality healthcare services and information in the World's most underserved region and slums in Africa"
      />
      <h1 className="text-4xl font-semibold text-[#1B1717] text-center py-10 mb-20">
        Kindly Choose a Method of Donation
      </h1>
      <section className="py-20 bg-[#EBF4F2] relative my-14">
        <div className="bg-white w-14 h-14 md:w-28 md:h-28 flex items-center justify-center rounded-full absolute -top-7 md:-top-14 -translate-x-1/2 transform md:left-1/2 left-14">
          <DonateIcon className="mx-auto w-10 h-10 md:w-20 md:h-20" />
        </div>
        <MaxComponent className="space-y-4">
          <h1 className="md:text-4xl text-2xl font-semibold text-[#038748] md:text-center py-4">
            Contribute through Paystack.
          </h1>
          <p className="text-[#1B1717] md:text-center text-sm md:text-lg mx-auto max-w-screen-lg">
            For every euro donated, one patient can benefit from an improved
            quality of healthcare, leading to positive health outcomes in the
            world&apos;s most deprived regions.
          </p>
          <img
            src={PaystackOptions.src}
            alt="donation-options"
            className="mx-auto"
          />
          <PaystackButton />
        </MaxComponent>
      </section>
      <section className="py-4">
        <MaxComponent className="grid grid-cols-1 gap-10 bg-contain lg:grid-cols-2 lg:gap-24">
          <div className="mx-auto flex flex-col items-start gap-5 border-l-8 border-[#FEE55D] bg-white p-4 py-8 md:gap-10 md:p-8 w-full shadow-card">
            <div>
              <h2 className="text-3xl font-bold text-[#1B1717]">
                Donate in Naira
              </h2>
              <span className="text-sm">
                You can also make your donations via:
              </span>
            </div>

            <div className="space-y-4">
              <div className="text-[#1B1717]">
                <span>Account Number: </span>
                <span className="font-semibold">1016577663</span>
              </div>
              <div className="text-[#1B1717]">
                <span>Bank name: </span>
                <span className="font-semibold">Zenith Bank</span>
              </div>
              <div className="text-[#1B1717]">
                <span>Account name: </span>
                <span className="font-semibold">
                  Cleaner and Healthier Nature Initiative
                </span>
              </div>
            </div>
          </div>
          <div className="mx-auto flex flex-col items-start gap-5 border-l-8 border-[#F0B99F] bg-white p-4 py-8 md:gap-10 md:p-8 w-full shadow-card">
            <div>
              <h2 className="text-3xl font-bold text-[#1B1717]">
                US Dollar Donation
              </h2>
              <span className="text-sm">
                You can also make your donations via:
              </span>
            </div>

            <div className="space-y-4">
              <div className="text-[#1B1717]">
                <span>Account Number: </span>
                <span className="font-semibold">5071741654</span>
              </div>
              <div className="text-[#1B1717]">
                <span>Sort Code: </span>
                <span className="font-semibold">057190023</span>
              </div>
              <div className="text-[#1B1717]">
                <span>SWIFT Number: </span>
                <span className="font-semibold">ZEIBNGLA</span>
              </div>
              <div className="text-[#1B1717]">
                <span>Bank name: </span>
                <span className="font-semibold">Zenith Bank</span>
              </div>
              <div className="text-[#1B1717]">
                <span>Account name: </span>
                <span className="font-semibold">
                  Cleaner and Healthier Nature Initiative
                </span>
              </div>
            </div>
          </div>
        </MaxComponent>
      </section>

      <FlexCard
        title="How does your donation contribute?"
        content="For every euro donated, one patient can benefit from an improved quality of healthcare, leading to positive health outcomes in the world's most deprived regions."
        borderPositon="top-right"
        image={WhoWeAreImg.src}
      />
    </Layout>
  );
};

const DonateIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={88}
    height={88}
    viewBox="0 0 88 88"
    fill="none"
    {...props}
  >
    <path
      d="M21.7471 39.6578L30.974 57.569L48.1615 50.5131L56.1221 27.5361L29.3458 28.9835L21.7471 39.6578Z"
      fill="#E69329"
    />
    <path
      d="M27.7173 79.8223C35.5111 79.8223 41.8292 73.5042 41.8292 65.7105C41.8292 57.9167 35.5111 51.5986 27.7173 51.5986C19.9236 51.5986 13.6055 57.9167 13.6055 65.7105C13.6055 73.5042 19.9236 79.8223 27.7173 79.8223Z"
      fill="#038748"
    />
    <path
      d="M27.7175 49.4277C18.6714 49.4277 11.4346 56.6646 11.4346 65.7106C11.4346 74.7567 18.6714 81.9935 27.7175 81.9935C36.7635 81.9935 44.0004 74.7567 44.0004 65.7106C44.0004 56.6646 36.7635 49.4277 27.7175 49.4277ZM27.7175 78.3751C20.6615 78.3751 15.053 72.7665 15.053 65.7106C15.053 58.6547 20.6615 53.0462 27.7175 53.0462C34.7734 53.0462 40.3819 58.6547 40.3819 65.7106C40.3819 72.7665 34.7734 78.3751 27.7175 78.3751Z"
      fill="#BFFFE0"
    />
    <path d="M25.9082 60.283H29.5266V74.7566H25.9082V60.283Z" fill="#BFFFE0" />
    <path
      d="M23.9181 65.7108C25.7273 69.1483 29.7076 70.5957 33.1451 68.7865L62.9971 53.4082C64.8063 52.5036 66.0727 51.2372 66.9773 49.9707C70.053 44.1812 77.1089 30.6122 81.8129 18.8523L48.8852 34.5924L40.201 47.6187L27.8984 54.1319C23.1944 56.4839 21.7471 61.7306 23.9181 65.7108Z"
      fill="#FFB74D"
    />
    <path
      d="M55.2168 6.00659L25.3648 17.4046C24.0984 17.7665 22.651 19.2138 21.3846 20.4803L11.253 34.0494C9.44379 36.7632 9.08195 40.2007 10.3484 43.2763C11.0721 45.0855 13.4241 49.4276 15.9569 54.3125C18.8517 51.2369 23.0129 49.4276 27.7168 49.4276C28.4405 49.4276 29.3451 49.4276 30.0688 49.6086L26.2694 42.0099L34.5918 34.5921H49.0655C49.0655 34.5921 77.1083 30.6119 81.9931 18.852L55.2168 6.00659Z"
      fill="#FFB74D"
    />
    <path
      d="M33.5066 65.7108C31.1546 66.7963 28.4408 65.7108 27.5362 63.3588C26.4507 61.0068 27.5362 58.293 29.8882 57.3884C32.0592 56.3029 35.6777 64.6253 33.5066 65.7108Z"
      fill="#FFCDD2"
    />
  </svg>
);

export default Donate;
