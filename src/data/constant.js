import { CodeXml, NotebookPen, Rocket } from "lucide-react";
import logo from "../assets/logo/logo.png";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.webp";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold-creekcap.webp";
import ThinkRealityImg from "../assets/web-development-portfolio/think-reality.webp";
import AkashMegaMart from "../assets/web-development-portfolio/Akash-Mega-Mart.webp";
import MidwamImmersive from "../assets/web-development-portfolio/Midwam–Immersive-Experience-Design-Company.webp";

// Import all images at the top (App Development)
import RentopBikeAndCarImgapp from "../assets/app-development-portfolio/Rentop–Bike-&-Car-Rentals.webp";
import AkashMegaMartApp from "../assets/app-development-portfolio/Akash-Mega-Mart-Mobile-App.webp";
import FeelItMobileApp from "../assets/app-development-portfolio/FeelIt-Mobile-App.webp";
import KlikomicsMobileApp from "../assets/app-development-portfolio/Klikomics-Mobile-App.webp";
import AutoSnapMobileApp from "../assets/app-development-portfolio/AutoSnap-Mobile-App.webp";
import { AiOutlineUser } from "react-icons/ai";
export { logo };

// company
export const companyDetails = {
  name: "Vertex Agent Ai",
  address:
    "1-62b, Chandrapriya Nagar, Gooty (R.S), Gooty, Ananthapur Dist, Pin: 515402, Andhra Pradesh",
  phone: "+91-9360986603",
  email: "support@vertexagentai.com",
  whatsapplink:
    "https://api.whatsapp.com/send/?phone=9360986603&text&type=phone_number&app_absent=0",
};

// working process
export const workingProcess = [
  {
    step: 1,
    title: "Requirement Gathering & Analysis",
    description:
      "In this phase, we work closely with clients to thoroughly understand their needs and objectives. Our team engages in detailed discussions to define the project's goals and scope, ensuring that all technical and business requirements are clearly documented and analyzed for feasibility.",
    icon: NotebookPen,
  },
  {
    step: 2,
    title: "Design & Development",
    description:
      "Our expert designers create intuitive, user-friendly interfaces while ensuring that the overall user experience remains seamless. The development team then builds robust, scalable, and efficient solutions, adhering to industry best practices and using cutting-edge technologies to meet client expectations.",
    icon: CodeXml,
  },
  {
    step: 3,
    title: "Testing & Deployment",
    description:
      "This phase involves rigorous testing of the software to identify and fix any bugs or performance issues. We conduct various quality assurance checks to ensure the product meets the highest standards. Once finalized, we deploy the solution and provide continuous support to ensure smooth operations.",
    icon: Rocket,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    image: require("../assets/images/landingpage/ecommerce.webp"),
    description:
      "Scalable online stores tailored to your brand and users. We streamline your sales process, optimize customer experience, and integrate with leading payment and inventory systems.",
  },
  {
    id: 2,
    title: "Social Media Platforms",
    image: require("../assets/images/landingpage/socialmedia.webp"),
    description:
      "We build social platforms that drive engagement, enable user interaction, and support seamless content sharing—with features like real-time chat, feeds, and profiles.",
  },
  {
    id: 3,
    title: "Landing Page Websites",
    image: require("../assets/images/landingpage/landing.webp"),
    description:
      "High-converting landing pages that spotlight your offers and drive action. We optimize every pixel for clarity, speed, and conversion.",
  },
  {
    id: 4,
    title: "Custom Business Websites",
    image: require("../assets/images/landingpage/customweb.webp"),
    description:
      "Built from scratch for your specific business needs—our custom websites combine performance with creativity to reflect your brand and drive your KPIs.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landingpage/ios.webp"),
    description:
      "Our skilled team builds robust and performant iOS apps using Swift and Objective-C. We ensure speed, responsiveness, and seamless App Store deployment.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landingpage/android.webp"),
    description:
      "We develop powerful Android apps using Java and Kotlin. From UI to backend, we align your app with business goals and Android best practices.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    image: require("../assets/images/landingpage/flutter.webp"),
    description:
      "With Flutter, we build cross-platform apps that look and feel native. We also address performance challenges on web architecture using smart development strategies.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    image: require("../assets/images/landingpage/hybrid.webp"),
    description:
      "Our hybrid apps deliver wide device compatibility without compromising performance. We craft responsive experiences across both iOS and Android platforms.",
  },
];

