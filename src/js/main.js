const { initMediaGalleries } = require("./source/media-gallery");
const { initNavigation } = require("./source/navigation");
const { initForms } = require("./source/forms");
const { initBlobs } = require("./source/blob");
const { initAnimations } = require("./source/animation");


(() => {
  initNavigation();
  initMediaGalleries();
  initForms();
  initBlobs();
  initAnimations();
})();