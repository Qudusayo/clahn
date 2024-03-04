import { Link } from "react-router-dom";

import { Icons } from "@/assets/icons";
import Button from "../ui/button";

import { FooterBg, FooterLogo } from "@/assets/images";
import MaxComponent from "./MaxComponent";

const footerLinks = [
  {
    title: "Who we are",
    link: "/who-we-are",
  },
  {
    title: "What we do",
    link: "/what-we-do",
  },
  {
    title: "Our projects",
    link: "/our-projects",
  },
  {
    title: "Our teams",
    link: "/our-teams",
  },
  {
    title: "Volunteer with us",
    link: "/get-involved",
  },
  {
    title: "Partner with us",
    link: "/get-involved",
  },
  {
    title: "Our Gallery",
    link: "/gallery",
  },
  {
    title: "Events",
    link: "/events",
  },
  {
    title: "Donate",
    link: "/donate-now",
  },
];
const phoneNumbers = [
  "+234-806-590-3150",
  "+234-805-165-9422",
  "+234-8030-676-992",
];

const Footer = () => {
  return (
    <>
      <section
        style={{
          background: `url(${FooterBg}), lightgray 0px 0px / 100% 277.457% no-repeat`,
          backgroundColor: "#F7C665",
        }}
      >
        <MaxComponent className="flex flex-col gap-10 bg-contain py-3 md:flex-row">
          <div className="mx-auto flex w-full flex-1 flex-col items-start justify-between gap-8 py-6 pb-0 md:w-4/5 md:gap-10 md:py-12">
            <h2 className="text-3xl font-bold text-[#1B1717]">Join our team</h2>
            <p>
              Join our dynamic team, contribute your skills, and together, let's
              shape a better world for all. Your time and dedication can truly
              make a difference. Volunteer with CLAHN today and be part of
              something extraordinary.!"
            </p>
            <Button className="h-14 min-w-40 rounded-3xl">Volunteer now</Button>
          </div>
          <div className="mx-auto flex w-full flex-1 flex-col items-start justify-between gap-8 border-t border-t-[#5E5E5E] py-6 md:w-4/5 md:gap-10 md:border-l md:border-t-0 md:border-l-[#5E5E5E] md:py-12 md:pl-10">
            <h2 className="text-3xl font-bold text-[#1B1717]">
              Make a difference
            </h2>
            <p>
              Your donation to CLAHN empowers impactful initiatives that promote
              environmental sustainability and elevate community well-being.
              Together, we can make a lasting difference. Donate today and be a
              part of a greener future!
            </p>
            <Button className="h-14 min-w-40 rounded-3xl">Donate Now</Button>
          </div>
        </MaxComponent>
      </section>
      <footer className="bg-[#038748] py-8">
        <MaxComponent className="grid grid-cols-12 gap-y-10 break-words py-8 md:gap-10 md:gap-y-0 md:py-8">
          <div className="col-span-full flex flex-col items-start justify-center md:col-span-5">
            <div className="space-y-10 text-white">
              <img src={FooterLogo} alt="footer-logo" className="w-56" />
              <p className="whitespace-normal">
                CLAHN (The Cleaner and Healthier Nature ) initiative is a
                non-governmental organization committed to championing
                environmental sustainability and public health in Nigeria.
              </p>
            </div>
          </div>
          <div className="col-span-6 md:col-span-2">
            <h2 className="mb-6 font-bold text-white">Important Links</h2>
            <div className="flex flex-col gap-8">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  className="flex items-center text-sm text-white md:text-base"
                >
                  <span>{link.title}</span>
                  <Icons.ArrowRight className="text-white" />
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-5 gap-10 md:col-span-5 md:gap-0 md:pl-4">
            <div className="col-span-full md:col-span-2 order-1">
              <h2 className="mb-6 font-bold text-white">Socials</h2>
              <div className="grid grid-cols-3 flex-col gap-4 md:flex md:space-y-4">
                <a href="#">
                  <Icons.Twitter className="text-white" />
                </a>
                <a href="#">
                  <Icons.Instagram className="text-white" />
                </a>
                <a href="#">
                  <Icons.LinkedIn className="text-white" />
                </a>
                <a href="#">
                  <Icons.Facebook className="text-white" />
                </a>
                <a href="#">
                  <Icons.Slack className="text-white" />
                </a>
                <a href="#">
                  <Icons.Youtube className="text-white" />
                </a>
              </div>
            </div>
            <div className="col-span-full order-2"></div>
            <div className="col-span-full order-3"></div>
            <div className="col-span-full order-4"></div>
            <div className="-order-1 col-span-full flex flex-col gap-4 md:order-1 md:col-span-3">
              <h2 className="mb-2 font-bold text-white">Our Contact</h2>
              <address className="text-sm text-white md:text-base">
                64, Blue Gate House,
                <br />
                Adeyi Avenue, Old Bodija,
                <br />
                Ibadan, Nigeria.
              </address>
              <div className="text-sm md:text-base">
                {phoneNumbers.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone.split("-").join("")}`}
                    className="block text-white"
                  >
                    {phone}
                  </a>
                ))}
                <a
                  className="block text-white"
                  href="mailto:info@bluegateinitiative.org"
                >
                  info@bluegateinitiative.org
                </a>
              </div>
            </div>
          </div>
        </MaxComponent>
        <section className="border-t border-t-[#aeaeae80] pt-2 text-center font-dm-sans text-white md:pt-8">
          <MaxComponent className="text-sm md:text-base">
            Cleaner and healthier nature initiative &copy;{" "}
            {new Date().getFullYear()} All rights reserved.
          </MaxComponent>
        </section>
      </footer>
    </>
  );
};

export default Footer;
