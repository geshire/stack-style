'use strict';

const SVG = function(type, done) {

  const _ = require('lodash');
  const a = require('async');
  const fs = require('graceful-fs');
  const mustache = require('mustache');
  const chalk = require('chalk');
  const sizeOf = require('image-size');
  const svg = require(`../config/${type}.json`);
  const path = require('path');

  let self = {
    svgList: []
  };

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

  /* ...............................
    Create and Export the CSS
  .................................*/
  self.createCSS = function(icon, color, data, filePath, callback) {
    let model;

    if (color) {
      data = color.hex ? data.replace(/(fill=\"\#).{6}(\")/gi, 'fill="' + color.hex + '"') : data;
    }

    if (type === "icons") {
      model = {
        datauri: encodeURIComponent(data),
        prefix: '.icon',
        name: icon,
        color: color ? '-' + color.name : ''
      };
    }

    if (type === "symbols") {
      const dimensions = sizeOf(filePath);

      model = {
        datauri: encodeURIComponent(data),
        prefix: '.symbol',
        name: icon,
        sizes: {
          xsmall: {
            width: dimensions.width * .5,
            height: dimensions.height * .5,
          },
          small: {
            width: dimensions.width * .75,
            height: dimensions.height * .75,
          },
          medium: {
            width: dimensions.width,
            height: dimensions.height,
          },
          large: {
            width: dimensions.width * 1.25,
            height: dimensions.height * 1.25,
          },
          xlarge: {
            width: dimensions.width * 1.5,
            height: dimensions.height * 1.5,
          },
        }
      };
    }


    let filename = `src/svg/css/${type.replace(/s+$/, "")}-${icon}.css`;
    let groupFilename = `guide/public/${type}.css`;
    let output = mustache.render(self.template, model);

    fs.appendFile(filename,  output, function() {
      fs.appendFile(groupFilename,  output, function() {
        callback();
      });
    });
  };

  /* ...............................
    Walk through all the Icons
  .................................*/
  self.walkFiles = function(files, cb) {
    let total;

    files = files.filter(function(file) {
      return file.substr(-4) === '.svg';
    });

    if (files.length <= 0) {
      return cb();
    }

    if (type === "icons") {
      total = Object.keys(svg.colors).length * files.length;
    } else if (type === "symbols") {
      total = files.length;
    }

    let count = 0;

    _.each(files, function (filename) {
      let filePath = path.join(`src/svg/${type}`, filename);
      let name = filename.split('.svg')[0];
      let data = fs.readFileSync(filePath, 'utf8');
      self.svgList.push(name);

      self.createCSS(name, null, data, filePath, function() {
        count++;
        if (count === total) {
          cb();
        }
      });

      if (type === "icons") {
        Object.keys(svg.colors).map(function(key) {
          self.createCSS(name, {
            name: key,
            hex: svg.colors[key]
          }, data, filePath, function() {
            count++;
            if (count === total) {
              cb();
            }
          });
        });
      }
    });
  };

  /* ...............................
    Init Each Set
  .................................*/
  self.template = fs.readFileSync(`src/svg/template.${type.replace(/s+$/, "")}.mustache`, 'utf8');

  fs.writeFile(`guide/public/${type}.css`, '', function(){
    a.waterfall([
      function (cb) {
        fs.readdir(`src/svg/${type}`, cb);
      },
      function (files, cb) {
        self.walkFiles(files, cb);
      }
    ], function (err) {
      if (err) {
        process.stdout.write(chalk.red(err));
      } else {
        self.createDocList(function() {
          done();
        });
      }
    });
  })
};

module.exports = SVG;
