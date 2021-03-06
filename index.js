const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const appConfig = require('./config/appConfig');
const http = require('http');
const logger = require('./libs/loggerLib');
const globalErrorMiddleware = require('./middlewares/appErrorHandler');
const routeLoggerMiddleware = require('./middlewares/routeLogger.js');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');


const routesPath = './routes';
const modelsPath = './models';
const controllersPath = './controllers';
const libsPath = './libs';

const storage = multer.diskStorage({
	destination: (req, file, callBack) => {
		callBack(null, 'uploads');
	},
	filename: (req, file, callBack) => {
		callBack(null,file.originalname);
	}
});

const upload = multer({ storage: storage });


//declaring an instance or creating an application instance
const app = express()

app.use(morgan('dev'));
app.use(express.static('./uploads'));
//middlewares
app.use(bodyParser.json())
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(routeLoggerMiddleware.logIp);
app.use(globalErrorMiddleware.globalErrorHandler);

app.post('/file', upload.single('file'), (req, res, next) => {
	const file = req.file;
	console.log(req.file);
  
	if (!file) {
		const error = new Error('No File');
		error.httpStatusCode = 400;
		return next(error);
	}
	res.send(file);
});



app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    next();
});

//Bootstrap models
fs.readdirSync(modelsPath).forEach(function (file) {
  if (~file.indexOf('.js')) require(modelsPath + '/' + file)
});
// end Bootstrap models

// Bootstrap route
fs.readdirSync(routesPath).forEach(function (file) {
  if (~file.indexOf('.js')) {
    let route = require(routesPath + '/' + file);
    route.setRouter(app);
  }
});
// end bootstrap route









// calling global 404 handler after route

app.use(globalErrorMiddleware.globalNotFoundHandler);

// end global 404 handler

/**
 * Create HTTP server.
 */

const server = http.createServer(app);
// start listening to http server
console.log(appConfig);
server.listen(appConfig.port);
server.on('error', onError);
server.on('listening', onListening);

// end server listening code


// socket io connection handler 
const socketLib = require("./libs/socketLib");
const socketServer = socketLib.setServer(server);


// end socketio connection handler


/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    logger.error(error.code + ' not equal listen', 'serverOnErrorHandler', 10)
    throw error;
  }


// handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler', 10);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logger.error(error.code + ':port is already in use.', 'serverOnErrorHandler', 10);
      process.exit(1);
      break;
    default:
      logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler', 10);
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  ('Listening on ' + bind);
  logger.info('server listening on port' + addr.port, 'serverOnListeningHandler', 10);
  let db = mongoose.connect(appConfig.db.uri, { useNewUrlParser: true});
}

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});


/**
 * database connection settings
 */
mongoose.connection.on('error', function (err) {
  console.log('database connection error');
  console.log(err)
  logger.error(err,
    'mongoose connection on error handler', 10)
  //process.exit(1)
}); // end mongoose connection error

mongoose.connection.on('open', function (err) {
  if (err) {
    console.log("database error");
    console.log(err);
    logger.error(err, 'mongoose connection open handler', 10)
  } else {
    console.log("database connection open success");
    logger.info("database connection open",
      'database connection open handler', 10)
  }
  //process.exit(1)
}); // enr mongoose connection open handler


module.exports = app;
