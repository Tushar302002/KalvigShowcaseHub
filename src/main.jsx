import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TransitionProvider } from './context/TransitionContext';
import AppRouter from './router/AppRouter';
import { FrontPageProvider } from './context/FrontPageContext';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FrontPageProvider >
      <TransitionProvider>
        <AppRouter />
      </TransitionProvider>
    </FrontPageProvider>
  </StrictMode>
);
