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
    after(0*1000, function(){
        bot.drone.up(0.1);
    });
    after(1*1000, function(){
        bot.drone.left(0.1);
    });
    after(2*1000, function(){ //this is too stop the drone moving before a further command is given
        bot.drone.right(0);
    });
    after(2*1000, function(){
        bot.drone.front(0.1);
    });
    after(4*1000, function(){//this is too stop the drone moving before a further command is given
        bot.drone.back(0);
    });
    after(4*1000, function(){
        bot.drone.right(0.1);
    });
    after(6*1000, function(){//this is too stop the drone moving before a further command is given
        bot.drone.left(0);
    });
    after(6*1000, function(){
        bot.drone.back(0.1);
    });
    after(8*1000, function(){//this is too stop the drone moving before a further command is given
        bot.drone.forward(0);
    });
    after(8*1000, function(){
        bot.drone.left(0.1);
    });
    after(9*1000, function(){//this is too stop the drone moving before a further command is given
        bot.drone.right(0);
    });
    after(9*1000, function(){
        bot.drone.down(0.1);
    });
    after(10*1000, function(){
        bot.drone.land();
    });
}

Cylon.start();

