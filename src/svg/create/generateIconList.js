import fs from "fs";
import { isArray } from "lodash";
/* ...............................
  Create Doc List
.................................*/
export default async (distDirectory, list) => {
  const arr = list.map((item) => {
    return `icon-${item.fileName}`;
  });
  return await fs.promises.writeFile(`${distDirectory}/../config/iconList.json`, JSON.stringify(arr, null, 2), 'utf8');
};
