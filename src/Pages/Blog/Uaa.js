import React from "react";

import { Link } from "react-router-dom";
export default function Uaa() {
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
               
                  <i class="fa fa-terminal"></i> Understand the Architecture of
                  Android
                </h1>
                <h3 className="text-success mt-1 mb-5">Android Architecture</h3>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div class="text-start m-5 pb-5 blogcontainer">
            <div class=" text-light ">
              <h5>
                Android architecture contains different number of components to
                support any android device needs. Android software contains an
                open-source Linux Kernel having collection of number of C/C++
                libraries which are exposed through an application framework
                services.
                <br />
                <br />
                Among all the components Linux Kernel provides main
                functionality of operating system functions to smartphones and
                Dalvik Virtual Machine (DVM) provide platform for running an
                android application.
                <br />
                <br />
                The main components of android architecture are following:-
                <br />
                <br />
                <div className="container ">
                  <div className="container pb-2 pt-2 d-flex justify-content-start command">
                    <ul>
                      <li className="mt-2">Applications</li>
                      <li className="mt-2">Application Framework</li>
                      <li className="mt-2">Android Runtime</li>
                      <li className="mt-2">Platform Libraries</li>
                      <li className="mt-2">Linux Kernel</li>
                    </ul>
                  </div>
                </div>
                <br />
                <br />
                <div className="container d-flex justify-content-center mt-5 mb-5">
                  <img
                    className="uaaimg"
                    src={require("../../assets/img/blog/Android-system-architecture.jpg")}
                    alt=""
                  />
                </div>
                <a>Application Layer</a>
                <br />
                <br />
                It is the part of “Application”, each “Application” developed to
                be installed and run, such as the program “Facebook” or “Line”,
                which “Application” has an extension of “.apk”, which when
                installed successfully. and it will be in the folder “/data/app”
                and the data section of “Application” is located at
                “/data/data”.
                <br />
                <br />
                <a>Application Framework Layer</a>
                <br />
                <br />
                It is part of the “System API” (Application Programming
                Interface) that the “Application” developed and installed can
                run. where the “Application Framework” section will facilitate
                developers. “Application” does not require complicated
                additional programming. but can be executed via “API”
                immediately, which can be divided as follows
                <br />
                <div className="container d-flex justify-content-center mt-5 mb-5">
                  <img
                    className="uaaimg"
                    src={require("../../assets/img/blog/Android-system-architecture2.jpg")}
                    alt=""
                  />
                </div>
                <br />
                Activities Manager “API” for managing “Activity” or per-user
                display. Content Provider “API” for managing access to data from
                other programs suitable for sharing data between “Application”
                View System “APIs” for managing structures or user interface
                components (Controls) such as “button” “text box” or “web
                browser” in conjunction with Activities Manager. Telephony
                Manager “API” manages access to phone data. The Resource Manager
                “API” handles other non-programming information. (Programming)
                “strings” “layout” screen, which is located in the “res/”
                directory. Location Manager “API” manages the geographic
                location of the “Android” device. Notification Manager “API”
                deals with events that happen to the “Android” device and then
                displays the results to the user, such as “Miss call”.
                <br />
                <br />
                <a>Libraries Layer</a>
                <br />
                <br />
                It is part of the “C” and “C++” libraries at the “low-level
                process” level, for example:
                <br />
                <br />
                Surface Manager is a library for drawing screens. or display The
                Media Framework is a multimedia library for images, video, and
                audio. SQLite is a small library for working with “SQLite” data.
                We can store various information of “Application” in this
                database. Open GL | ES is a library for 2 or 3D images. FreeType
                is a library for rendering both “Bitmap” and “Vector” images.
                WebKit is a library for displaying web browsers. You can learn
                more at <br />
                <button className="btn mt-3 mb-3 btn-success">
                  <a
                    className="text-light"
                    href="https://developer.android.com/reference/android/webkit/package-summary.html"
                  >
                    Here
                  </a>
                </button>
                <br />
                libc is a library of the “C” language.
                <br />
                <br />
                <br />
                <a>Android Run-times</a>
                <br />
                <br />
                It is part of a library consisting of two parts managed by the
                “Android OS” as follows:
                <br />
                <br />
                Core Java Libraries are command compilation libraries. written
                in the language “Java” Dalvik Virtual Machine is a library used
                to process “.dex” files. This file is a program that we wrote to
                install on “Android”. “compile” is from “.class”. The “.dex”
                file is small.of the “C” language.
                <br />
                <br />
                <a>Linux Kernel Layer</a>
                <br />
                <br />
                This layer will work with all the “Layers” above. To manage
                various “hardware” or “device drivers” including memory,
                processor and “power”, “Android” uses “version” 2.6 of the Linux
                operating system.
                <br />
              </h5>
            </div>
          </div>

          <div class="text-start m-5 pb-5 blogcontainer">
            <div class=" text-light ">
              <h3>
                <a>How to understand Android UID</a>
              </h3>
              <h5 className="mt-5">
                <a>Android Application Sandbox</a>
                <br />
                <br />
                for the safety of “Application” installed on the same “Android”,
                each “Application” is separated from the “Data” and “Code” part
                that can be processed. The reasons for this must be separated to
                prevent unauthorized access to information. from malicious
                programs, etc.
                <br />
                <br />
                <a>Android UID (User ID)</a>
                <br />
                <br />
                In each “Application” installed on the “Android”, a “User ID”
                (UID) is set for each “Application” since installation. And that
                program will be able to read, write or delete only files with
                the same “UID”. If not, the file cannot be accessed. unless
                there is a value to allow data sharing.
                <br />
                <br />
                <a>Application’s directory</a>
                <br />
                <br />
                Let’s go into the folder “/data/data” on the “Android” and we
                can check “UID” and “GUID” by using the ls command, and notice
                that they are equal, other “Application”. Can’t access different
                information “Application”
                <br />
                <br />
                <div className="command pt-3 pb-3">
                  <p className=" h6">
                    $ adb shell root@android:/ # cd /data/data cd /data/data
                    root@android:/data/data # ls -an
                  </p>
                </div>
                <br />
                <br />
                When something is important enough, you do it even if the odds
                are not in your favor.
                <br />
                <div className="container d-flex justify-content-center mt-5 mb-5">
                  <img
                    className="container uaaimg"
                    src={require("../../assets/img/blog/uid-01.png")}
                    alt=""
                  />
                </div>
                yay !!!!
              </h5>
            </div>
          </div>
          <div class="mb-3 container d-flex justify-content-center">
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
