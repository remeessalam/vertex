import React, { lazy } from "react";
import ReactPlayer from "react-player";
import bannerVid from "../assets/vids/banner.mp4";
import {
  Ambulance,
  BrainCircuit,
  BriefcaseBusiness,
  Cloudy,
  CodeXml,
  Cpu,
  Quote,
  StickyNote,
  Store,
  Tv,
} from "lucide-react";
import howWeBuildCover from "../assets/images/how-we-build.jpeg";
import whyWorkWithUs1 from "../assets/images/whyworkwithus1.png";
import whyWorkWithUs2 from "../assets/images/whyworkwithus2.png";
import whyWorkWithUs3 from "../assets/images/whyworkwithus3.png";
import whyWorkWithUs4 from "../assets/images/whyworkwithus4.png";
import LandingServices from "../components/landingPage/LandingServices";
import { ArrowScrollButton } from "../components/ArrowButtons";
import Portfolio from "../components/Portfolio";
import { appHelpingResult, webHelpingResult } from "../data/constant";

const ContactForm = lazy(() => import("../components/ContactForm"));
const Testimonials = lazy(() => import("../components/Testimonials"));

const industries = [
  {
    icon: Ambulance,
    title: "Healthcare",
  },
  {
    icon: BriefcaseBusiness,
    title: "Finance",
  },
  {
    icon: Cpu,
    title: "Technology",
  },
  {
    icon: Store,
    title: "Retail &\n E-commerce",
  },
  {
    icon: Cloudy,
    title: "SaaS",
  },
  {
    icon: StickyNote,
    title: "Business Services",
  },
  {
    icon: Tv,
    title: "Media & Entertainment",
  },
  {
    icon: BrainCircuit,
    title: "AI",
  },
];

