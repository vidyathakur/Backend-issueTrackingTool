const socketio = require('socket.io');
const mongoose = require('mongoose');
const shortid = require('shortid');
const logger = require('./loggerLib.js');
const events = require('events');
const eventEmitter = new events.EventEmitter();

const tokenLib = require('./tokenLib.js');
const check = require('./checkLib.js');
const response = require('./responseLib');
const NotificationModel = mongoose.model('Notification');

let setServer = (server) => {
  let io = socketio.listen(server);

  io.on('connection', (socket) => {
										/* Get single Issue details */
              socket.on('comment', function(data){
                    console.log('new connection made');
                    NotificationModel.aggregate([
                      {
                        $match: {
                          status: 1
                        }
                      },
                      {
                        $lookup: {
                          from: 'comments',
                          localField: 'commentId',
                          foreignField: 'commentId',
                          as: 'comment_details'
                        }
                      }
                    ]).exec((err, result) => {
                      if (err) {
                        console.log(err);
                        logger.error(err.message, 'Issue Controller: getSingleIssue', 10);
                        let apiResponse = response.generate(true, 'Failed To Find Issue Details', 500, null);
                        res.send(apiResponse);
                      } else {
                        console.log(result);
                              io.sockets.emit('notification', {
                                total_notify: result.length,
                                notification: result
                              });
                          }
                    });
              })
		})
}

module.exports = {
	setServer: setServer
};
