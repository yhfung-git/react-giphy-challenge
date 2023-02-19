import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/app.jsx'

import '../assets/stylesheets/application.scss';


const container = document.getElementById('root');
const root = createRoot(container);
if (root) {
  root.render(<App />);
}