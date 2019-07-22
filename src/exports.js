import build from "./build/gulp.js";

export default {
  build: (config, dir, opts) => {
    build(__dirname, config, dir, opts);
  },
};
