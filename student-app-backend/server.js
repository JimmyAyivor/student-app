/**
 * This file represents our API server. It does the following:
 * - import an Express application
 * - start the server by listening on a particular port
 * 
 * TODOS:
 * - [] Port should be configurable by an environment variable
 *      (This is required by most deploy services.)
 */

const app = require('./app.js');

require('dotenv').config();

const port = process.env.PORT || 9000;

app.listen(port,"0.0.0.0", () => {
  console.log(`🎧 Listening on port ${port}!`);
});
