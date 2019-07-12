/* ...............................
  Create Doc List
.................................*/
self.createDocList = function(callback) {
  svg.list = self.svgList;

  fs.writeFile(`config/${type}.json`, JSON.stringify(svg, null, 2), 'utf8', function(err) {
    if (err) {
      return process.stdout.write(chalk.red(err));
    }
    callback();
  });
};
