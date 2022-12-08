import { fromPath } from "pdf2pic";

const options = {
    density: 600,
    saveFilename: "untitled",
    savePath: "./images",
    format: "png",
    width: 1700,
    height: 2200
};
//brew install gs
//brew install graphicsmagick
const storeAsImage = fromPath("./pdfs/DM02022018203882.pdf", options);
const pageToConvertAsImage = 1;

storeAsImage(pageToConvertAsImage).then((resolve) => {
  console.log("Page 1 is now converted as image");

  return resolve;
});