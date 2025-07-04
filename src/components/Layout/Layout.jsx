import React, { useEffect, useRef } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useTransitionDirection } from '../../context/TransitionContext';

function Layout() {
  const containerRef = useRef(null);
  const location = useLocation();
  const { direction } = useTransitionDirection();

  useEffect(() => {
    const el = containerRef.current;

    gsap.fromTo(
      el,
      {
        x: direction === 'right' ? '100%' : '-100%',
        opacity: 0
      },
      {
        x: '0%',
        opacity: 1,
        duration: 0.5,
        ease: 'power2.out'
      }
    );
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <div ref={containerRef}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
