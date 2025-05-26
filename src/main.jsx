import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TransitionProvider } from './context/TransitionContext';
import AppRouter from './router/AppRouter';
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TransitionProvider>
      <AppRouter />
    </TransitionProvider>
  </StrictMode>
);
