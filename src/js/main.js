const { initMediaGalleries } = require("./source/media-gallery");
const { initNavigation } = require("./source/navigation");
const { initForms } = require("./source/forms");
const { initBlobs } = require("./source/blob");


(() => {
  initNavigation();
  initMediaGalleries();
  initForms();
  initBlobs();
})();