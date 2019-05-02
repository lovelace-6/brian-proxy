const generator = require('../../generate.js');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fs = require('fs');

const generateUsersCSV = () => {
  console.log('Starting user csv generation');
  console.time('timing');
  let count = 0;
  writer.pipe(fs.createWriteStream(__dirname + '/users.csv'));
  for (let i = 0; i < 10000000; i++) {
    let user = generator.createFakeUser();
    writer.write({
      id: count++,
      username: user.username,
      avatar: user.avatar
    })
  }

  writer.end();
  console.timeEnd('timing');
}

generateUsersCSV();
