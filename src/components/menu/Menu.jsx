import React from "react";
import "./Menu.css";
function Menu(){
    return(
          <div className="header-menu">
            <ul>
               <li>
                   <a href="#">Inicio</a>
               </li>
               <li>
                   <a href="#">habilidades</a>
               </li>
               <li>
                   <a href="#">portfolio</a>
               </li>
               <li>
                   <a href="#">contáctame</a>
               </li>
            </ul>
          </div>
      );
};
export default Menu;
