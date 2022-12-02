import React from "react";

import { Link } from "react-router-dom";
export default function Oscp() {
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
                <h1 className="h1 mt-5">OSCP Preparation By Suraj Waghmare</h1>
                <h3 className="text-light mt-1 mb-5">
                  🤗 Remember the regrets of the 100-year-olds. Work hard, stay
                  focused, but quit at a reasonable time. Spend time with
                  friends and family today, go outside, and don’t skip your
                  workout .
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div class="text-start m-5 pb-5 blogcontainer">
            <div class=" text-light ">
              <h5>
                <span className="ct">{">>"}</span>
                Notes : This is not the official path for OSCP preparation. We
                have gathered some resources to create this dashboard. By
                enrolling in OSCP, you can start with the course materials. If
                you don’t have course materials, you can use resources shared in
                Course Materials tab, just click on topic name
                <br />
                <br />
                <div className="container ">
                  <div className="container pb-2 pt-2 d-flex justify-content-center command">
                    You can change stages as per your understanding. You you
                    want you can first go for htb and then official material or
                    vice versa.
                  </div>
                </div>
                <br />
                <br />
                <a href="https://www.netsecfocus.com/oscp/2021/05/06/The_Journey_to_Try_Harder-_TJnull-s_Preparation_Guide_for_PEN-200_PWK_OSCP_2.0.html">
                  The Journey to Try Harder: TJnull’s Preparation Guide for
                  PEN-200 PWK/OSCP 2.0
                </a>
                <br />
                <br />
                Among all the components Linux Kernel provides main
                functionality of operating system functions to smartphones and
                Dalvik Virtual Machine (DVM) provide platform for running an
                android application.
                <br />
                <br />
                <br />
                <a>✅ Stage 1 Study Hard</a>
                <br />
                <br />
                <span className="ct">{">>"}</span>
                <a
                  className="text-light"
                  href="https://www.notion.so/76125d764834422bae3a0f7878926f5f"
                >
                  Don’t make these pages public in public notions as it will
                  compromise offsec NDA.
                </a>
                <br />
                <span className="ct">{">>"}</span>
                <a
                  className="text-light"
                  href="https://mrtechghost.notion.site/OSCP-PDF-Excercise-5b8ac36fab1d4ddd9bda9d81dcae8c16"
                >
                  OSCP PDF Excercise
                </a>
                <br />
                <span className="ct">{">>"}</span>
                <a
                  className="text-light"
                  href="https://www.notion.so/0d8dedc4997540e49bb8df8d4582e209?v=5711c5443e464a089d72ba0d87006ebf"
                >
                  OSCP Lab - Boxex
                </a>
                <br />
                <br />
                NEW: The 10 PWK lab machines reported on must include Active
                Directory targets. Offsec decided to give 10 bonus points for
                lab report so I will insist to create lab report. <br /> <br />
                Requires completion of at least 10 PWK lab machines along with a
                detailed report, including all of the PWK course exercise
                solutions for a total value of 10 Bonus Points. <br />
                <br />
                NEW: The 10 PWK lab machines reported on must include Active
                Directory targets. <br />
                <br />
                I found this blog helpful to understand active directory <br />
                <br />
                <a href="https://nairuzabulhul.medium.com/">
                  Nairuz Abulhul - Medium
                </a>
              </h5>
            </div>
          </div>

          <div class="text-start m-5 pb-5 blogcontainer">
            <div class=" text-light ">
              <h5>
                <a>
                  ✒ Stage 2 - TJ Null htb ( Can be skipped if you have done 50+
                  htb boxes)
                </a>
                <br />
                <br />
                <a  className="text-light" href="https://ippsec.rocks/?#">
                  IppSec - Search
                </a>
                <br />
                <br />
                <div className="container pb-2 pt-2 d-flex justify-content-center command">
                  You can do this stage after completing course material but you
                  will loose your lab time. Better you start it before lab or
                  after completing your lab.
                </div>
                <br /> <br />
                <span className="ct">{">>"}</span>
                <a className="text-light" href="https://www.notion.so/ab6e8736a6844bdb9f719a4300151e60?v=e253ca60112946a9a12353cbea03d482">
                  TJ-Null Linux
                </a>{" "}
                <br />
                <br />
                <span className="ct">{">>"}</span>
                <a className="text-light" href="https://www.notion.so/469d526daba0447cbe82481ebe3c6f2b?v=75380137bc63442499206dd1a1b2539a">
                  TJ Null Windows
                </a>{" "}
                <br />
                <br />
                If you think machines from hack the box are difficult to crack,
                you can start with virtual hacking labs. They have great lab to
                start with. As offsec has decided to reduce bof marks to 10 I
                have not included separate tracker for that. You can use
                tryhackme room if you feel unprepared. <br /> <br />
                <span className="ct">{">>"}</span>
                <a className="text-light" href="https://tryhackme.com/room/bufferoverflowprep">
                  TryHackMe Buffer Overflow Prep
                </a>{" "}
                <br />
                <br />
              </h5>
            </div>
          </div>

          <div class="text-start m-5 pb-5 blogcontainer">
            <div class=" text-light ">
              <h5>
                <a>
                ❂ Stage 3 Pre-Exam

                </a>
               
                <br />
                <br />

                If you have done 50+ boxes from htb and 50+ boxes from offsec lab you can skip this part. But I will recommend to do it.
            
                <br /> <br />
                <span className="ct">{">>"}</span>
                <a className="text-light" href="https://www.notion.so/a71975a26add45c1ba1d960dd8a29815?v=f4f9190be566444795a41a8e7658b071">
                  TJ-Null Linux
                </a>{" "}
                <br />
                <br />
                <span className="ct">{">>"}</span>
                <a className="text-light" href="https://www.notion.so/6532fe7c0cf2406f8fac8e5ea6f7b35d?v=6ae757d368d54683b35b0c0d036912ea">
                  TJ Null Windows
                </a>{" "}
                <br />
                <br />
           
              </h5>
            </div>
          </div>

          <div class="text-start m-5 pb-5 blogcontainer">
            <div class=" text-light ">
              <h5>
                <a>
                ◎ Stage 4 Exam

                </a>
               
              
            
                <br /> <br />
                <span className="ct">{">>"}</span>
                <a className="text-light" href="https://www.notion.so/OSCP-Exam-Notes-EXAM_DATE-c660e3b352aa4db5a450e66476fcf13b">
                OSCP Exam Notes - Other resources I used
                </a>
                <br />
                <br />
                <span className="ct">{">>"}</span>
                <a className="text-light">
                ⌚ Quick Links
                </a>
                <ul className="mt-4">
                  <li><a href="https://www.notion.so/ab6e8736a6844bdb9f719a4300151e60?v=e253ca60112946a9a12353cbea03d482">📕 TJ-Null Linux"</a></li><br />
                  <li><a href="https://www.notion.so/0d8dedc4997540e49bb8df8d4582e209">🔬 OSCP Lab - Boxex</a></li><br />
                  <li><a href="https://www.notion.so/a71975a26add45c1ba1d960dd8a29815">📕 TJ PG - Linux</a></li><br />
                  <li><a href="https://www.notion.so/6532fe7c0cf2406f8fac8e5ea6f7b35d">📕 TJ- PG Windows</a></li><br />
                  <li><a href="https://www.notion.so/469d526daba0447cbe82481ebe3c6f2b">📕 Tj Null Windows</a></li><br />
                  <li><a href="https://www.notion.so/OSCP-PDF-Excercise-5b8ac36fab1d4ddd9bda9d81dcae8c16"> 🏋️ OSCP PDF Excercise</a></li><br />
                  <li><a href="https://www.notion.so/Web-Links-adcc4184944244548f34dcd973a899b6">🔗 Web Links</a></li><br />
                  <li><a href="https://www.notion.so/Course-Material-536e3bfa58a34832b3fe1cd1dbcef3ab">📥 Course Material</a></li><br />
                  <li><a href="https://www.notion.so/Other-resources-I-used-7fd0affac1204b648c2aea6fa39b9da6"> 📁 Other resources I used</a></li>
                </ul>
                <br />
                <br />
           
              </h5>
            </div>
          </div>

          <div class="text-start m-5 pb-5 blogcontainer">
            <div class=" text-light h4">You Have Any Doubts? Feel free to ask 
             "<a href="https://www.linkedin.com/in/suraj-waghmare-8a548a1b9/">SURAJ</a>"
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
