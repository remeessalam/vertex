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
export { logo };

// company
export const companyDetails = {
  name: "AI Company",
  address:
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non voluptatem vero aut earum molestias recusandae.",
  phone: "+0000000000",
  email: "abc@example.com",
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
      "Empowering your online business with tailored ecommerce solutions. Our platforms boost customer engagement, streamline operations, and drive revenue growth. ",
  },
  {
    id: 2,
    title: "Social Media Websites",
    image: require("../assets/images/landingpage/socialmedia.webp"),
    description:
      "Get custom social media websites that captivate and engage your audience, driving growth and brand loyalty effortlessly",
  },
  {
    id: 3,
    title: "Landing Websites",
    image: require("../assets/images/landingpage/landing.webp"),
    description:
      " Creating high-converting landing pages that capture attention and drive action. Tailored designs that showcase your brand’s message and maximize conversions.",
  },
  {
    id: 4,
    title: "Custom Websites",
    image: require("../assets/images/landingpage/customweb.webp"),
    description:
      "Delivering tailor-made websites designed to meet your unique business needs. Our solutions blend creativity and functionality for an exceptional online experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    image: require("../assets/images/landingpage/ios.webp"),
    description:
      "Our skilled developers work with both Swift and Objective-C to build robust and efficient apps. We optimize your app for performance, speed, and responsiveness.",
  },
  {
    id: 2,
    title: "Android App Development",
    image: require("../assets/images/landingpage/android.webp"),
    description:
      "We design and develop tailor-made Android apps that align with your vision and business goals.Proficient in both Java and Kotlin, we build robust and efficient apps.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    image: require("../assets/images/landingpage/flutter.webp"),
    description:
      "Flutter allows you to build apps for both iOS and Android using a single codebase. While Flutter's default web app architecture presents challenges, we can overcome them with smart strategies. ",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    image: require("../assets/images/landingpage/hybrid.webp"),
    description:
      "We build feature-rich hybrid apps tailored to your business needs. We create mobile-friendly apps that work seamlessly across iOS and Android devices.",
  },
];

// testimonials
export const testimonials = [
  {
    name: "Sarah M",
    position: "Marketing Director, SecureChain Innovations",
    desc: `Our experience with AI Company was excellent. They completely 
understood our vision and delivered a beautifully designed website that truly 
represents our brand. The team was efficient, responsive, and made the entire 
process easy. Since launching, we've seen a noticeable increase in website traffic 
and user engagement. We’re thrilled with the outcome!`,
    img: require("../assets/images/testimonials/1.jpg"),
  },
  {
    name: "Mark T.",
    position: "Product Manager, FinTech Group",
    desc: `The UX/UI design team at AI Company did an outstanding job on our 
project. They took the time to understand our users’ needs and delivered a design 
that is both functional and visually appealing. Our users find the interface intuitive 
and easy to navigate, and as a result, our engagement rates have improved 
significantly.`,
    img: require("../assets/images/testimonials/2.jpg"),
  },
  {
    name: "Jason K",
    position: "Creative Director, PlayX Studios",
    desc: `We worked with AI Company to develop a mobile and console game, 
and the results were fantastic. From the initial concept to the final product, their 
team was incredibly creative and professional. The game is fun, engaging, and has 
received great reviews from players. We couldn’t be more pleased with the 
outcome and look forward to future collaborations.`,
    img: require("../assets/images/testimonials/3.jpg"),
  },
  {
    name: "Thomas P",
    position: "Managing Director, TechFlow Solutions",
    desc: `From the very beginning, we knew we found the right team at AI Company.
    They worked closely with us to develop a mobile app that was user-friendly 
and fully aligned with our business objectives. Their expertise in blockchain also 
helped streamline our operations, and the results speak for themselves. We’ve seen 
substantial growth in our business thanks to their tailored solutions`,
    img: require("../assets/images/testimonials/4.jpg"),
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
