function replaceMyImgs() {

// put live url here
var liveUrl = "1864133.fs1.hubspotusercontent-na1.net/hubfs/1864133/EVOX_website_JS_files/web-call-files";

// find the local url
var localUrl = "www.evoxglobal.com";

// replace the local url for the live url
var newUrl = localUrl.replace(/www.evoxglobal.com/g, liveUrl);

// console.log(newUrl);

// get all images and push them in an empty array
// get all images
var imgs = document.getElementsByTagName('e2-web-call')[0].shadowRoot.querySelectorAll("img");
console.log(imgs);


for (var i = 0; i < imgs.length; i++) {
  var newSrc = imgs[i].src.replace(/www.evoxglobal.com/g, liveUrl);
  imgs[i].src = newSrc;
  console.log(imgs[i].src);
}


}

window.onload = replaceMyImgs;