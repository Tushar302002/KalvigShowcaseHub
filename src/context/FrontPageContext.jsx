// TransitionContext.jsx
import { createContext, useContext, useState } from 'react';

const FrontPageContext = createContext();

export const FrontPageProvider = ({ children }) => {
    const [onFrontPage, setOnFrontPage] = useState(true);

  return (
    <FrontPageContext.Provider value={{ onFrontPage, setOnFrontPage }}>
      {children}
    </FrontPageContext.Provider>
  );
};

export const useFrontPageReveal = () => useContext(FrontPageContext);
