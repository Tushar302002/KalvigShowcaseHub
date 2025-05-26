import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './AppRouter.jsx';
import { TransitionProvider } from './TransitionContext.jsx'; // 👈

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TransitionProvider>
      <AppRouter />
    </TransitionProvider>
  </StrictMode>
);
