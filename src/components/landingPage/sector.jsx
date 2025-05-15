import { useRef, useState } from "react";
import {
  FaBuilding,
  FaChessKnight,
  FaEllipsisH,
  FaHospital,
  FaLandmark,
  FaMicrochip,
  FaMoneyCheck,
  FaUniversity,
} from "react-icons/fa";

const SectorCard = ({ icon, name }) => {
  return (
    <div
      data-aos="fade-up"
      className="flex-shrink-0 w-40 h-40 hover:scale-125 bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center m-2 transition-all duration-300 hover:shadow-lg hover:bg-blue-50"
    >
      <div className="text-4xl text-blue-600 mb-3">{icon}</div>
      <div className="text-center text-gray-700 font-medium">{name}</div>
    </div>
  );
};

const SectorsScroller = () => {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const sectors = [
    { name: "Healthcare", icon: <FaHospital /> },
    { name: "Finance", icon: <FaMoneyCheck /> },
    { name: "Government", icon: <FaLandmark /> },
    { name: "Banking", icon: <FaUniversity /> },
    { name: "Military", icon: <FaChessKnight /> },
    { name: "National Enterprises", icon: <FaBuilding /> },
    { name: "Technology", icon: <FaMicrochip /> },
    // { name: "And More", icon: <FaEllipsisH /> },
  ];

  const startScrolling = (e) => {
    setIsScrolling(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopScrolling = () => {
    setIsScrolling(false);
  };

  const scroll = (e) => {
    if (!isScrolling) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="w-full py-[4rem]">
      <h3
        data-aos="fade-up"
        className="text-2xl font-bold text-center mb-6 text-white"
      >
        Sectors Covered
      </h3>
      <div
        className="flex overflow-x-auto py-4 hide-scrollbar"
        ref={scrollRef}
        onMouseDown={startScrolling}
        onMouseLeave={stopScrolling}
        onMouseUp={stopScrolling}
        onMouseMove={scroll}
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex gap-4 mx-auto">
          {sectors.map((sector, index) => (
            <SectorCard key={index} icon={sector.icon} name={sector.name} />
          ))}
        </div>
      </div>
      {/* <div className="flex justify-center mt-4">
        <div className="flex space-x-2">
          {sectors.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-600 focus:outline-none"
              onClick={() => {
                const cardWidth = 160; // Width of card + margin
                scrollRef.current.scrollLeft = index * cardWidth;
              }}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default SectorsScroller;
