import React from 'react'
import { Link } from 'react-router-dom'
export default function Homenav() {
  return (
    <div className='navmain'>

    <nav class="navbar navbar-expand-lg text-center navbar-light bg-transparent">

<button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse text-center " id="navbarSupportedContent">
<ul class="navbar-nav mr-auto">
  <li class="nav-item active ">
    <Link class="nav-link" to="/">Home <i class="fa fa-home"></i></Link>
  </li>
  <li class="nav-item  ">
    <Link class="nav-link" to="/about">About <i class="fa-solid fa-circle-info"></i></Link>
  </li>
  <li class="nav-item  ">
    <Link class="nav-link" to="/blog">Write Up <i class="fa-solid fa-code"></i></Link>
  </li>
  <li class="nav-item  ">
    <Link class="nav-link" to="/contact">contact <i class="fa-solid fa-phone"></i></Link>
  </li>
</ul>

</div>
    </nav>
</div>
  )
}
