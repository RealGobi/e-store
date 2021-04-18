import React, { useState, createContext } from 'react';

export const ModeContext = createContext<any>(null);

export const ModeProvider = (props: {children?: React.ReactChild}) => {
  const [checked, setChecked] = useState(false);
  const { children } = props;

  return (
    <ModeContext.Provider value={[checked, setChecked]}>
      {children}
    </ModeContext.Provider>
  )
};