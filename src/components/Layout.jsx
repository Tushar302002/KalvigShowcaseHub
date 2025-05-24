import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

function Layout({isFrontPageRevealed,setisFrontPageRevealed}) {
  return (
    <div>
      <Navbar isFrontPageRevealed={isFrontPageRevealed} setisFrontPageRevealed={setisFrontPageRevealed}/>
      <Outlet />
    </div>
  );
}

export default Layout;
