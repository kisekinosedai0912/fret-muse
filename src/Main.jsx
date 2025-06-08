import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));
root.render(
  <>  
    <StrictMode>
      <App />
    </StrictMode>
  </>
);
// Renamed Main.jsx into main.jsx for vite to compile.