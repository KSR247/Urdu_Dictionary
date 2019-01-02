var ImageScraper = require("bing-image-scraper");
var bing = new ImageScraper();

// returns a promise
bing
  .list({
    keyword: "Manchester United",
    num: 10
  })
  .then(function(res) {
    // res is the result array
    console.log(res.url);
  })
  .catch(function(err) {
    // err is the Error that maybe thrown here
  });
