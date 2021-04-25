import React, { useState, createContext, useEffect } from 'react';
import StarwarsApiService from '../api/service/StarwarsApiService';

export const StarShipContext = createContext<any>(null);

export const StarShipProvider = (props: {children?: React.ReactChild}) => {
  const [starShips, setStarShips] = useState<any>();
  const { children } = props;

  useEffect(() => {
    fetchAllShips();
  }, []);
  
  const fetchAllShips = async () => {
    try {
      const res = await StarwarsApiService.getStarShip()
      setStarShips(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StarShipContext.Provider value={[starShips, setStarShips]}>
      {children}
    </StarShipContext.Provider>
  )
};