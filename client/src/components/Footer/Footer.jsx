import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>TalentTrade Logo Maker</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Personal Growth & Hobbies</span>
            <span>Phptpgraphy</span>
            <span>Finance</span>
            <span>End-to-End Projects</span>
            <span>Sitemap</span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Careers</span>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
          </div>
          <div className="item">
            <h2>Support and Education</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Quality Guide</span>
            <span>Selling on TalentTrade</span>
            <span>Buying on TalentTrade</span>
            <span>TalentTrade Guides</span>
            <span>Learn</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community Hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Creators</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>
          <div className="item">
            <h2>Business Solutions</h2>
            <span>About Business Solutions</span>
            <span>TalentTrade Pro</span>
            <span>TalentTrade Certified</span>
            <span>Become an Agency</span>
            <span>TalentTrade Enterprise</span>
            <span>ClearVoice</span>
            <span>Contact Sales</span>
          </div>
        </div>
        <hr />
        <div className="footer_bottom">
          <div className="footer_left">
            <h2>TalentTrade</h2>
            <span>&copy; TalentTrade International Ltd. 2024</span>
          </div>
          <div className="footer_right">
            <div className="footer_social">
              <img src="./images/twitter.png" alt="Twitter" />
              <img src="./images/facebook.png" alt="Facebook" />
              <img src="./images/linkedin.png" alt="Linkedin" />
              <img src="./images/pinterest.png" alt="Pinterest" />
              <img src="./images/instagram.png" alt="Instagram" />
            </div>
            <div className="footer_link">
              <img src="./images/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="footer_link">
              <span>₹ INR</span>
            </div>
            <img src="./images/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
