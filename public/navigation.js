const searchParams = new URLSearchParams(window.location.search);
const authoringPath = searchParams.get("authoringpath") || "/federal/dev";
const env = searchParams.get("env") || "stage";
const privacyId = searchParams.get("privacyid");
const locale = searchParams.get("locale");
const navBranch = searchParams.get("navbranch") || "gnav";
const customLinks = searchParams.get("customlinks") || "";
const unavComponents = searchParams.get("unav") || "appswitcher,profile,notifications,help";
const imsClientId = searchParams.get("imsclientid") || "adobedotcom-cc";
const redirect = searchParams.get("redirect") || "off";
const theme = searchParams.get("theme") || "light";
const searchEnabled = searchParams.get("searchEnabled") || "off";
const showUnavSectionDivider = searchParams.get("showUnavSectionDivider") || "false";
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
      unavComponents,
      redirect,
      searchEnabled,
      customLinks,
      showUnavSectionDivider: showUnavSectionDivider.toLowerCase() === "true",
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
        showUnavSectionDivider: showUnavSectionDivider.toLowerCase() === "true",
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
init();