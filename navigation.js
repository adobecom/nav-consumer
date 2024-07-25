const authoringPath = new URLSearchParams(window.location.search).get('authoringpath') || '/federal/test-website';
const env = new URLSearchParams(window.location.search).get('env') || 'prod';
const privacyId = new URLSearchParams(window.location.search).get('privacyid');
const locale = new URLSearchParams(window.location.search).get('locale');
const navBranch = new URLSearchParams(window.location.search).get('navbranch') || 'main';

async function init() {
  const { default: loadBlock } = await import(`https://${navBranch}--milo--adobecom.hlx.page/libs/navigation/navigation.js`);
  loadBlock({ env, locale, footer: { authoringPath, privacyId } });
}
init();
