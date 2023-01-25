// pages/about.js

import React from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from '../styles/footer.module.css';
import logo from '../assets/gwd.png';

export default function Footer(){
    return(
    <footer id="footer" className="footer-area section-padding">
      <div className="container">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12">
              <div className="widget">
                <h3 className="footer-logo">
                    <Image
                    src={logo}
                    alt="Picture of the author"
                    width="100"
                    layout="responsive"
                    />
                </h3>
                <div className="textwidget">
                  <p>GreatWebDev is a single answer to all your digital constraints. We have an expert team, which is known for providing timely and accurate results. GreatWebDev is the best web design company which is prominent at delivering customer oriented services.</p>    </div>
                <div className="social-icon">
                  <a className="facebook" href="https://www.facebook.com/greatwebdev"><i className="lni-facebook-filled"></i></a>
                  <a className="linkedin" href="https://www.linkedin.com/in/greatweb-dev-9018a31b4/"><i className="lni-linkedin-filled"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">Site Links</h3>
              <ul className="footer-link">
                <li><a href="/">Home</a></li>
                <li><a href="/about-us">About Us</a></li>
				<li><a href="/blogs">Blogs</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/contact">Contact</a></li>	
               			
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">Services</h3>
              <ul className="footer-link">
                <li><a href="/web-development-services">Web Development</a></li>
                <li><a href="/web-design-company">Web Design</a></li>           
                <li><a href="/digital-marketing-company">Digital Marketing</a></li> 
				 <li><a href="/ecommerce-development-company">Ecommerce Development</a></li> 
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <h3 className="footer-titel">Contact</h3>
              <ul className="address">
                <li>
                  <a href="skype:live:.cid.f4af0ec1fb4db2b6?chat"><i className="lni-map-marker"></i> Skype - greatwebdev</a>
                </li>
                <li>
                  <a href="tel: +91 8607101643"><i className="lni-phone-handset"></i> Ph: +91-8607-101643</a>
                </li>
				<li>
                  <a href="https://web.whatsapp.com/send?phone=+918708560891%20&amp;text=Hello%20Great%20WebDev" target="_blank"><i className="lni-envelope"></i> What's App: +91-8607-101643</a>
                </li>
                <li>
                  <a href="mail:info@greatwebdev.com"><i className="lni-envelope"></i> Email: info@greatwebdev.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>  
      </div> 
      <div id="copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-content">
                <p>Copyright © 2021 <a rel="nofollow" href="https://greatwebdev.com/">GreatWebDev</a> All Right Reserved</p>
				<p >Read Our <a rel="nofollow" href="https://www.greatwebdev.com/terms-and-conditions">Terms and
				Conditions</a> &amp; <a rel="nofollow" href="https://www.greatwebdev.com/privacy-policy">Privacy Policy</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </footer>
    )
}