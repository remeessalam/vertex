import React from "react";
import { services } from "../../data/services";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ArrowLinkButton } from "../ArrowButtons";

const ServicesWeProvide = () => {
  return (
    <div id="services" className="py-[4rem] wrapper">
      <h2 data-aos="fade-up" className="section-heading text-center">
        Services We Provide
      </h2>
      <div
        data-aos="fade-up"
        className="mt-10 pb-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {services.map((item, i) => (
          <Link
            key={item.title}
            to={`/services/${item.title}`}
            className={`group h-full overflow-hidden space-y-6 bg-secondary/30  hover:bg-primary/70  p-5 rounded-xl transition-all duration-300 
              `}
          >
            {/* ${
            i === 2 ? "md:order-3 md:col-span-2 md:w-1/2 md:mx-auto" : ""
          } */}
            <div className=" h-full items-center ">
              <div className="h-full flex flex-col gap-1 justify-between">
                <div className="space-y-1">
                  <p className="text-xl font-medium">{item.title}</p>
                  <img
                    src={item.image}
                    className="object-cover w-full aspect-video rounded-xl"
                    alt={item.title}
                  />
                  <p>{item.shortDesc}</p>
                </div>
                <div className=" flex gap-2 flex-wrap text-black">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white text-sm py-2 px-3 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/* <img
                src={item.image}
                className="object-contain sm:block hidden"
                alt={item.title}
              /> */}
            </div>
            <Link
              to={`/services/${item.title}`}
              className="btn rounded lg:translate-y-[5rem] group-hover:translate-y-0 bg-white/40 hover:bg-white hover:shadow-transparent gap-2 w-fit"
            >
              Read More <ArrowRight className="w-5 h-5" />
            </Link>
          </Link>
        ))}
      </div>
      <ArrowLinkButton to="/contact">Request a quote</ArrowLinkButton>
    </div>
  );
};

export default ServicesWeProvide;
