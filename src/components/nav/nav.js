import React from 'react';
import './nav.css';


const NavBar = () => {

    return (
        <nav className="dt w-100 border-box pa3 ph5-ns">
  <a className="dtc v-mid mid-gray link dim w-25"  title="Home">
    <img src="http://tachyons.io/img/logo.jpg" className="dib w2 h2 br-100" alt="Site Name" />
  </a>
  <div className="dtc v-mid w-75 tr">
    <a className="link dim white f6 f5-ns dib mr3 mr4-ns"  title="WhyUs">Why Choose Us ?</a>
    <a className="link dim white f6 f5-ns dib mr3 mr4-ns"  title="HowHelp">How We Can Help</a>
    <a className="link dim white f6 f5-ns dib mr3 mr4-ns"  title="OurWork">Our Work</a>
    <a className="link dim white f6 f5-ns dib mr3 mr4-ns"  title="About">About</a>
    <a className="link dim white f6 f5-ns dib mr3 mr4-ns"  title="Blog">Blog</a>
    <a class="f6 link dim br-pill ba bw1 ph3 pv2 mb2 dib dark-green bg-white" href="#0">Get Free Quote</a>
  </div>
</nav>
    );
}

export default NavBar; 