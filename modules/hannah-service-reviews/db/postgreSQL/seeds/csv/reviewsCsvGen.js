const generator = require('../../../generate.js');
const csvWriter = require('csv-write-stream');
const writer = csvWriter();
const fs = require('fs');

/***** CSV GENERATOR *****/
/********
 * USED FOR SEEDING AWS EC2 INSTANCE WITH SMALLER CSV FILES
 * ORIGINAL LOCAL SEEDING METHOD DID NOT WORK FOR MY CASE
 * FOUND SOLUTION BY CREATING CSV's LOCALLY AND COPYING INTO EC2 INSTANCE
 * *******/
const generateReviewsCSV = () => {
  console.time('timing');
  console.log('Starting review csv generation');
  let count = 0;

  writer.pipe(fs.createWriteStream(__dirname + `/AWSreviews5.csv`));
  for (let i = 0; i < 10000000; i++) {
    let review = generator.createFakeReview();
    writer.write({
      book_id: review.book_id,
      user_id: review.user_id,
      date: review.date,
      review: review.review,
      rating: review.rating
    })
  }
  writer.end();
  console.timeEnd('timing');
}

generateReviewsCSV();