// Cybersecurity Services
export const cybersecurityServices = [
  {
    id: 1,
    title: "Web Application Penetration Testing",
    image: require("../assets/images/landingpage/web-vapt.webp"),
    description:
      "Uncover and eliminate vulnerabilities in your web applications using industry-standard VAPT methodologies. We simulate real-world attack scenarios to ensure robust protection.",
  },
  {
    id: 2,
    title: "Mobile Application Security Testing (Android & iOS)",
    image: require("../assets/images/landingpage/mobile-vapt.webp"),
    description:
      "Protect your mobile apps from data leaks, insecure storage, and runtime attacks. We deliver platform-specific security assessments across both Android and iOS ecosystems.",
  },
  {
    id: 3,
    title: "API Security & Endpoint Testing",
    image: require("../assets/images/landingpage/api-security.webp"),
    description:
      "Secure your APIs against injection flaws, broken authentication, and data exposure. We test both documented and undocumented endpoints to ensure secure data exchange.",
  },
  {
    id: 4,
    title: "Source Code Review & Security Analysis",
    image: require("../assets/images/landingpage/source-code.webp"),
    description:
      "Conduct deep-dive audits of your codebase to identify logic flaws, insecure patterns, and overlooked vulnerabilities. Ideal for high-stakes or compliance-driven environments.",
  },
  {
    id: 5,
    title: "Cloud Infrastructure Security Assessment (AWS, Azure, GCP)",
    image: require("../assets/images/landingpage/cloud-security.webp"),
    description:
      "Detect misconfigurations, privilege escalations, and data exposure risks in your cloud environments. We help you harden your cloud setup while maintaining compliance.",
  },
  {
    id: 6,
    title: "Internal & External Network Penetration Testing",
    image: require("../assets/images/landingpage/network-vapt.webp"),
    description:
      "Evaluate your organization’s network defenses from both inside and outside. Our testing reveals weaknesses in access control, segmentation, and system hardening.",
  },
  {
    id: 7,
    title: "Thick Client Security Assessments",
    image: require("../assets/images/landingpage/thick-client.webp"),
    description:
      "Test your desktop applications for memory exploits, insecure data storage, and client-side logic flaws. We assess both application and server interactions for end-to-end protection.",
  },
];

