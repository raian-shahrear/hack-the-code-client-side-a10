import React from 'react';
import { FaSnowflake, FaGithub, FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { GrWindows } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="p-10 bg-gray-900 text-neutral-content">
      <section className='footer'>
        <div>
          <a
            href="/"
            className="inline-flex items-center text-4xl text-yellow-500"
          >
            <FaSnowflake />
            <span className="ml-2 text-2xl font-bold tracking-wide text-sky-500 uppercase custom-logo">
              Hack The Code
            </span>
          </a>
          <p className='mt-2'>A reliable eLearning platform since 2002</p>
        </div> 
        <div>
          <span className="footer-title">Social</span> 
          <div className="grid grid-flow-col gap-6">
            <a href="https://github.com/login" target="_break"><FaGithub className="text-2xl" /></a>
            <a href="https://twitter.com/login" target="_break"><FaTwitter className="text-2xl" /></a>
            <a href="https://www.facebook.com/login/" target="_break"><FaFacebookF className="text-2xl" /></a>
            <a href="https://www.youtube.com" target="_break"><FaYoutube className="text-2xl" /></a>
            <a href="https://www.linkedin.com/login" target="_break"><FaLinkedinIn className="text-2xl" /></a>
          </div>
        </div>
      </section>
      <hr className='border-1 border-slate-500 my-10' />
      <div className='text-center'>
        <p>Copyright, &copy; 2022, <span className='custom-logo'>Hack The Code</span>. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;