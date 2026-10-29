import { HiBars3BottomRight } from "react-icons/hi2";
import "./NavBar.css"; 
import { useState } from "react";
import { NavLink } from "react-router-dom";
import type { NavBarProps } from "../../../interfaces";

const NavBar = ({logoIcon,items,btn}: NavBarProps) => {
    const [showMenu , setShowMenu] = useState(false)
  return (
    <>
    <nav>
        
     <div className="nav-logo">
         <img  src={logoIcon} alt="" />
     </div>
       <div className="nav-elements">
         <ul className="navItem">
            {items.map((item , index) => {
                return(
                    <li  key={index}><NavLink to={item.route} className={({isActive})=>`item text-medium-20 ${isActive ? "active" : ""}`}>{item.content}</NavLink></li>
                )
            })}
        </ul>
        <button className="btn text-medium-20">{btn}</button>
       </div>
     
      <HiBars3BottomRight className="bars-icon" onClick={()=>setShowMenu(!showMenu)}/>
    </nav>
    <div className={`nav-menu ${showMenu ? "show" : ""}`}>
         <ul >
            {items.map((item , index) => {
                return(
                    <li  key={index}><NavLink to={item.route} className={({isActive})=>` text-medium-20 ${isActive ? "active" : ""}`}>{item.content}</NavLink></li>
                )
            })}
        </ul>
        <button className=" nav-menu-btn text-medium-20">{btn}</button>
       </div>
     
    </>
    
  )
}

export default NavBar
