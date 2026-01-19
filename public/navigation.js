const searchParams = new URLSearchParams(window.location.search);
const authoringPath = searchParams.get("authoringpath") || "/federal/dev";
const env = searchParams.get("env") || "stage";
const privacyId = searchParams.get("privacyid");
const locale = searchParams.get("locale");
const navBranch = searchParams.get("navbranch") || "stage";
const customLinks = searchParams.get("customlinks");
const unavComponents = searchParams.get("unav") || 'appswitcher,profile,notifications,help';
const imsClientId = searchParams.get("imsclientid") || "adobedotcom-cc";
const redirect = searchParams.get("redirect") || "off";
const theme = searchParams.get("theme") || "light";
const searchEnabled = searchParams.get("searchEnabled") || "off";
const isMiniGnav = searchParams.get("mini-gnav") || false;
const viewPlansCta = searchParams.get("view-plans-cta") === "true";
const explorePlansCta = searchParams.get("explore-plans-cta") === "true";
const desktopAppsCta = searchParams.get("desktopAppsCta") || false;
const showUnavSectionDivider = searchParams.get("showUnavSectionDivider") || "false";
const layout = searchParams.get("layout");
const noBorder = searchParams.get("noborder") || "false";
const uncAppId = searchParams.get("uncid");
const usebundle = searchParams.get("usebundle");
const isLocalNav = searchParams.get("localnav") || false;
const newNav = searchParams.get("newNav") || "on";
const useLocal = searchParams.get("useLocal") || false;
const useCompactGnav = searchParams.get("compactGnav") || false;
const url = useLocal ? 'http://localhost:6456/libs/navigation/navigation.js' : `https://${navBranch}--milo--adobecom.aem.page/libs/navigation/navigation.js`;
const selfIntegrateUnav =  searchParams.get("self-unav") || "";
const isContainerResponsive = searchParams.get("container-responsive");
const headerOff = searchParams.get("headerOff") || false;
const signInCtaStyle = searchParams.get("signInCtaStyle") === 'primary'? 'primary': 'secondary';
const gnavSource = searchParams.get("gnav-source");
const footerSource = searchParams.get("footer-source");
const disableActiveLink = searchParams.get("disable-active-link");
const productEntryCta = searchParams.get("product-cta");

async function init() {
  const url = `https://${navBranch}--milo--adobecom.aem.page/libs/navigation/${usebundle === 'true' ? 'dist/' : ''}navigation.js`;
  const { default: loadBlock } = await import(`${url}`);
  const isDesktop = window.matchMedia('(min-width: 900px)');
  const footerContainer = document.querySelector('.footer-container');
  const updateFooterMargin = () => {
    footerContainer.style.margin = (isDesktop.matches && isContainerResponsive) ? '0 100px' : '0';
  };
  updateFooterMargin();
  if (isDesktop.matches && isContainerResponsive) {
    isDesktop.addEventListener('change', updateFooterMargin);
  }
  let conf = {
    env,
    locale,
    theme,
    authoringPath,
    footer: {
      authoringPath,
      privacyId,
      footerSource,
      isContainerResponsive: isContainerResponsive === "true",
      onReady: () => {
        console.log('Footer ready');
      },
      onError: (e) => {
        console.log('Footer Error');
        console.log(e)
      },
    },
    header: {
      useCompactGnav,
      imsClientId,
      redirect,
      searchEnabled,
      customLinks,
      layout,
      isLocalNav,
      viewPlansCta,
      explorePlansCta,
      miniGnav: isMiniGnav === "true",
      desktopAppsCta: desktopAppsCta === "true",
      useNewMobileNav: newNav,
      noBorder: noBorder.toLowerCase() === "true",
      selfIntegrateUnav: selfIntegrateUnav === 'true',
      gnavSource,
      productEntryCta,
      disableActiveLink: disableActiveLink === 'true',
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
        profile: {
          signInCtaStyle,
        },
      },
      onReady: () => {
        console.log('Gnav ready');
        const searchElement = document.querySelector('.feds-client-search');
        if (searchElement) {
          searchElement.innerHTML = `
            <button aria-label="Search">
              <span class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false">
                    <path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path>
                  </svg>
              </span>
            </button>`;
        }
        const desktopAppsCta = document.querySelector('.feds-client-desktop-apps');
        if (desktopAppsCta) {
          const isDark = theme === 'dark';
          desktopAppsCta.innerHTML = `<button aria-label="Desktop Apps">Desktop Apps</button>`;
          const button = desktopAppsCta.querySelector('button');
          // Apply styles
          Object.assign(button.style, {
            border: 'none',
            background: isDark ? 'white' : 'black',
            color: isDark ? 'black' : 'white',
            borderRadius: '50px',
            padding: '5px 12px'
          });
        }
        const viewPlansCta = document.querySelector('.feds-client-view-plans');
        if (viewPlansCta) {
          const isDark = theme === 'dark';
          viewPlansCta.innerHTML = `<button aria-label="Desktop Apps">View Plans</button>`;
          const button = viewPlansCta.querySelector('button');
          // Apply styles
          Object.assign(button.style, {
            border: 'none',
            background: isDark ? 'white' : 'black',
            color: isDark ? 'black' : 'white',
            borderRadius: '50px',
            padding: '5px 12px'
          });
        }
        const explorePlansCta = document.querySelector('.feds-client-explore-plans');
        if (explorePlansCta) {
          const isDark = theme === 'dark';
          explorePlansCta.innerHTML = `<button aria-label="Desktop Apps">Explore Plans</button>`;
          const button = explorePlansCta.querySelector('button');
          // Apply styles
          Object.assign(button.style, {
            border: 'none',
            background: isDark ? 'white' : 'black',
            color: isDark ? 'black' : 'white',
            borderRadius: '50px',
            padding: '5px 12px'
          });
        }
      },
      onError: (e) => {
        console.log('Gnav Error');
        console.log(e)
      },
    },
    stageDomainsMap: {
      'developer.adobe.com': 'developer-stage.adobe.com'
    },
  }
  if (headerOff) {
    delete conf.header;
  }
  loadBlock(conf);
  document.getElementById('close-gnav')?.addEventListener('click', () => {
   window.closeGnav?.();
  });
}
init();