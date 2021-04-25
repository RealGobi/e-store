import { useState, useEffect } from 'react';


const getWindowDimension = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {width, height};
};

export const useWindowDimension = () => {
  const [windowDimension, setWindowDimension] = useState(getWindowDimension());

  const handleResize = () => {
    setWindowDimension(getWindowDimension());
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimension;
}