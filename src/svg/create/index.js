import fs from "fs";
import createCSS from "./createCSS";

const createSvg = async(config, iconsDirectory, distDirectory) => {
  const svgList = [];
  try {
    const files = await fs.promises.readdir(iconsDirectory);

    files.map(async(file) => {
      if (!file.substr(-4).match(/.svg|.png/)) {
        return;
      }
      const fileName = file.split('.svg')[0];
      const fileData = await fs.promises.readFile(`${iconsDirectory}/${file}`, "utf8")
      const css = await createCSS(config, fileName, fileData);

      css.forEach(async(item) => {
        await fs.promises.writeFile(`${distDirectory}/icons/${item.fileName}.css`, item.css);
      })

    });
  } catch (err) {
    console.error("Error occured while reading directory!", err);
  }
}

export default createSvg;
