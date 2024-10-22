const { initMediaGalleries } = require("./source/media-gallery");
const { initNavigation } = require("./source/navigation");
const { initForms } = require("./source/forms");


(() => {
  initNavigation();
  initMediaGalleries();
  initForms();
})();