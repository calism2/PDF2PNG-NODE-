import { fromPath } from "pdf2pic";
import * as fs from 'fs';
import crypto from 'crypto'

//brew install gs
//brew install graphicsmagick


( async() => {
  ["./images", "./pdfs"].forEach( folder => { if(!fs.existsSync(folder)){fs.mkdirSync(folder)} } )

  let files = fs.readdirSync("./pdfs");
  for(let i=0; i < files.length; i++){
    let pdfFile = files[i];
    if( pdfFile.split(".")[1] != "pdf" ) continue;
    
    const file = fs.readFileSync("./pdfs/"+pdfFile);
    var sha1sum = crypto.createHash('sha1').update(file).digest("hex");
    
    const storeAsImage = fromPath("./pdfs/"+pdfFile, {
      density: 600,
      saveFilename: sha1sum,
      savePath: "./images",
      format: "png",
      width: 1700,
      height: 2200
    });
    await storeAsImage(1);
    
  }

})()
