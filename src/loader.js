const server = require('./config/server')
require('./config/dbconnect')
require('./config/routes')(server)