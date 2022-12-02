import React from "react";

import { Link } from "react-router-dom";
export default function Gds() {
  return (
    <div className="about pb-5">
      <div className="navrest">
        <nav class="navbar navbar-expand-lg text-center navbar-light bg-transparent">
          <button
            class="navbar-toggler custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse text-center "
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item ">
                <Link class="nav-link" to="/">
                  Home <i class="fa fa-home"></i>
                </Link>
              </li>
              <li class="nav-item  ">
                <Link class="nav-link" to="/about">
                  About <i class="fa-solid fa-circle-info"></i>
                </Link>
              </li>
              <li class="nav-item  ">
                <Link class="nav-link active" to="/blog">
                  Write Up <i class="fa-solid fa-code"></i>
                </Link>
              </li>
              <li class="nav-item  ">
                <Link class="nav-link" to="/contact">
                  contact <i class="fa-solid fa-phone"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <section id="about" className="rounded m-5 pb-3">
        <section className="">
          <div>
            <div className=" m-5 d-flex justify-content-center ">
              <div className="text-center blogtitle ct ">
                <h1 className="h1 mt-5 mb-5">Introduction</h1>
                <h3 className="text-light mt-1 mb-5">
                  In addition to using “Android Studio” for using “Android
                  Emulator” ( How to start Android Emulator (AVD) ) there is
                  also a “Tool” called “Genymotion” that can be used as well,
                  most importantly, it is very fast…. .
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div>
            <div className=" d-flex justify-content-center ">
              <div className="text-center  ct ">
                <h3 className="ml-5">
                  <a>Step (Step)</a>
                </h3>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center pb-5 blogcontainer">
            <div class=" text-light text-start">
              <h5>
                <br />
                <br />
                <ol className="">
                  <li className="">
                    Go to the Genymotion website to download the program.
                  </li>
                  <li className="mt-5">
                    But before downloading, you need to sign up first (Sign
                    in).genomotion01
                    <div className="container mt-5 d-flex justify-content-start">
                      <img
                        className="uaaimg"
                        src={require("../../assets/img/blog/genomotion01.png")}
                        alt=""
                        srcset=""
                      />
                    </div>
                  </li>
                  <li className="mt-5">
                    When “Activate” via “e-mail”, you can download the program
                    at
                    <br />
                    <a href=" https://cloud.genymotion.com/page/launchpad/download/">
                      {" "}
                      <button className="btn mt-4 btn-success">
                        Download here
                      </button>
                    </a>
                  </li>
                  <li className="mt-5">Then finish installing the program.</li>
                  <li className="mt-5">
                    Please “login” with “Account” that you have applied from the
                    “Genymotion” website.genomotion02
                    <div className="container mt-5 d-flex justify-content-start">
                      <img
                        className="uaaimg"
                        src={require("../../assets/img/blog/genomotion02-.png")}
                        alt=""
                        srcset=""
                      />
                    </div>
                  </li>
                  <li className="mt-5">
                    Then select “Device” for use.genomotion03
                    <div className="container d-flex mt-5 justify-content-start">
                      <img
                        className="uaaimg"
                        src={require("../../assets/img/blog/genomotion03-300x226.png")}
                        alt=""
                        srcset=""
                      />
                    </div>
                  </li>
                  <li className="mt-5">
                    The program will download the “device”, wait for it to
                    finish.
                  </li>
                  <li className="mt-5">
                    Then download Appie2 to set the “SDK” to “Genymotion” and
                    also have the key “Tool” for testing.
                  </li>
                  <li className="mt-5">
                    Unzip the “.zip” file and go to the folder. “[Appie2 storage
                    folder]/bin/adt/sdk/”
                  </li>
                  <li className="mt-5">
                    Set the SDK (Settings {">"} ADB) according to the folder
                    number 9.genomotion04
                    <div className="container mt-5 d-flex justify-content-start">
                      <img
                        className="uaaimg"
                        src={require("../../assets/img/blog/genomotion04-300x214.png")}
                        alt=""
                        srcset=""
                      />
                    </div>
                  </li>
                  <li className="mt-5">
                    Test Try “Run”genomotion05
                    <div className="container mt-5 d-flex justify-content-start">
                      <img
                        className="uaaimg"
                        src={require("../../assets/img/blog/genomotion05-187x300.png")}
                        alt=""
                        srcset=""
                      />
                    </div>
                  </li>
                </ol>

                <br />
                <br />
              </h5>
            </div>
          </div>

          <div class="mb-3 mt-5 container d-flex justify-content-center">
            <Link
              className="ct btn  rounded-pill border border-success"
              to="/blog"
            >
              Back
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}
