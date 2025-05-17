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
              <span>Cyber Security</span>
            </div>
            <h1 data-aos="fade-up" className="heading text-white">
              Stay Ahead of
              <span className="gradient-text"> Cyber Threats </span>with
              Expert-Led Security Testing
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
          <section className="">
            <CybersecurityTestimonials />
          </section>
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
      <div className="py-16 px-4 sm:px-6 lg:px-8  text-white">
        <div className="wrapper">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4" data-aos="fade-up">
              About Vertex Agent AI Company
            </h2>
            <p
              className="text-lg text-gray-300 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              At Vertex Agent AI Company, we blend innovation and engineering to
              deliver cutting-edge solutions in:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              "Web & App Development",
              "UI/UX Design",
              "Cyber Security Solutions",
              "Data Analytics Solutions",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-primary p-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <h3 className="text-xl font-bold">{service}</h3>
              </div>
            ))}
          </div>

          <div
            className="text-center mt-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="text-lg text-gray-300">
              We serve startups, enterprises, and everything in between with
              scalable solutions that drive measurable impact.
            </p>
          </div>
        </div>
      </div>
      <LandingServices page={"cybersecurity"} />
      <WhyWorkWithUsCyberSecurity />
      <StatsCounter />
      <SectorsScroller />
      <ContactForm id="contact" />
    </>
  );
};

export default Cybersecurity;
