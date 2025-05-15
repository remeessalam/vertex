import { useState, useEffect } from "react";
import { FaGlobeAmericas, FaShieldAlt, FaClock, FaSync } from "react-icons/fa";

const StatCard = ({ icon, count, target, title, suffix }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    // If the component is visible, start the counter
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const duration = 2000; // 2 seconds
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const percentage = Math.min(progress / duration, 1);

            setCurrentCount(Math.floor(percentage * target));

            if (percentage < 1) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(
      document.getElementById(`stat-${title.replace(/\s+/g, "-")}`)
    );

    return () => observer.disconnect();
  }, [target, title]);

  return (
    <div
      id={`stat-${title.replace(/\s+/g, "-")}`}
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:transform hover:scale-105"
    >
      <div className="text-4xl text-blue-600 mb-4">{icon}</div>
      <div className="text-3xl font-bold mb-2 text-gray-800">
        {currentCount}
        {suffix}
      </div>
      <div className="text-gray-600 text-center font-medium">{title}</div>
    </div>
  );
};

const StatsCounter = () => {
  const stats = [
    {
      icon: <FaGlobeAmericas />,
      target: 10,
      title: "Countries Served",
      suffix: "+",
    },
    {
      icon: <FaShieldAlt />,
      target: 200,
      title: "Cybersecurity Projects Delivered",
      suffix: "+",
    },
    {
      icon: <FaClock />,
      target: 5,
      title: "Years of Industry Experience",
      suffix: "+",
    },
    {
      icon: <FaSync />,
      target: 90,
      title: "Client Retention Rate",
      suffix: "%",
    },
  ];

  return (
    <div className="  flex items-center justify-center py-[4rem]">
      <div className="container mx-auto">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
        >
          Our Achievements
        </h2>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              count={0}
              target={stat.target}
              title={stat.title}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default StatsCounter;
