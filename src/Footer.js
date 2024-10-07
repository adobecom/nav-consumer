import React, { useEffect } from 'react';
import banner from './learn.png'
const Footer = () => {
    useEffect(() => {
      const loadFooter = async () => {
        if (!window.footerInitialized) {
          window.footerInitialized = true;
          const searchParams = new URLSearchParams(window.location.search);
          const authoringPath = searchParams.get('authoringpath') || '/federal/dev';
          const env = searchParams.get('env') || 'stage';
          const privacyId = searchParams.get('privacyid');
          const locale = searchParams.get('locale');
          const navBranch = searchParams.get('navbranch') || 'stage';
          const customLinks = searchParams.get("customlinks");
          const unavComponents = searchParams.get('unav') || 'appswitcher,profile,notifications,help';
          const imsClientId = searchParams.get('imsclientid') || 'adobedotcom-cc';
          const redirect = searchParams.get("redirect") || "off";
          const theme = searchParams.get("theme") || "light";
          const searchEnabled = searchParams.get("searchEnabled") || "off";
          const showUnavSectionDivider = searchParams.get("showUnavSectionDivider") || "false";
          const layout = searchParams.get("layout");
          const uncAppId = searchParams.get("uncid");

          const module = await import(/* webpackIgnore: true */ `https://${navBranch}--milo--adobecom.hlx.page/libs/navigation/navigation.js`);
          module.default({
            env,
            locale,
            theme,
            authoringPath,
            footer: {
              authoringPath,
              privacyId,
              // onReady: () => {
              //   console.log('Footer ready')
              // },
              // onError: (e) => {
              //   console.log(e)
              // },
            },
            header: {
              imsClientId,
              // Remove after this PR(https://github.com/adobecom/milo/pull/2969) merge
              unavComponents,
              redirect,
              searchEnabled,
              customLinks,
              layout,
              // Remove after code merge
              unavHelpChildren: [
                { type: 'Support' },
                { type: 'Community' },
                {
                  title: 'Custom 1',
                  onAction: () => {
                    console.log('Custom 1 is clicked!')
                  },
                  analyticsIdentifier: 'unav-custom-1',
                },
              ],
              unav: {
                unavComponents,
                unavHelpChildren: [
                  { type: 'Support' },
                  { type: 'Community' },
                  {
                    title: 'Custom 1',
                    onAction: () => {
                      console.log('Custom 1 is clicked!')
                    },
                    analyticsIdentifier: 'unav-custom-1',
                  },
                ],
                uncAppId,
                showSectionDivider: showUnavSectionDivider.toLowerCase() === "true",
              },
              onReady: () => {
                console.log('Gnav ready')
              },
              onError: (e) => {
                console.log(e)
              },
            },
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