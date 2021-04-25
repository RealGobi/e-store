import React, { useState, createContext } from 'react';

export const PlanetsContext = createContext<any>(null);

export const PlanetsProvider = (props: {children?: React.ReactChild}) => {
  const [planets, setPlanets] = useState<any>();
  const { children } = props;

  return (
    <PlanetsContext.Provider value={[planets, setPlanets]}>
      {children}
    </PlanetsContext.Provider>
  )
};