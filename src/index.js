import React from 'react';
import { createRoot } from 'react-dom/client';
import MainPage from './MainPage';

// Create a root.
const root = createRoot(document.getElementById('root'));

// Render the main page component.
root.render(<MainPage />);