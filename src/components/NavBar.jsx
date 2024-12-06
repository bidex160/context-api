import { useState, createContext, useContext } from "react"
import NavLinks from "./NavLinks"

export const NavBarContext = createContext()

export const useAppContext = () => useContext(NavBarContext)

 const NavBar = () => {
     const [user, setUser] = useState({ name: 'something' })
     
     const logout = () => {
       setUser(null)
     }

   return (
     <NavBarContext.Provider value={{user, logout}}>
       <nav className="navbar">
         <h5>CONTEXT API</h5>
         <NavLinks />
       </nav>
     </NavBarContext.Provider>
   );
}

export default NavBar