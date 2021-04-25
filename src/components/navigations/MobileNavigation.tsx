import { useState } from 'react';
import { BackDrop } from '../backDrop/BackDrop';

import { Hamburger } from "./hamburger/Hamburger";
import { Sidebar } from "./sidebar/Sidebar";

export const MobileNavigation = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  return (
    <div>
      <Hamburger drawerHandler={setOpenDrawer}  />
      <Sidebar drawerIsOpen={openDrawer} drawerHandler={setOpenDrawer} />
      {openDrawer && <BackDrop drawerHandler={setOpenDrawer} />}
    </div>
  )
}
