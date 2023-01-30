// pages/header.js

import React from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from '../styles/header.module.css';
import logo from '../assets/logo.svg';
import imgc from '../assets/intro-mobile.png';

export default function Header(){
    return(
        <header >
            <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
                <div className="container">
                <Link legacyBehavior href="/" >
                <a className="navbar-brand">
                    <Image
                    src={logo}
                    alt="Greatwebdev"
                    width="100"
                    layout="responsive"
                    />
                </a>
                </Link>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
                    <li className="nav-item active">
                        <Link legacyBehavior href="/" >
                            <a className="nav-link" >
                            Home
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link legacyBehavior href="/add-post">
                            <a className="nav-link" >
                            Add Post
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link legacyBehavior href="/sign-up">
                            <a className="nav-link" >
                            Sign Up
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link legacyBehavior href="/sign-in">
                            <a className="nav-link" >
                            Sign In
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about-us">
                        About Us
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/blogs">
                        Blogs
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/services">
                        Services
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio">
                        Portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">
                        Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        
                    </li>
                    <li className="nav-item">
                    
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
            <div id="hero-area" className={"hero-area-bg "+styles.hide}>
                <div className="container">      
                <div className="row">
                    <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                    <div className="contents banner_area">
                        <h1 className="head-title">Building A Web3<br />Powered Enterprise<br />World</h1>
                        <p>You deserve an unmatched consulting experience. Enter the virtual world with our web3 consulting services enabled by technology and sustained through capabilities. We help our clients create change that matters.</p>
                        <div className="header-button">
                        <a href="#contact" className="btn btn-common">Try Whitepace free</a>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
                    <div className="intro-img">
                            <Image
                            src={imgc}
                            alt="Greatwebdev"
                            width="100"
                            layout="responsive"
                            />
                    </div>            
                    </div>
                </div> 
                </div> 
          </div>
        </header>
    )
}