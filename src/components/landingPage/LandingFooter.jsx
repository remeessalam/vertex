import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { companyDetails } from "../../data/constant";

const LandingFooter = () => {
  return (
    <div className="py-[3rem] overflow-hidden border-t border-secondary/50 relative">
      <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-8 w-[12rem] aspect-square bg-primary/50 blur-[100px]"></div>
      <div className="absolute -z-10 top-1/2 -translate-y-1/2 right-8 w-[12rem] aspect-square bg-secondary/50 blur-[100px]"></div>
      <div className="wrapper flex sm:flex-row flex-col sm:text-start text-center justify-between gap-10">
        <div>
          <p className="mb-2">
            VERTEX AGENT AI - Powered by AGENTICS AI LABS LLP
          </p>

          <p className="">
            Copyright &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
        <div className="flex gap-4 items-center sm:justify-end justify-center">
          <Link to={companyDetails.linkedIn} className="link">
            <Linkedin className="w-6 h-6 link" strokeWidth={1.5} />
          </Link>
          <Link to={companyDetails.instagram} className="link">
            <Instagram className="w-6 h-6 link" strokeWidth={1.5} />
          </Link>
          <Link to={companyDetails.facebook} className="link">
            <Facebook className="w-6 h-6 link" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
