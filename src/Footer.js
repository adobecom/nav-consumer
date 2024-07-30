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
          const navBranch = new URLSearchParams(window.location.search).get('navbranch') || 'stage';
          const unavComponents = new URLSearchParams(window.location.search).get('unav') || 'profile';
          const imsClientId = new URLSearchParams(window.location.search).get('imsclientid') || 'fedsmilo';
          
          const module = await import(/* webpackIgnore: true */ `https://${navBranch}--milo--adobecom.hlx.page/libs/navigation/navigation.js`);
          module.default({
            env,
            locale,
            authoringPath,
            footer: { authoringPath, privacyId },
            header: { imsClientId, unavComponents },
          });
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