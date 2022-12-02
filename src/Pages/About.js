import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="pb-5">
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
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home <i class="fa fa-home"></i>
                </Link>
              </li>
              <li class="nav-item active ">
                <Link class="nav-link" to="/about">
                  About <i class="fa-solid fa-circle-info"></i>
                </Link>
              </li>
              <li class="nav-item  ">
                <Link class="nav-link" to="/blog">
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
      <section id="about" className="rounded ">
        <section className="main mt-5">
          <div className="mt-5">
            <div className=" m-5  justify-content-center ">
              <div className="row container d-flex justify-content-center mt-5">
                <div className="col">
                  <div className="dp-main d-flex justify-content-center  rounded-circle">
                    <img
                      className="dp rounded-circle "
                      src={require("../assets/img/dp.webp")}
                      alt=""
                      srcset=""
                    />
                  </div>
                </div>
                <div className="col d-flex ">
                  <div className="mt-5">
                    <h2 className="title3">KAPIL GURAV</h2>
                    <p className="mt-5 text-light">
                      <h3 className="ct"> {">"} Author's Bio</h3>
                      I am a Security consultant at Payatu. He has experience in Web, API, Android, iOS, and Hardware penetration testing with 3+ years of experience. He loves contributing, being a part of security communities, and helping people get started in InfoSec. He is also doing research in iOS and hardware security. At Payatu, he is responsible for the security assessment of Web, API, Mobile, and Hardware. He also loves to hunt on bug bounty programs and achieved more than 50 Hall of fame in the same—also an achiever of the most valuable player tag on bug bounty platforms.
                    </p>
                    <div className="d-flex container justify-content-center ">
                      <div class="rounded-pill text-white  p-2 hire">
                        <span className=" ct">Get CV</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div>
            <div className="d-flex m-5 justify-content-center">
              <div className="row ">
                <div className="col text-center p-5 exp">
                  <span className="h1 ct">
                    <i class="fa fa-calendar  mt-3 card-img-top"></i>
                    <h3>3+ </h3>
                    <h5 class="card-title">EXPERIENCE</h5>
                  </span>
                </div>
                <div className="col  text-center p-5 exp">
                  <span className="h1 ct">
                    <i class="fa fa-bug  mt-3 card-img-top"></i>
                    <h3>100+ </h3>
                    <h5 class="card-title">TESTINGS</h5>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div>
            <div className="d-flex m-5 justify-content-center">
              <div className="row d-flex">
                <div className="col">
                  <div className="mt-5">
                    <p className="mt-5 text-light ">
                      <h3 className="ct"> {">"} What skils do I have? </h3>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      At, quia aut nostrum esse harum laboriosam dolorum
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="col mt-4">
                    <div className="row mt-5">
                      <div className="col">
                        <ul>
                          <li>
                            <img
                              className=" card skill-mini"
                              src="https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              className=" card skill-mini"
                              src="https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="">
                          <li>
                            <img
                              className=" card skill-mini"
                              src="https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              className=" card skill-mini"
                              src="https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="col">
                        <ul className="">
                          <li>
                            <img
                              className=" card skill-mini"
                              src="https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg"
                              alt=""
                            />
                          </li>
                          <li>
                            <img
                              className=" card skill-mini"
                              src="https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg"
                              alt=""
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div>
            <div className=" m-5  justify-content-center">
              <div className="row mt-5">
                <div className="col mt-3">
                  <div className="mt-5">
                    <p className="mt-5 text-light ">
                      <h3 className="ct"> {">"} Portfolio </h3>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      At, quia aut nostrum esse harum laboriosam dolorum
                    </p>
                  </div>
                </div>
              </div>

              <div className="row mt-5">
                <div className="col mt-5 ">
                  <div class="exp ct ">
                    <img
                      class="card-img-top cardsmini"
                      src={require("../assets/img/blog/Android-system-architecture.jpg")}
                      alt="Card image cap"
                    />
                    <div class="card-body text-center">
                      <h5 class="card-title">
                        Understand the Architecture of Android
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col mt-5 ">
                  <div class="exp ct  ">
                    <img
                      class="card-img-top cardsmini"
                      src={require("../assets/img/blog/genomotion01.png")}
                      alt="Card image cap"
                    />
                    <div class="card-body text-center">
                      <h5 class="card-title">
                        Genymotion Device Setup ( Android )
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col mt-5 ">
                  <div class="exp ct">
                    <img
                      class="card-img-top cardsmini"
                      src={require("../assets/img/blog/uid-01.png")}
                      alt="Card image cap"
                    />
                    <div class="card-body text-center">
                      <h5 class="card-title">Android Write-ups</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="d-flex container justify-content-center mb-5">
                  <div class="p-2  knowmore rounded-pill text-center">
                    <Link to="/blog" className="text-light p-2">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
