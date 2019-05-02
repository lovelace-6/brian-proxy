const generate = require('../../generate.js');
const fs = require('fs');
const ObjectsToCsv = require('objects-to-csv');
const path = require('path');

exports.seed = async (knex) => {

  console.log('Beginning review data seed...');
  console.time('seed review time');
  // file pathname for csv file destination
  const file = path.join(__dirname, `/csv/reviews.csv`);
  // query to be used to copy CSV file into table
  const query = `COPY reviews(user_id, book_id, date, review, rating) FROM '${file}' DELIMITER ',' CSV HEADER`;


  let count = 0;
  // CSV HELPER FUNCTION--> deletes CSV on each iteration
  const deleteCSV = () => {
    fs.unlink(file, err => {
      if (err) {console.log(err)};
    })
  };

  // fs.createWriteStream(file);

  const seedDB = async() => {
    console.log('Beginning review data seed...');
    console.time('seed review time');
    // file pathname for csv file destination
    const file = path.join(__dirname, `/csv/reviews.csv`);
    // query to be used to copy CSV file into table
    const query = `COPY reviews(user_id, book_id, date, review, rating) FROM '${file}' DELIMITER ',' CSV HEADER`;


    let count = 0;
    // CSV HELPER FUNCTION--> deletes CSV on each iteration
    const deleteCSV = () => {
      fs.unlink(file, err => {
        if (err) {console.log(err)};
      })
    };

    fs.createWriteStream(file);

    const seedDB = async() => {
      while (count < 50) {
        let fakeReviews = [];
        for (let i = 0; i < 1000000; i++) {
          fakeReviews.push(generate.createFakeReview());
        }
        await new ObjectsToCsv(fakeReviews).toDisk(file);
        await knex.raw(query);
        await deleteCSV();
        count++;
      }
    }
    await seedDB();
    await console.timeEnd('seed review time');

};




