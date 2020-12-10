let express = require("express"),
    http = require('http'),
    app = express();

app.use(express.static("public"));
app.get("/", (_, res) => res.sendFile(__dirname + "/index.html"));

let listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var mineflayer = require('mineflayer');
var options = {
  //host: "mc.civcraft.vg",
  host: "lb2t.aternos.me",
  port: 25565,
  username: "adrianmessel@hotmail.com",
  password: "Adrian03123",
};

var bot = mineflayer.createBot(options);

// bindEvents(bot);


function bindEvents(bot) {
    bot.on('login', function() {
      console.log("I logged in.");
      console.log("settings", bot.settings);
    });

    bot.on('kicked', function(reason) {
      console.log("I got kicked for", reason, "lol");

      bot = mineflayer.createBot(options);
      bindEvents(bot);
    });
}



