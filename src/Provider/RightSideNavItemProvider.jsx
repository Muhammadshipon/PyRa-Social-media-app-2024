import { createContext, useState } from "react";

export const NavItemsContext = createContext(null);

const RightSideNavItemProvider = ({children}) => {
  const [menuItem,setMenuItem] = useState('');
  const navItems ={
    menuItem,
    setMenuItem
  }
  return (
    <NavItemsContext.Provider value={navItems}>
      {children}
    </NavItemsContext.Provider>
  );
};

export default RightSideNavItemProvider;