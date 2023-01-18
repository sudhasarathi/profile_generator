const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', () => {
  rl.question('What is your name? ', () => {
    rl.question('Nicknames are also acceptable :) ', () => {
      rl.question(' What do you listen to while doing that?', () => {
        rl.question(' Which meal is your favourite (eg: dinner, brunch, etc.)', () => {
          rl.question(' Whats your favourite thing to eat for that meal?', () => {
            rl.question(' Which sport is your absolute favourite?', () => {
              rl.question(' What is your superpower? In a few words, tell us what you are amazing at!', () => {
                
                console.log(`Thank you for your valuable feedback:`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});