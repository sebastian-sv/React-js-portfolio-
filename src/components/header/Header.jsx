import React, {useState} from "react";
import Menu from "../menu/Menu";
import "./Header.css";
const Header = ()=>{
    
   const showMenu = ()=>{
       const line1 = document.querySelector(".line-top");
       const line2 = document.querySelector(".line-center");
       const line3 = document.querySelector(".line-btn");
       const nav = document.querySelector(".header-menu");
           nav.classList.toggle("active");
           line1.classList.toggle("active");
           line2.classList.toggle("active");
           line3.classList.toggle("active");
   };
    
    return(
        <header className="header">
           <nav className="header-nav container">
               <div className="logo">
                  <p>Sebastián</p>
               </div>
               <Menu/>
               <div className="mobile-menu-btn" onClick={showMenu}>
                   <span className="line-top"></span>
                   <span className="line-center"></span>
                   <span className="line-btn"></span>
               </div>
           </nav>
        </header>
      );
};
export default Header;