// testimonials
export const testimonials = [
  {
    name: "Sarah M",
    position: "Marketing Director, SecureChain Innovations",
    desc: `Our experience with Vertex Agent Ai was excellent. They completely 
understood our vision and delivered a beautifully designed website that truly 
represents our brand. The team was efficient, responsive, and made the entire 
process easy. Since launching, we've seen a noticeable increase in website traffic 
and user engagement. We’re thrilled with the outcome!`,
    img: require("../assets/images/testimonials/1.jpg"),
  },
  {
    name: "Mark T.",
    position: "Product Manager, FinTech Group",
    desc: `The UX/UI design team at Vertex Agent Ai did an outstanding job on our 
project. They took the time to understand our users’ needs and delivered a design 
that is both functional and visually appealing. Our users find the interface intuitive 
and easy to navigate, and as a result, our engagement rates have improved 
significantly.`,
    img: require("../assets/images/testimonials/2.jpg"),
  },
  {
    name: "Jason K",
    position: "Creative Director, PlayX Studios",
    desc: `We worked with Vertex Agent Ai to develop a mobile and console game, 
and the results were fantastic. From the initial concept to the final product, their 
team was incredibly creative and professional. The game is fun, engaging, and has 
received great reviews from players. We couldn’t be more pleased with the 
outcome and look forward to future collaborations.`,
    img: require("../assets/images/testimonials/3.jpg"),
  },
  {
    name: "Thomas P",
    position: "Managing Director, TechFlow Solutions",
    desc: `From the very beginning, we knew we found the right team at Vertex Agent Ai.
    They worked closely with us to develop a mobile app that was user-friendly 
and fully aligned with our business objectives. Their expertise in blockchain also 
helped streamline our operations, and the results speak for themselves. We’ve seen 
substantial growth in our business thanks to their tailored solutions`,
    img: require("../assets/images/testimonials/4.jpg"),
  },
];
export const cybersecuritytestimonials = [
  {
    name: "Philninan",
    location: "UAE",
    rating: "⭐⭐⭐⭐⭐",
    desc: `Dheeraj was great to work with. We didn’t even have to explain much—he just got what we needed right away. He found issues in our web apps that we completely missed. Super sharp and really easy to deal with. Honestly, one of the best cybersecurity pros I’ve worked with.`,
    icon: <AiOutlineUser />,
  },
  {
    name: "Rumaligeecon",
    location: "UK",
    rating: "⭐⭐⭐⭐⭐",
    desc: `Brilliant service. Dheeraj handled everything professionally and made the whole process feel simple. He knows his stuff, and it shows. I felt confident throughout that our systems were in safe hands.`,
    icon: <AiOutlineUser />,
  },
  {
    name: "Naveedabbasi705",
    location: "Saudi Arabia",
    rating: "⭐⭐⭐⭐⭐",
    desc: `Dheeraj was on point from the start. He understood the scope, gave us a proper rundown of the risks, and was super responsive. He’s not just technical—he communicates really well too, which made things easy on our end.`,
    icon: <AiOutlineUser />,
  },
  {
    name: "Albatrosstechn",
    location: "India",
    rating: "⭐⭐⭐⭐⭐",
    desc: `Top-quality work again! Dheeraj helped us fix some serious gaps in our security. He’s fast, reliable, and we’ve come back to him multiple times now. Definitely someone you want in your corner when it comes to cyber protection.`,
    icon: <AiOutlineUser />,
  },
  {
    name: "Microdigitaltec",
    location: "Qatar",
    rating: "⭐⭐⭐⭐⭐",
    desc: `Very pleased with the way Dheeraj handled our cybersecurity needs. Straightforward, knowledgeable, and always willing to explain things when we had questions. Great experience overall.`,
    icon: <AiOutlineUser />,
  },
  {
    name: "Holidaefiver",
    location: "Thailand",
    rating: "⭐⭐⭐⭐⭐",
    desc: `Always delivers great work. Dheeraj helped us secure our app and explained everything clearly. No fluff, just results. Appreciate the consistency.`,
    icon: <AiOutlineUser />,
  },
  {
    name: "Carlosg610",
    location: "Chile",
    rating: "⭐⭐⭐⭐",
    desc: `Everything went fine. Dheeraj did a good job and was very professional throughout. Took a little longer than I expected, but he kept me in the loop, and the final outcome was solid. Would work with him again.`,
    icon: <AiOutlineUser />,
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 90,
    img: AkashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 91,
    img: MidwamImmersive,
    title: "Midwam ",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: AkashMegaMartApp,
    title: "Akash Mega Mart ",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: FeelItMobileApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: KlikomicsMobileApp,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: AutoSnapMobileApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImgapp,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const appHelpingResult = [
  {
    title: "Collaborative Partnerships",
    desc: "We stay aligned with your vision from idea to launch.",
    styles: "bg-[#7C42DA] lg:rotate-[-18deg] lg:translate-y-[8rem]",
  },
  {
    title: "Agility & Adaptability",
    desc: "Our workflows evolve with your needs—no bottlenecks.",
    styles: "bg-[#F8B000] lg:rotate-[-10deg] lg:translate-y-[3rem]",
  },
  {
    title: "Commitment to Quality",
    desc: "Every feature is crafted to deliver long-term value.",
    styles: "bg-[#B94391]",
  },
  {
    title: "Customer Satisfaction First",
    desc: "We go beyond delivery to ensure continued success.",
    styles: "bg-[#D1B9F7] lg:rotate-[10deg] lg:translate-y-[3rem]",
  },
  {
    title: "Transparency & Accountability",
    desc: "Regular updates, clear timelines, and full ownership of results.",
    styles:
      "bg-[#E85535] col-span-2 md:col-span-1 w-1/2 mx-auto md:w-full lg:rotate-[18deg] lg:translate-y-[8rem]",
  },
];

export const webHelpingResult = [
  {
    title: "Collaborative Partnerships",
    desc: "From ideation to launch, we work as your strategic tech partner.",
    styles: "bg-[#7C42DA] lg:rotate-[-18deg] lg:translate-y-[8rem]",
  },
  {
    title: "Agile and Adaptive",
    desc: "We iterate fast to match your business pace and industry demands.",
    styles: "bg-[#F8B000] lg:rotate-[-10deg] lg:translate-y-[3rem]",
  },
  {
    title: "Quality Assurance at Every Step",
    desc: "Rigorous testing and review cycles ensure bug-free, reliable results.",
    styles: "bg-[#B94391]",
  },
  {
    title: "Customer-Centric Approach",
    desc: "We listen closely and optimize your website to exceed expectations.",
    styles: "bg-[#D1B9F7] lg:rotate-[10deg] lg:translate-y-[3rem]",
  },
  {
    title: "Full Transparency",
    desc: "Expect regular updates, detailed timelines, and accountability from day one.",
    styles:
      "bg-[#E85535] col-span-2 md:col-span-1 w-1/2 mx-auto md:w-full lg:rotate-[18deg] lg:translate-y-[8rem]",
  },
];
