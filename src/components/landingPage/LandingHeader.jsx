import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import "react-modern-drawer/dist/index.css";
import { X } from "lucide-react";
import { companyDetails, logo } from "../../data/constant";

const links = [
  {
    name: "Home",
    path: "/",
    scroll: false,
  },
  // {
  //   name: "About Us",
  //   path: "about",
  //   scroll: true,
  // },
  {
    name: "Services",
    path: "services",
    scroll: true,
  },
  {
    name: "Contact Us",
    path: "contact",
    scroll: true,
  },
];

const LandingHeader = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { pathname } = useLocation();
  return (
    <div className="fixed top-0 left-0 py-4 z-50 w-full backdrop-blur-sm bg-darkBackground">
      <div className="flex wrapper items-center gap-8 justify-between">
        <Scroll
          to="banner"
          spy
          smooth
          duration={1000}
          className="cursor-pointer"
        >
          <img
            loading="lazy"
            src={logo}
            alt="logo"
            width="75"
            height="75"
            className="h-[3.5rem] lg:h-[5rem] object-contain"
          />
        </Scroll>
        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) =>
            link.scroll ? (
              <Scroll
                key={link.name}
                to={link.path}
                className="link text-white/70"
                spy={true}
                smooth={true}
                offset={-90}
                duration={1000}
                activeClass="font-semibold text-secondary text-white"
              >
                {link.name}
              </Scroll>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`link text-white/70 ${
                  pathname === link.path && "font-semibold text-white"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            to={`https://wa.me/${companyDetails.phone}`}
            className="primary-btn"
          >
            Let's Chat <i class="fa fa-whatsapp text-xl"></i>
          </Link>
        </div>
        <div
          className="block lg:hidden justify-self-end"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Hamburger
            color="#ffffff"
            size="26"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="z-10 p-2 EZDrawer"
      >
        <div className="mb-6 flex items-center justify-between px-[.7rem] py-[.4rem]">
          <img
            src={logo}
            width="auto"
            height="auto"
            alt="logo"
            className="h-[2.5rem] object-contain"
          />
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <div className="py-4 px-7 flex flex-col gap-4 text-white">
          {links.map((link) =>
            link.scroll ? (
              <Scroll
                onClick={() => setIsOpen(false)}
                key={link.name}
                to={link.path}
                className="text-2xl font-medium"
                spy={true}
                smooth={true}
                offset={-80}
                duration={1000}
              >
                {link.name}
              </Scroll>
            ) : (
              ""
              // <Link
              //   onClick={() => setIsOpen(false)}
              //   key={link.name}
              //   to={link.path}
              //   className="text-2xl font-medium"
              // >
              //   {link.name}
              // </Link>
            )
          )}
        </div>
      </Drawer>
    </div>
  );
};

export default LandingHeader;
