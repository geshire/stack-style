import fs from "fs";
import createCSS from "./createCSS";
import generateIconList from "./generateIconList";
import { flatten, compact } from "lodash";

const createSvg = async(colors, config, iconsDirectory, distDirectory) => {
  const svgList = [];
  try {
    const files = await fs.promises.readdir(iconsDirectory);

    const parseFile = async file => {
      if (!file.substr(-4).match(/.svg|.png/)) {
        return;
      }
      const fileName = file.split('.svg')[0];
      const fileData = await fs.promises.readFile(`${iconsDirectory}/${file}`, "utf8");
      return await createCSS(colors, config, fileName, fileData);
    }

    const writeFile = async item => {
      return await fs.promises.writeFile(`${distDirectory}/icons/${item.fileName}.css`, item.css);
    }

    const getData = async() => {
      return await Promise.all(files.map(file => parseFile(file)));
    }

    const writeCSS = async(data) => {
      return await Promise.all(data.map(item => writeFile(item)));
    }

    const data = compact(flatten(await getData()));
    console.log('writing css');
    await writeCSS(data);
    console.log('generating icon list');
    return await generateIconList(distDirectory, data);
  } catch (err) {
    console.error("Error occured while reading directory!", err);
  }
}

export default createSvg;
