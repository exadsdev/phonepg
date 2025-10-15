import React from 'react'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-12">
              <div className="block">
                <a href="/" className="mb-4 d-inline-block">
                  <img src="/img/logo.png" alt="PG Phone Shop Logo" width="50" />
                </a>
                <ul className="list-inline footer-menu">
                  <li className="list-inline-item">
                    <a href="tel:0981588303" ><img src="/img/tle.png" width={40} height={40}alt="โทรหาเรา" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/PGPhoneShop/" target='_bank'><img src="/img/fb.png" width={40} height={40} alt="Facebook" /> </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/messages/t/145640382782218" target='_bank' ><img src="/img/messenger.png" width={40} height={40} alt="messenger" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://youtu.be/2ufW1D5PsH0?si=lbPV2UWjWzcjWUtr" target='_bank' >   <img src="/img/youtube.png" width={40} height={40} alt="youtube" />  </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://lin.ee/@meedeeshop" target='_bank' ><img src="/img/line.png" width={40} height={40} alt="โทรหาเรา" /></a>
                  </li>
                </ul>
                <p className="copyright-text">
                  Copyright &copy; 2025, Designed &amp; Developed By <a href="/">PG Phone Shop</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
