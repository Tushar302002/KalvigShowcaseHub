import React, { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Navbar() {
  const tabs = [
    { id: '0', name: "All" , path : "/"},
    { id: '1', name: "Design" , path : "/design"},
    { id: '2', name: "3D" , path : "/3d"},
    { id: '3', name: "Development" , path : "/development"},
    { id: '4', name: "Case Studies" , path : "/casestudies"},
  ];
  const [activeTab, setActiveTab] = useState(0)
  function handleTabChange(tabID) {
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
      <h1 style={{ fontSize: "var(--font-size-md)" }}>Curated Portal for Demos: Case Studies & Internal Workflow</h1>
      <div className='flex gap-2 mt-2 border-b-[1px] border-white border-opacity-20'>
        {tabs.map((tab) => (
          <Link key={tab.id} to={tab.path}>
            <span
              className={`border-white-500 cursor-pointer px-2 ${activeTab == tab.id ? 'border-b-2 ' : ''}`}
              onClick={() => handleTabChange(tab.id)}>{tab.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar