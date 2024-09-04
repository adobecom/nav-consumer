import React, { useEffect } from 'react';
import banner from './learn.png'
const Footer = () => {
    useEffect(() => {
      const loadFooter = async () => {
        if (!window.footerInitialized) {
          window.footerInitialized = true;
          const authoringPath = new URLSearchParams(window.location.search).get('authoringpath') || '/federal/dev';
          const env = new URLSearchParams(window.location.search).get('env') || 'stage';
          const privacyId = new URLSearchParams(window.location.search).get('privacyid');
          const locale = new URLSearchParams(window.location.search).get('locale');
          const navBranch = new URLSearchParams(window.location.search).get('navbranch') || 'gnav';
          const unavComponents = new URLSearchParams(window.location.search).get('unav') || 'appswitcher,profile,notifications';
          const imsClientId = new URLSearchParams(window.location.search).get('imsclientid') || 'adobedotcom-cc';
          const redirect = new URLSearchParams(window.location.search).get("redirect") || "off";
          const theme = new URLSearchParams(window.location.search).get("theme") || "light";
          const searchEnabled = new URLSearchParams(window.location.search).get("searchEnabled") || "off";
          const unavVersion = new URLSearchParams(window.location.search).get("unav-version") || "";

          const module = await import(/* webpackIgnore: true */ `https://${navBranch}--milo--adobecom.hlx.page/libs/navigation/navigation.js`);
          module.default({
            env,
            locale,
            theme,
            authoringPath,
            footer: { authoringPath, privacyId },
            header: { imsClientId, unavComponents, redirect, unavVersion, searchEnabled },
          });
        }
      };  
      loadFooter();
    }, []);

    return (
        <main>
          <img src={banner} alt='banner' style={{ maxWidth: '100%', height: 'auto', display: 'block' }}></img>
        </main>
    );
  }
export default Footer;