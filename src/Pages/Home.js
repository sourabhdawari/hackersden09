import React from "react";
import { Link } from "react-router-dom";
import Homenav from "../Components/Homenav";
export default function Home() {
  return (
    <div className="home">
      <Homenav />
      <header id="header">
        <div class="row socialgroup">
          <div className="col-1 ">
            <div className="col container mb-5">
              <a href="https://twitter.com/hackersden_">
                <i class="fa-brands fa-twitter social"></i>
              </a>
            </div>
            
            <div className="col container mb-5">
              <a href="https://www.linkedin.com/in/imkapilgurav">
                <i class="fa-brands fa-linkedin social"></i>
              </a>
            </div>
            <div className="col container mb-5">
              <a href="https://github.com/hackersden09">
                <i class="fa-brands fa-github social"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className=" name ">
        <div>
          <h1 className="title1">
            {" "}
            <span>I Am</span>
          </h1>

          <h2 className="title2">
            {" "}
            <span>Hackersden 09</span>{" "}
          </h2>
        </div>
      </div>
      <div className="d-flex container justify-content-center ">
     
          <Link to="/about" className="text-dark rounded-pill p-3 h5 gs">
            Get Started
          </Link>
    
      </div>
    </div>
  );
}
