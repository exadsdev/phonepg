import React from 'react'

export default function Header() {
  return (
    <>
    
    <header className="navigation sticky-top bg-white">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="index.html"> <img src="img/logo.png" alt="Vex" width="60"/>
      </a>
      <button className="navbar-toggler p-0 border-0" type="button" data-toggle="collapse" data-target="#navigation"
        aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse text-center" id="navigation">
        <ul className="navbar-nav ml-auto mr-n0 mr-md-n3">

          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">Products</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">Blog</a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages <i className="tf-ion-chevron-down"></i></a>
            <ul className="dropdown-menu" aria-labelledby="dropdown03">
              <li><a className="dropdown-item" href="/">Blog Details</a></li>
              <li><a className="dropdown-item" href="/">Product Details</a></li>
              <li><a className="dropdown-item" href="/">Privacy Policy</a></li>
              <li><a className="dropdown-item" href="/">Terms Conditions</a></li>
              
              <li className="dropdown dropdown-submenu dropright">
                <a className="dropdown-item dropdown-toggle" href="#!" id="dropdown0301" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu 01</a>
      
                <ul className="dropdown-menu" aria-labelledby="dropdown0301">
                  <li><a className="dropdown-item" href="/">Submenu 11</a></li>
                  <li><a className="dropdown-item" href="/">Submenu 12</a></li>
                </ul>
              </li>
              
              <li className="dropdown dropdown-submenu dropleft">
                <a className="dropdown-item dropdown-toggle" href="/" id="dropdown0301" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu 02</a>
      
                <ul className="dropdown-menu" aria-labelledby="dropdown0301">
                  <li><a className="dropdown-item" href="/">Submenu 21</a></li>
                  <li><a className="dropdown-item" href="/">Submenu 22</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">Review</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">Contact</a>
          </li>

        </ul>

      </div>
    </nav>
  </div>
</header>
    
    </>
  )
}
