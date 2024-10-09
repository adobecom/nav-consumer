const searchParams = new URLSearchParams(window.location.search);
const authoringPath = searchParams.get("authoringpath") || "/federal/dev";
const env = searchParams.get("env") || "stage";
const privacyId = searchParams.get("privacyid");
const locale = searchParams.get("locale");
const navBranch = searchParams.get("navbranch") || "stage";
const customLinks = searchParams.get("customlinks");
const unavComponents = searchParams.get("unav") || "appswitcher,profile,notifications,help";
const imsClientId = searchParams.get("imsclientid") || "adobedotcom-cc";
const redirect = searchParams.get("redirect") || "off";
const theme = searchParams.get("theme") || "light";
const searchEnabled = searchParams.get("searchEnabled") || "off";
const showUnavSectionDivider = searchParams.get("showUnavSectionDivider") || "false";
const layout = searchParams.get("layout");
const uncAppId = searchParams.get("uncid");

async function init() {
  const { default: loadBlock } = await import(`https://${navBranch}--milo--adobecom.hlx.page/libs/navigation/navigation.js`);
  loadBlock({
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
  });
}
init();