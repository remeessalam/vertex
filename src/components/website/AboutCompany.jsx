import { useState } from "react";
import {
  Users,
  Lightbulb,
  CodeSquare,
  Database,
  Cloud,
  MessageSquare,
  ArrowRight,
  Shield,
} from "lucide-react";
import aboutus from "../../assets/images/aboutus-3.webp";
import homeaboutimg from "../../assets/images/home-about-img.webp";
const AboutCompany = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const services = [
    {
      icon: <CodeSquare className="w-10 h-10 text-primary" />,
      title: "Website Development",
      description:
        "Clean, fast, and SEO-optimized websites built with a user-first approach",
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform apps that work seamlessly on all devices",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-primary" />,
      title: "AI Development",
      description:
        "Custom machine learning and AI solutions that automate and enhance decision-making",
    },
    {
      icon: <Database className="w-10 h-10 text-primary" />,
      title: "Data Analytics and BI",
      description: "Transforming raw data into clear, actionable insights",
    },
    {
      icon: <Cloud className="w-10 h-10 text-primary" />,
      title: "Cloud Computing",
      description:
        "Scalable cloud solutions designed to grow alongside your business",
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-primary" />,
      title: "AI Chatbots and Voice",
      description:
        "Intelligent conversational tools to engage and support your customers",
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Cyber Security",
      description:
        "Comprehensive security solutions to protect your business from digital threats",
    },
  ];

  const whyChooseUs = [
    "Experience That Matters – With years of experience across diverse industries",
    "Solutions Built to Last – We design with performance, security, and scalability",
    "Practical, Custom Approach – No generic answers—just thoughtful, goal-driven development",
    "Straightforward Communication – We believe in clear, honest dialogue",
    "Reliable Delivery – Known for staying on schedule, we consistently deliver",
  ];

  return (
    <div className=" text-white">
      {/* About Us Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About VERTEX AGENT AI</h2>
            <p className="mb-4">
              At <strong>VERTEX AGENT AI</strong>, we're not just another
              development company. We partner with businesses of all sizes to
              design custom solutions that are efficient, scalable, and
              future-ready.
            </p>
            <p className="mb-4">
              Our approach goes beyond writing code; we craft digital
              experiences that solve real-world challenges. From responsive
              websites to powerful mobile apps and AI systems, we focus on
              building tools that support your business through every stage of
              growth.
            </p>
            <p>
              We stay hands-on throughout the entire process, ensuring
              transparency, collaboration, and measurable results.
            </p>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
            <img
              src={aboutus}
              alt="Our team at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-secondary text-black py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">What We Do</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
            We bring a full spectrum of technical capabilities under one roof,
            from front-end development to cloud computing, data analytics, and
            AI solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How We Work Section with Image */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-xl">
            <img
              src={homeaboutimg}
              alt="Our work process"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">How We Work</h2>
            <p className="mb-4">
              Every project begins with a conversation. We take the time to
              understand your business, your industry, and the unique challenges
              you face.
            </p>
            <p className="mb-4">
              From there, we work with you to create a clear, actionable
              roadmap, delivering high-quality work that's on time and aligned
              with your goals.
            </p>
            <p>
              We don't believe in templates or one-size-fits-all solutions.
              Instead, we tailor our approach to meet your specific needs,
              leveraging our extensive experience in both development and
              digital strategy to ensure your success.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-darkBackground text-secondary py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Clients Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, index) => {
              const [title, description] = reason.split("–");
              return (
                <div
                  key={index}
                  className="p-6 bg-opacity-20 bg-primary rounded-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">{title.trim()}</h3>
                  <p className="text-secondary opacity-80">
                    {description.trim()}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mission, Vision and Future Tabs */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === "mission"
                  ? "bg-primary text-secondary"
                  : "bg-secondary text-gray-700"
              }`}
              onClick={() => setActiveTab("mission")}
            >
              Our Mission
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "vision"
                  ? "bg-primary text-secondary"
                  : "bg-secondary text-gray-700"
              }`}
              onClick={() => setActiveTab("vision")}
            >
              Our Vision
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === "future"
                  ? "bg-primary text-secondary"
                  : "bg-secondary text-gray-700"
              }`}
              onClick={() => setActiveTab("future")}
            >
              Looking Ahead
            </button>
          </div>
        </div>

        <div className="bg-secondary text-black p-8 rounded-lg shadow-md">
          {activeTab === "mission" && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg">
                To create digital solutions that empower businesses to operate
                more efficiently, grow more rapidly, and serve their customers
                better.
              </p>
            </div>
          )}

          {activeTab === "vision" && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg">
                To be a trusted technology partner for forward-thinking
                companies, providing expert solutions, reliable support, and a
                long-term commitment to their success.
              </p>
            </div>
          )}

          {activeTab === "future" && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Looking Ahead</h3>
              <p className="text-lg mb-4">
                The tech landscape is constantly evolving—and so are we. Our
                team is committed to staying ahead of industry trends,
                continuously exploring new tools, and bringing the most
                relevant, effective solutions to our clients.
              </p>
              <p className="text-lg">
                Whether it's the next big thing in artificial intelligence,
                cutting-edge cloud platforms, or smarter data analytics, we're
                always on the pulse of what's next.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Call To Action */}
      <div className=" py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            If you're looking for a technology partner who understands your
            business goals, delivers high-quality results, and is dedicated to
            supporting your long-term success, we'd love to connect.
          </p>
          <button className="bg-primary hover:bg-opacity-90 text-secondary font-medium py-3 px-8 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
