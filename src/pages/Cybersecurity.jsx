import { CodeXml } from "lucide-react";
import bannerVid from "../assets/vids/banner.mp4";
import ReactPlayer from "react-player";
import ContactForm from "../components/ContactForm";
import CybersecurityTestimonials from "../components/landingPage/CybersecurityTestimonials";
import LandingServices from "../components/landingPage/LandingServices";
import WhyWorkWithUsCyberSecurity from "../components/landingPage/WhyWorkWithUsCyberSecurity";
import StatsCounter from "../components/landingPage/StatsCounter";
import SectorsScroller from "../components/landingPage/sector";

const Cybersecurity = () => {
  return (
    <>
      {" "}
      <section id="banner" className="relative min-h-screen bg-black/50">
        <div className="pt-[13rem] pb-[5rem]">
          <div className="wrapper flex flex-col gap-7 justify-center h-full">
            <div
              data-aos="fade-up"
              className="flex items-center text-start self-start text-white px-3 py-2 rounded-full border border-white"
            >
              <CodeXml className="inline mr-2" />
              <span>Cybersecurity</span>
            </div>
            <h1 data-aos="fade-up" className="heading text-white">
              Empowering Your Business with Seamless
              <span className="gradient-text"> Cybersecurity Solutions</span>
              <br />
            </h1>
            <p data-aos="fade-up" className="text-white text-lg">
              In today’s rapidly evolving digital world, cybersecurity is a
              mission-critical priority. We help businesses stay ahead of
              threats by identifying and eliminating security vulnerabilities
              before they can be exploited. With a strong focus on proactive
              defense, technical precision, and industry best practices, our
              services are designed to safeguard your digital assets, maintain
              compliance, and build customer trust.
            </p>
          </div>
        </div>
        <div className="">
          <ReactPlayer
            url={bannerVid}
            playing
            muted
            loop
            playsinline
            width="100%"
            height="100%"
            className="react-player"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
            config={{
              file: {
                attributes: {
                  style: {
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  },
                },
              },
            }}
          />
        </div>
      </section>
      <ContactForm headline="Book A Free Consultation" />
      <section className="bg-[#F7F7F9]">
        <CybersecurityTestimonials />
      </section>
      <LandingServices page={"cybersecurity"} />
      <WhyWorkWithUsCyberSecurity />
      <StatsCounter />
      <SectorsScroller />
      <ContactForm id="contact" />
    </>
  );
};

export default Cybersecurity;
