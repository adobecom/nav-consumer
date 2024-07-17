import React, { useEffect } from 'react';
import banner from './learn.png'
const Footer = () => {
    useEffect(() => {
      const loadFooter = async () => {
        if (!window.footerInitialized) {
          window.footerInitialized = true;
          const contentRoot = new URLSearchParams(window.location.search).get('contentroot') || '/federal/home';
          const env = new URLSearchParams(window.location.search).get('env') || 'qa';
          const module = await import('https://feds--milo--adobecom.hlx.page/libs/navigation/footer.js');
          module.default({ contentRoot, env });
        }
      };  
      loadFooter();
    }, []);

    return (
        <main>
          <img src={banner} alt='banner' style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '20px auto' }}></img>
        </main>
    );
  }
export default Footer;