const LandingPage = ({ page }) => {
  const isWeb = page === "web";

  const helpingResult = isWeb ? webHelpingResult : appHelpingResult;
  return (
    <>
      <section id="banner" className="relative min-h-screen bg-black/50">
        <div className="pt-[13rem] pb-[5rem]">
          <div className="wrapper flex flex-col gap-7 justify-center h-full">
            <div
              data-aos="fade-up"
              className="flex items-center text-start self-start text-white px-3 py-2 rounded-full border border-white"
            >
              <CodeXml className="inline mr-2" />
              <span>{isWeb ? "Web Development" : "App Development"}</span>
            </div>
            <h1 data-aos="fade-up" className="heading text-white">
              {isWeb
                ? "Turn Visitors Into Customers With Smart, Scalable Web Design"
                : "We build mobile apps people love to use."}
              {/* <span className="gradient-text">
                {" "}
                {isWeb ? "Web Solutions" : "App Solutions"}
              </span> */}
              <br />
            </h1>
            <p data-aos="fade-up" className="text-white text-lg">
              {isWeb
                ? ` From strategy to launch, we build websites that not only look great but
also drive results—designed to optimize user journeys and support your business
growth.
              `
                : ` From concept to launch, we design high-performing Android, iOS, and
cross-platform apps that delight users, solve real problems, and help your business
scale.`}
            </p>
          </div>
          <section className="">
            <Testimonials page={page} />
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
      {/* <section className="bg-[#F7F7F9]">
        <Testimonials />
      </section> */}
      <LandingServices isWeb={isWeb} page={page} />
      <Portfolio page={page} />
      <section className="py-[4rem] bg-[#D8D8D8A3]">
        <div className="wrapper space-y-3">
          <h2 data-aos="fade-up" className="section-heading text-center">
            Industries We Serve
          </h2>
          <p data-aos="fade-up" className="text-center">
            Using powerful, industry-specific software solutions, our team can
            help you achieve your business goals.
          </p>
          <div className="pt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {industries.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  data-aos="fade-up"
                  key={item.title}
                  className="text-center p-5 bg-white rounded-xl space-y-3 text-black"
                >
                  <IconComponent className="w-8 h-8 mx-auto text-black" />
                  <p className="font-medium text-[.9rem] whitespace-pre-line">
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="pt-[4rem]">
        <h2 data-aos="fade-up" className="wrapper section-heading text-center">
          How Vertex Agent Ai helps you deliver the best results
        </h2>
        <div
          data-aos="fade-up"
          className="wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-[3rem] mt-10"
        >
          {helpingResult.map((item) => (
            <div
              className={`p-5 ${item.styles} h-full w-full flex items-center hover:rotate-[180deg] group text-center rounded-xl transition-all duration-300`}
              key={item.title}
            >
              <div className="space-y-3 group-hover:scale-y-[-1] group-hover:scale-x-[-1] transition-all duration-300">
                <p className="md:text-lg font-bold leading-tight">
                  {item.title}
                </p>
                <p className="text-[.9rem]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="wrapper pt-[4rem] lg:mt-[9rem]">
        <div
          data-aos="fade-up"
          className="relative min-h-[40vh] rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 md:bg-black/20 z-[-1]"></div>
          <img
            loading="lazy"
            src={howWeBuildCover}
            alt="hero banner"
            className="w-full h-full object-cover absolute inset-0 z-[-2]"
          />
          <div className="p-10 text-white text-start space-y-3">
            <h3 className="text-2xl font-semibold">How we build</h3>
            <p className="max-w-xs">
              We prioritize your success, understand your unique needs, and
              deliver tailored solutions that drive your business growth.
            </p>
            <div className="pt-7">
              <ArrowScrollButton to="contact">Let's Chat</ArrowScrollButton>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[4rem] wrapper space-y-3">
        <h2
          data-aos="fade-up"
          className="section-heading text-center md:mb-[2rem]"
        >
          Why Work With Us?
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          {[
            {
              bgColor: "#6B308C",
              text: "Our team combines creativity, technical expertise, and a passion for excellence to bring your vision to life. With attention to detail and a client-first approach, we ensure every project meets your unique requirements and delivers lasting results.",
              imgSrc: whyWorkWithUs1,
              imgClass:
                "md:absolute right-0 top-1/2 md:-translate-y-1/2 max-h-[16rem] md:max-h-[25rem] object-contain",
            },
            {
              bgColor: "#FE7624",
              text: "At Vertex Agent Ai, we deliver excellence across web and app development, UI/UX design, game development, and blockchain solutions. Our expertise ensures innovative, scalable results tailored to your goals.",
              imgSrc: whyWorkWithUs2,
              imgClass:
                "md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[24rem] object-contain",
            },
            {
              bgColor: "#F45C7B",
              text: "Transform your digital presence with our robust web and app solutions. From feature-rich websites to high-performing mobile apps, we ensure seamless functionality and cutting-edge design to achieve your business goals.",
              imgSrc: whyWorkWithUs3,
              imgClass:
                "md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain",
            },
            {
              bgColor: "#507FD7",
              text: "At Vertex Agent Ai, we deliver tailored solutions across industries. From enhancing patient care in Healthcare to empowering E-commerce and driving innovation in Technology, we cater to diverse business needs with precision.",
              imgSrc: whyWorkWithUs4,
              imgClass:
                "md:absolute right-0 bottom-0 max-h-[16rem] md:max-h-[22rem] object-contain",
            },
          ].map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`min-h-[50vh] relative p-5 flex flex-col-reverse md:flex-row items-center gap-4 rounded-xl overflow-hidden`}
              style={{ backgroundColor: item.bgColor }}
            >
              <div className="flex flex-col md:w-8/12 lg:w-9/12 z-10">
                <div className="md:px-[2.5rem]">
                  <p className="md:text-lg text-white font-semibold ">
                    {item.text}
                  </p>
                  <Quote
                    className="size-10 fill-white/20 self-end mt-3"
                    strokeWidth={0}
                  />
                </div>
              </div>
              <img
                src={item.imgSrc}
                alt="why-work-with-us-images"
                className={item.imgClass + ` md:brightness-50`}
              />
            </div>
          ))}
        </div>
      </section>
      <div className="py-[4rem] px-4 sm:px-6 lg:px-8  text-white">
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
      <ContactForm id="contact" />
    </>
  );
};

export default LandingPage;
