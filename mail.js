const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const exec = require('child_process').exec;
rl.question("Recipients Email: ", function(email) {
rl.question("Message; ", function(body){
exec(`curl -X POST -F 'email=${email}' -F 'body=${body}' https://kuriyama-app.000webhostapp.com/mail/freemail.php`, (err, stdout, stderr) => {
 if (err) {
   console.error(err);
   return;
    console.log('Error..')
  }
 console.log(stdout);
        rl.close();
        });
    });
    });
rl.on("close", function() {
console.log('\nMy Telegram: @renlowsphere');
    process.exit(0);
});
