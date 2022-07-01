import React from "react";
import image from "../images/dev.gif";
import "./css/Home-section.css"
const Home = ()=>{
    return(
        <section className="hero-home-section">
           <div className="hero-home-image">
              <img src={image}/>
           </div>
           <div className="hero-text-content">
              <div className="title-hero">
                 <h1>Hola mi nombre es sebastian</h1>
              </div>
              <div className="hero-subtitle">
                 <h2>desarollador web frontend</h2>
              </div>
           </div>
        </section>
     );
};
export default Home;