import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './components/Hero';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
  </StrictMode>
);