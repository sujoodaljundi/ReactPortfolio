import React from 'react';
import useCurrentTime from "./hooks/useCurrentTime";

const Footer = () => {  
  const currentTime = useCurrentTime();

  return (  
    <footer className="footer">  
      <div className="footer-container">  
  
        <p className="footer-time">  
          Current Time: {currentTime}
        </p>
        <p className="footer-text">  
          © 2024 | Designed by Sujood
        </p>
        
      </div>  
    </footer>  
  );  
};  

export default Footer;
