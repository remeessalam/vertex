import { Link as Scroll } from "react-scroll";
import {
  FaShieldAlt,
  FaUserTie,
  FaHome,
  FaPuzzlePiece,
  FaMoneyBillWave,
  FaHeadset,
  FaTrophy,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

const WhyWorkWithUsCyberSecurity = () => {
  const benefits = [
    {
      icon: <FaUserTie className="text-4xl text-blue-600 mb-4" />,
      title: "Experienced team with deep industry knowledge",
      description:
        "Our cybersecurity experts bring years of industry experience to every project.",
    },
    {
      icon: <MdSecurity className="text-4xl text-blue-600 mb-4" />,
      title: "Certified professionals (no freelancers)",
      description:
        "Our team holds prestigious certifications including OSCP, CRTP, CEH, and more.",
    },
    {
      icon: <FaHome className="text-4xl text-blue-600 mb-4" />,
      title: "In-house team — no outsourcing",
      description:
        "All work is performed by our dedicated in-house security professionals.",
    },
    {
      icon: <FaPuzzlePiece className="text-4xl text-blue-600 mb-4" />,
      title: "Custom solutions designed for your specific needs",
      description:
        "We create tailored security strategies addressing your unique challenges.",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-blue-600 mb-4" />,
      title: "Transparent processes with no hidden costs",
      description:
        "We maintain complete transparency in our methods and pricing.",
    },
    {
      icon: <FaHeadset className="text-4xl text-blue-600 mb-4" />,
      title: "Reliable support long after project delivery",
      description:
        "Our commitment extends beyond project completion with ongoing support.",
    },
    {
      icon: <FaTrophy className="text-4xl text-blue-600 mb-4" />,
      title: "Proven track record of successful engagements",
      description:
        "Our history of successful projects demonstrates our expertise and reliability.",
    },
  ];

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="wrapper">
        <div className="text-center mb-16">
          <div
            data-aos="fade-up"
            className="inline-block p-3 rounded-full bg-blue-100 mb-4"
          >
            <FaShieldAlt className="text-3xl text-blue-600" />
          </div>
          <h2
            data-aos="fade-up"
            className="text-4xl font-extrabold text-white sm:text-5xl mb-4"
          >
            Why Work with Us
          </h2>
          <div data-aos="fade-up" className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-200">
              We specialize in delivering high-quality cybersecurity services
              designed to address the evolving challenges of today's digital
              landscape. Our expert team is composed of certified professionals
              with esteemed credentials including{" "}
              <span className="font-bold">OSCP, CRTP, CEH</span>, and more.
              Leveraging years of hands-on experience in penetration testing,
              vulnerability assessment, and strategic security consulting, we
              provide clear, actionable solutions that empower businesses to
              operate securely. Our focus on excellence, integrity, and
              long-term client relationships positions us as a trusted ally in
              securing your digital environment.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center"
            >
              {benefit.icon}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
          <Scroll
            to={"contact"}
            spy={true}
            smooth={true}
            offset={-90}
            duration={1000}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
          >
            Contact Our Security Team
          </Scroll>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUsCyberSecurity;
