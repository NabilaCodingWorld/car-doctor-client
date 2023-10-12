import React from 'react';
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#151515] text-white">
                <aside>
                    <img className='w-20' src={logo} alt="" />
                    
                    <p className='font-bold'>Car Doctor</p>
                    <p>Edwin Diaz is a software and <br /> web technologies engineer, <br /> a life coach trainer who is also a serial .</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;