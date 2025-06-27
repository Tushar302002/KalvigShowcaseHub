import React, { useState, useEffect, useMemo } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import { useTransitionDirection } from '../../context/TransitionContext';
import { useFrontPageReveal } from '../../context/FrontPageContext';

function Navbar() {
  const tabs = useMemo(() => [
    { id: '0', name: "All", path: "/" },
    { id: '1', name: "Design", path: "/design" },
    { id: '2', name: "3D", path: "/3d" },
    { id: '3', name: "Development", path: "/development" },
    { id: '4', name: "Case Studies", path: "/casestudies" },
  ], []);

  const location = useLocation();
  const { setDirection } = useTransitionDirection();
  const { setOnFrontPage } = useFrontPageReveal();

  const getTabIdFromPath = (path) => {
    const sortedTabs = [...tabs].sort((a, b) => b.path.length - a.path.length);
    const match = sortedTabs.find(tab => {
      if (tab.path === '/') return path === '/';
      setOnFrontPage(false);
      return path.startsWith(tab.path);
    });
    return match ? match.id : '0';
  };

  const [activeTab, setActiveTab] = useState(() => getTabIdFromPath(location.pathname));

  useEffect(() => {
    setActiveTab(getTabIdFromPath(location.pathname));
  }, [location.pathname]);

  const handleTabChange = (tabID) => {
    const newIndex = parseInt(tabID, 10);
    const currentIndex = parseInt(activeTab, 10);
    setDirection(newIndex > currentIndex ? 'right' : 'left');
    setActiveTab(tabID);
  };

  return (
    <div className="p-6 pb-0">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <img src="assets/Kalvig Logo.svg" alt="Kalvig Logo" className="w-[25%] min-w-[120px]" />
        <div className="flex items-center border border-[#484848] rounded-[25px] px-5 py-2 w-full md:w-[60%] bg-[#181818] focus-within:border-blue-500 group transition-all">
          <AiOutlineSearch size={20} className="transition-transform duration-200 group-focus-within:scale-125" aria-label="Search Icon" />
          <input
            className="border-none outline-none bg-transparent px-3 text-[10px] w-full"
            placeholder="Search 3D, Web Design, etc..."
            aria-label="Search input"
          />
        </div>
      </div>

      <h1 className="text-[8px] sm:text-[15px] md:text-[20px] lg:text-[31px] xl:text-[36px] mt-4">
        Curated Portal for Demos: Case Studies & Internal Workflow
      </h1>

      <div className="flex gap-2 mt-2 border-b border-white border-opacity-20 overflow-x-auto">
        {tabs.map((tab) => (
          <Link key={tab.id} to={tab.path}>
            <span
              className={`text-[10px] md:text-[16px] lg:text-[24px] xl:text-[36px] px-2 cursor-pointer whitespace-nowrap ${activeTab === tab.id ? 'border-b-2 border-white' : ''}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
