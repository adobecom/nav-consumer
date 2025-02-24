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
const showUnavSectionDivider = searchParams.get("showUnavSectionDivider") || "false";
const layout = searchParams.get("layout");
const noBorder = searchParams.get("noborder") || "false";
const uncAppId = searchParams.get("uncid");
const usebundle = searchParams.get("usebundle");
const isLocalNav = searchParams.get("localnav") || false;
const newNav = searchParams.get("newNav") || "on";
const useLocal = searchParams.get("useLocal") || false;
const url = useLocal ? 'http://localhost:6456/libs/navigation/navigation.js' : `https://${navBranch}--milo--adobecom.hlx.page/libs/navigation/navigation.js`;
const selfIntegrateUnav =  searchParams.get("self-unav") || "";
          
async function init() {
  const url = `https://${navBranch}--milo--adobecom.hlx.page/libs/navigation/${usebundle === 'true' ? 'dist/' : ''}navigation.js`;
  const { default: loadBlock } = await import(`${url}`);
  loadBlock({
    env,
    locale,
    theme,
    authoringPath,
    footer: {
      authoringPath,
      privacyId,
      onReady: () => {
        console.log('Footer ready');
      },
      onError: (e) => {
        console.log('Footer Error');
        console.log(e)
      },
    },
    header: {
      imsClientId,
      redirect,
      searchEnabled,
      customLinks,
      layout,
      isLocalNav,
      useNewMobileNav: newNav,
      noBorder: noBorder.toLowerCase() === "true",
      selfIntegrateUnav: selfIntegrateUnav === 'true',
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
      },
      onError: (e) => {
        console.log(e)
      },
    },
    stageDomainsMap: {
      'developer.adobe.com': 'developer-stage.adobe.com'
    },
  });
}
init();