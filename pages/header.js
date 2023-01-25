// pages/header.js

import React from "react";
import Link from "next/link";
import Image from 'next/image';
import styles from '../styles/header.module.css';
import logo from '../assets/gwd.png';

export default function Header(){
    return(
        <header >
            <nav className="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar">
                <div className="container">
                <Link legacyBehavior href="/" >
                <a className="navbar-brand">
                    <Image
                    src={logo}
                    alt="Picture of the author"
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
        </header>
    )
}