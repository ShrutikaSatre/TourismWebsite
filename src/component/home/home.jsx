import React from "react";
import videobg from "../../assets/videobg.mp4";
const home = () => {
    return(
        <section className="home">
            <div className="overlay"> </div>
                <video src={videobg} autoPlay loop muted type="video/mp4"></video>
                
                <div className="homeContent">
                    <div className="textDiv">
                      
                      <span className="smallText">
                        Our Packages
                      </span>

                      <h1 className="homeTitle">
                       Search Your Holiday
                      </h1>

                    </div>
                </div>
       </section>


        );
    }
export default home;
    