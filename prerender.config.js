const urls = require("./src/urls.json");
const packageJson = require('./package.json');

const entryUrls = urls.data.map(entry => packageJson.seo.baseUrl + entry.url);
module.exports = {
  entryUrls: entryUrls
}
