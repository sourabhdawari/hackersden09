import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fuu0rze', 'template_2mxyjpn', form.current, 'IwC4rsv-o6n7NveHU')
      .then((result) => {
          console.log(result.text);
		  alert("Thank you for your Feedback!!")
      }, (error) => {
          console.log(error.text);
      });
  };












  
  return (
    <div className="about pb-5 contact">
      <div className='navrest'>

<nav class="navbar navbar-expand-lg text-center navbar-light bg-transparent">

<button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse text-center " id="navbarSupportedContent">
<ul class="navbar-nav mr-auto">
<li class="nav-item">
<Link class="nav-link" to="/">Home <i class="fa fa-home"></i></Link>
</li>
<li class="nav-item ">
<Link class="nav-link" to="/about">About <i class="fa-solid fa-circle-info"></i></Link>
</li>
<li class="nav-item  ">
<Link class="nav-link" to="/blog">Write Up <i class="fa-solid fa-code"></i></Link>
</li>
<li class="nav-item active ">
<Link class="nav-link" to="/contact">contact <i class="fa-solid fa-phone"></i></Link>
</li>
</ul>

</div>
</nav>
      </div>
      <section id="about" className="rounded pb-3 ">
        <section className="">
          <div>
            <div className=" m-5 d-flex justify-content-center ">
              <div className="text-center  ct ">
                <h1 className="h1 mt-5"> Contact</h1>
                
              </div>
            </div>
          </div>
        </section>

        <section className="main ">

          <div class="text-start m-5  ">
            <div class=" text-light ">
              <h5>
              <form ref={form} onSubmit={sendEmail} className='blogcontainer pb-5'>
                <div class="row">
                    <div class="col">
                    <input type="text" required name="user_name" class="form-control text-success bg-dark" placeholder="Name" />
                    </div>
                    <div class="col">
                    <input type="email" required name="user_email" class="form-control text-success bg-dark" placeholder="Email" />
                    </div>
                </div>
                <div className='row mt-5 p-2'>
                        <textarea type="text " required name="message" className='form-control bg-dark text-success' placeholder="Message" id=""></textarea>
                </div>
                <div className="container d-flex   mt-5 justify-content-center">
                <input id='send' class="send border-2 btn ct btn-w180 border border-success rounded-pill" type="submit" value="Send" />
                </div>
            </form>
              </h5>
              <div className="container m text-center text-bold mt-5">
              OR

              </div>
              <h5 className="container justify-content-center d-flex gap-3 mt-5 ">
              <a href="https://twitter.com/hackersden_"><i class="fa-brands fa-twitter social "></i></a>
              <a href="https://www.linkedin.com/in/imkapilgurav"><i class="fa-brands fa-linkedin social "></i></a>
              <a href="https://github.com/hackersden09"> <i class="fa-brands fa-github social "></i></a>
              
              
              
             
              </h5>
            </div>
          </div>

         

          
        </section>
      </section>
    </div>
  )
}
