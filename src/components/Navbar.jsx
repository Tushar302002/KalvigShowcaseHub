import React, { useState, useEffect } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import { useTransitionDirection } from '../TransitionContext';

function Navbar({isFrontPageRevealed,setisFrontPageRevealed}) {
  const tabs = [
    { id: '0', name: "All", path: "/" },
    { id: '1', name: "Design", path: "/design" },
    { id: '2', name: "3D", path: "/3d" },
    { id: '3', name: "Development", path: "/development" },
    { id: '4', name: "Case Studies", path: "/casestudies" },
  ];
  const location = useLocation();
  const { setDirection } = useTransitionDirection();
  
  // Initialize from URL to avoid flash
  const getTabIdFromPath = (path) => {
    // Sort tabs by path length (longer first) to match nested paths properly
    const sortedTabs = [...tabs].sort((a, b) => b.path.length - a.path.length);
  
    const match = sortedTabs.find(tab => {
      if (tab.path === '/') {
        return path === '/';
      }
      setisFrontPageRevealed(true)
      return path.startsWith(tab.path);
    });
  
    return match ? match.id : '0';
  };

  const [activeTab, setActiveTab] = useState(() => getTabIdFromPath(location.pathname));

  // Update tab on route change (e.g. via Link navigation)
  useEffect(() => {
    setActiveTab(getTabIdFromPath(location.pathname));
  }, [location.pathname]);

  function handleTabChange(tabID) {
    const newIndex = parseInt(tabID, 10);
    const currentIndex = parseInt(activeTab, 10);

    if (newIndex > currentIndex) {
      setDirection('right');
    } else if (newIndex < currentIndex) {
      setDirection('left');
    }
    setActiveTab(tabID)
  }

  return (
    <div className='p-6 pb-0'>
      <div className='flex justify-between'>
        <img src="assets/Kalvig Logo.svg" alt="Kalvig"
          className='w-[25%]' />
        <div className='flex self-start border-[1px] border-[#484848] rounded-[25px] px-5 py-2 items-center bg-[#181818] focus-within:border-blue-500 group transition-all'>
          <AiOutlineSearch size={20} className='transform transition-transform duration-200 group-focus-within:scale-125' />
          <input className='border-none outline-none bg-transparent px-3 text-[16px] w-[250px]' placeholder='Search 3D,Web Design,etc...' />
        </div>
      </div>
      <h1 style={{ fontSize: "var(--font-size-xl)" }}>Curated Portal for Demos: Case Studies & Internal Workflow</h1>
      <div className='flex gap-2 mt-2 border-b-[1px] border-white border-opacity-20'>
        {tabs.map((tab) => (
          <Link key={tab.id} to={tab.path}>
            <span
              className={`border-white-500 cursor-pointer px-2 ${activeTab == tab.id ? 'border-b-2 ' : ''}`}
              style={{ fontSize: "var(--font-size-md)" }}
              onClick={() => handleTabChange(tab.id)}>{tab.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar