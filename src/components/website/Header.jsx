import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import "react-modern-drawer/dist/index.css";
import { X } from "lucide-react";
import { companyDetails, logo } from "../../data/constant";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about-us",
  },
  {
    name: "Services",
    path: "/services",
    children: [
      {
        path: "/web-development",
        name: "Web Development",
      },
      {
        path: "/app-development",
        name: "App Development",
      },
      {
        path: "/cyber-security",
        name: "Cyber Security",
      },
      {
        path: "/services",
        name: "Other Services",
      },
    ],
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
  // {
  //   name: "Contact Us",
  //   path: "/contact",
  // },
];

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <div className="fixed top-0 left-0 py-4 z-50 w-full backdrop-blur-sm bg-darkBackground">
      <div className="flex wrapper items-center gap-8 justify-between">
        <Link to="/" className="cursor-pointer">
          <img
            loading="lazy"
            src={logo}
            alt="logo"
            width="75"
            height="75"
            className="h-[3.5rem] lg:h-[5rem] object-contain"
          />
        </Link>
        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) =>
            link.name === "Services" ? (
              <div
                key={link.path}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <Link
                  to={`${link.path}`}
                  className={`link text-white/70 ${
                    pathname === link.path && "font-semibold text-secondary "
                  }`}
                >
                  {link.name}
                </Link>

                <div
                  className={`absolute top-full left-0 mt-5 bg-white text-black shadow-md rounded-md py-2 min-w-48 z-10 overflow-hidden transition-all duration-300 ease-in-out ${
                    isServicesOpen
                      ? "max-h-56 opacity-100"
                      : "max-h-0 opacity-0 py-0"
                  }`}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className={`link text-white/70 ${
                  pathname === link.path && "font-semibold text-secondary "
                }`}
              >
                {link.name}
              </Link>
            )
          )}
          <Link to={"/contact"} className="primary-btn">
            Contact Us
          </Link>
          <Link to={companyDetails.whatsapplink} className="primary-btn">
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
        className="z-10  bg-black"
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
            link.name === "Services" ? (
              <div key={link.path} className="relative">
                <Link to={`${link.path}`} className="text-2xl font-medium ">
                  {link.name}
                </Link>

                <div
                  className={`  text-black shadow-md rounded-md  min-w-48 overflow-hidden transition-all duration-300 ease-in-out `}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      className="block px-4 py-2 text-sm text-white "
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                onClick={() => setIsOpen(false)}
                key={link.name}
                to={link.path}
                className="text-2xl font-medium "
              >
                {link.name}
              </Link>
            )
          )}
          <Link to={"/contact"} className="primary-btn">
            Contact Us
          </Link>
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
