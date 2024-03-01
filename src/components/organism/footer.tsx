import { Link } from "react-router-dom";

import { Icons } from "@/assets/icons";
import Button from "../ui/button";

import { FooterBg, FooterLogo } from "@/assets/images";

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
        className="flex px-16 py-3 gap-10 bg-contain"
      >
        <div className="py-12 flex flex-col items-start gap-10 flex-1">
          <h2 className="text-3xl font-bold text-[#1B1717]">Join our team</h2>
          <p>
            Join our dynamic team, contribute your skills, and together, let's
            shape a better world for all. Your time and dedication can truly
            make a difference. Volunteer with CLAHN today and be part of
            something extraordinary.!"
          </p>
          <Button className="h-14 rounded-3xl min-w-40">Volunteer now</Button>
        </div>
        <div className="border-l border-l-[#5E5E5E] pl-10 py-12 flex flex-col items-start gap-10 flex-1">
          <h2 className="text-3xl font-bold text-[#1B1717]">
            Make a difference
          </h2>
          <p>
            Your donation to CLAHN empowers impactful initiatives that promote
            environmental sustainability and elevate community well-being.
            Together, we can make a lasting difference. Donate today and be a
            part of a greener future!
          </p>
          <Button className="h-14 rounded-3xl min-w-40">Donate Now</Button>
        </div>
      </section>
      <footer className="bg-[#038748] py-8">
        <section className="grid grid-cols-12 pl-16 pr-32 gap-10 py-8">
          <div className="col-span-5 flex flex-col items-start justify-center">
            <div className="text-white space-y-10">
              <img src={FooterLogo} alt="footer-logo" className="w-56" />
              <p className="whitespace-normal">
                CLAHN (The Cleaner and Healthier Nature ) initiative is a
                non-governmental organization committed to championing
                environmental sustainability and public health in Nigeria.
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="text-white font-bold mb-6">Important Links</h2>
            <div className="flex flex-col space-y-4">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.link}
                  className="text-white flex items-center"
                >
                  <span>{link.title}</span>
                  <Icons.ArrowRight className="text-white" />
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-2 pl-4">
            <h2 className="text-white font-bold mb-6">Socials</h2>
            <div className="flex flex-col space-y-4">
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
          <div className="col-span-3 flex flex-col space-y-4">
            <h2 className="text-white font-bold mb-2">Contact Us</h2>
            <address className="text-white">
              64, Blue Gate House,
              <br />
              Adeyi Avenue, Old Bodija,
              <br />
              Ibadan, Nigeria.
            </address>
            <div>
              {phoneNumbers.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.split("-").join("")}`}
                  className="text-white block"
                >
                  {phone}
                </a>
              ))}
              <a
                className="text-white block"
                href="mailto:info@bluegateinitiative.org"
              >
                info@bluegateinitiative.org
              </a>
            </div>
          </div>
        </section>
        <div className="text-center text-white border-t border-t-[#aeaeae80] pt-8 font-dm-sans">
          <span>
            Cleaner and healthier nature initiative &copy;{" "}
            {new Date().getFullYear()} All rights reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
