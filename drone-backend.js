var Cylon = require('cylon');
var ws = require('nodejs-websocket');
var bot;

// Initialise the robot
Cylon.robot()
    .connection("ardrone", {
        adaptor: 'ardrone',
        port: '192.168.1.1'
    })
    .device("drone", {
        driver: "ardrone",
        connection: "ardrone"
    })
    .on("ready", fly);
    
// Fly the bot
function fly(robot) {
    bot = robot;
    bot.drone.disableEmergency();
    bot.drone.ftrim();
    bot.drone.takeoff();
    after(5*1000, function(){
        bot.drone.up(1);
        bot.drone.front(0.1)
    });
    after(6*1000, function(){
        bot.drone.up(0);
        bot.drone.front(0);
    });
    after(10*1000, function(){
        bot.drone.left(0.05);
    });
    after(11*1000, function(){ //this is too stop the drone moving before a further command is given
        bot.drone.left(0);
    });
    after(16*1000, function(){
        bot.drone.front(0.05);
    });
    after(17*1000, function(){//this is too stop the drone moving before a further command is given
        bot.drone.front(0);
    });
    after(21*1000, function(){
        bot.drone.right(0.05);
    });
    after(23*1000, function(){//this is too stop the drone moving before a further command is given
        bot.drone.right(0);
    });
    after(27*1000, function(){
        bot.drone.back(0.05);
    });
    after(29*1000, function(){//this is too stop the drone moving before a further command is given
        bot.drone.back(0);
    });
    after(33*1000, function(){
        bot.drone.left(0.05);
    });
    after(34*1000, function(){//this is too stop the drone moving before a further command is given
        bot.drone.left(0);
    });
    after(38*1000, function(){
        bot.drone.down(0.1);
    });
    after(46*1000, function(){
        bot.drone.land();
    });
}

Cylon.start();

