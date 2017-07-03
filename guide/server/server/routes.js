'use strict';

const Routes = function(app, emitter) {

  /* Routes
  ..................................... */
  app.get('/', function(req, res) {
    try {
      res.send('<html><body><div id="app"></div><script src="http://localhost:2001/app.bundle.js" async></script>');
    } catch (err) {
      emitter.emit('error', res, err);
    }
  });
};

module.exports = Routes;
