import React, { useEffect, useRef, useState } from 'react';
import './MainPage.css';

const DynamicText = ({ text }) => {
  const [fontSize, setFontSize] = useState('1rem');
  const textRef = useRef(null);

  useEffect(() => {
    const adjustFontSize = () => {
      const containerWidth = textRef.current.parentElement.offsetWidth;
      const textWidth = textRef.current.scrollWidth;
      const newSize = Math.max(10, (containerWidth / textWidth) * 1.5); // Adjust as needed
      setFontSize(`${newSize}rem`);
    };

    adjustFontSize();
    window.addEventListener('resize', adjustFontSize);

    return () => window.removeEventListener('resize', adjustFontSize);
  }, [text]);

  return (
    <div className="dynamic-text" style={{ fontSize }} ref={textRef}>
      {text}
    </div>
  );
};

export default DynamicText;