const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'sdc' });

const initSchema = () => {

  client.execute('CREATE TABLE IF NOT EXISTS users ( \
    id int PRIMARY KEY, \
    username varchar, \
    avatar varchar)');

  client.execute('CREATE TABLE IF NOT EXISTS reviews ( \
    id int, \
    book_id int, \
    user_id int, \
    date varchar, \
    review varchar, \
    rating int, \
    likes int, \
    PRIMARY KEY((book_id), rating, id) \
    )');

}

initSchema();