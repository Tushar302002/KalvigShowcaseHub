// TransitionContext.jsx
import { createContext, useContext, useState } from 'react';

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const [direction, setDirection] = useState('right'); // 'left' or 'right'

  return (
    <TransitionContext.Provider value={{ direction, setDirection }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionDirection = () => useContext(TransitionContext);
