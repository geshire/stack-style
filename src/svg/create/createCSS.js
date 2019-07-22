import fs from "fs";
import mustache from "mustache";

const createCSS = async(colors, config, fileName, fileData) => {
  const icons = [];
  const template = await fs.promises.readFile(`${__dirname}/../template.icon.mustache`, "utf8");
  const params = {
    datauri: encodeURIComponent(fileData),
    prefix: '.icon',
    name: fileName,
  };

  icons.push({
    fileName,
    css: mustache.render(template, params)
  });

  config.colors.map(color => {
    params.name = `${fileName}-${color.name}`;
    const hex = colors.filter(colorHex => (colorHex.name === color.hex.replace("$", "")));
    params.datauri = encodeURIComponent(
      fileData.replace(/(fill=\"\#).{3,6}(\")/gi, `fill="${hex[0].color}"`)
    );
    icons.push({
      fileName: params.name,
      css: mustache.render(template, params),
    });
  });

  return icons;
};

export default createCSS;
