import React, { useEffect } from 'react';
import banner from './learn.png'
const Footer = () => {
    useEffect(() => {
      const loadFooter = async () => {
        if (!window.footerInitialized) {
          window.footerInitialized = true;
          const authoringPath = new URLSearchParams(window.location.search).get('authoringpath') || '/federal/home';
          const env = new URLSearchParams(window.location.search).get('env') || 'qa';
          const privacyId = new URLSearchParams(window.location.search).get('privacyid');
          const locale = new URLSearchParams(window.location.search).get('locale');
          const module = await import('https://feds--milo--adobecom.hlx.page/libs/navigation/navigation.js');
          module.default({ env, locale, footer: { authoringPath, privacyId } });
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