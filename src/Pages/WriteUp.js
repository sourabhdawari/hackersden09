import React from "react";

import { Link } from "react-router-dom";
export default function WriteUp() {
  return (
    <div className="about pb-5">
      <div className='navrest'>

<nav class="navbar navbar-expand-lg text-center navbar-light bg-transparent">

<button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse text-center " id="navbarSupportedContent">
<ul class="navbar-nav mr-auto">
<li class="nav-item ">
<Link class="nav-link" to="/">Home <i class="fa fa-home"></i></Link>
</li>
<li class="nav-item  ">
<Link class="nav-link" to="/about">About <i class="fa-solid fa-circle-info"></i></Link>
</li>
<li class="nav-item  ">
<Link class="nav-link active" to="/blog">Write Up <i class="fa-solid fa-code"></i></Link>
</li>
<li class="nav-item  ">
<Link class="nav-link" to="/contact">contact <i class="fa-solid fa-phone"></i></Link>
</li>
</ul>

</div>
</nav>
      </div>
      <section id="about" className="rounded pb-3">
        <section className="">
          <div>
            <div className=" m-5 d-flex justify-content-center ">
              <div className="text-center blogtitle ct ">
                <h1 className="h1 mt-5">
                  <i class="fa fa-terminal"></i> Hackersden Writeup Series.
                </h1>
                <h3 className="text-light mt-1 mb-5">
                  A collection of awesome write-ups of Infosec.
                </h3>
              </div>
            </div>
          
          </div>
        </section>

        <section className="">
          <div className="">
            <div class="text-start m-5">
              <div class=" text-light">
                <h2 class="ct">{">"} Hey Infosec focks</h2>

                <h5>
                  I love to find 🔍 security issues in web applications, API,
                  Android, IOS, Hardware, Firmware 🕸️ and contribute to the
                  infosec community in any way I can.
                </h5>
                <div className="d-flex mt-5 container justify-content-start">
                  <div class="p-2 github rounded-pill text-center">
                    <a href="https://github.com/hackersden09/My_Blog" className="text-light gitlink p-2">
                    <i class="fa-brands fa-github"></i> view on GITHUB
                    </a>
                  </div>
                </div>
                <img
                  className="blogmainimg mt-5"
                  src={require("../assets/img/Hackersden.gif")}
                  alt=""
                />
              </div>
              
            </div>
          </div>
          <div className="container mt-5 mb-5 blogtitle">
            <span className="h1 ">
              <i class="fa fa-book text-danger"> </i> 
              <span className="text-light"> Web Write-ups</span>
            </span>
            <h5 className="mt-5 mb-5 ct">
              {">>"}
              <Link className="ct bloglink">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, facilis.
              </Link>
            </h5>
            <h5 className="mt-3 mb-5 ct">
              {">>"}
              <Link className="ct bloglink">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, facilis.
              </Link>
            </h5>
            <h5 className="mt-3 mb-5 ct">
              {">>"}
              <Link className="ct bloglink">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, facilis.
              </Link>
            </h5>
          </div>
          <div className="container mt-5 mb-5 blogtitle">
            <span className="h1 ">
              <i class="fa fa-book text-danger"> </i> 
              <span className="text-light"> API Write-ups</span>
            </span>
            <h5 className="mt-5 mb-5 ct">
              {">>"}
              <Link className="ct bloglink">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, facilis.
              </Link>
            </h5>
            <h5 className="mt-3 mb-5 ct">
              {">>"}
              <Link className="ct bloglink">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, facilis.
              </Link>
            </h5>
            <h5 className="mt-3 mb-5 ct">
              {">>"}
              <Link className="ct bloglink">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laboriosam, facilis.
              </Link>
            </h5>
          </div>
          <div className="container mt-5 mb-5 blogtitle">
            <span className="h1 ">
              <i class="fa fa-book text-danger"> </i> 
              <span className="text-light"> Android Write-ups</span>
            </span>
            <h5 className="mt-5 mb-5 ct">
              {">>"}
              <Link to="/uaa" className="ct bloglink">
              Understand the Architecture of Android ( Android )
              </Link>
            </h5>
            <h5 className="mt-3 mb-5 ct">
              {">>"}
              <Link  to="/gds" className="ct bloglink">
              Genymotion Device Setup ( Android )
              </Link>
            </h5>
            
          </div>
          <div className="container mt-5 mb-5 blogtitle">
            <span className="h1 ">
              <i class="fa fa-book text-danger"> </i> 
              <span className="text-light"> IOS Write-ups</span>
            </span>
            <h5 className="mt-5 mb-5 ct">
              {">>"}
              <a href="https://payatu.com/blog/kapil.gurav/ios-penetration-testing" className="ct bloglink">
              Getting Started With the Basics of iOS Penetration Testing ( IOS )
              </a>
            </h5>
          </div>
          <div className="container mt-5 mb-5 blogtitle">
            <span className="h1 ">
              <i class="fa fa-book text-danger"> </i> 
              <span className="text-light"> OSCP Journey</span>
            </span>
            <h5 className="mt-5 mb-5 ct">
              {">>"}
              <Link to="/oscp" className="ct bloglink">
              Getting Started With the OSCP Prep with Mr.TechGhost ( OSCP )
              </Link>
            </h5>
          </div>
        </section>
      </section>
    </div>
  );
}
