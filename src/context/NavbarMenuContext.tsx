'use client';

import { createContext, useContext, useState } from "react";

const NavbarMenuContext = createContext({})

export const NavbarMenuContextProvider = ({ children }:{children:any}) => {
    const [isSidebarOpen,setIsSidebarOpen] = useState<any>(false)


    return (
        <NavbarMenuContext.Provider value={{ isSidebarOpen,setIsSidebarOpen}}>
            {children}
        </NavbarMenuContext.Provider>
    )
};

export const useNavbarMenuContext = () => useContext(NavbarMenuContext);