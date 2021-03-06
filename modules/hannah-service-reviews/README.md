# Bookshelf

> Bookshelf is a clone of an item page from https://goodreads.com. It includes 4 modules: the main book information, extra details, author details, and the reviews.


| intention     | request type  |  request url  | request body | side effect | response body |
| ------------- | ------------- | ------------- | -------------| ------------| ----------- |
| get reviews for a specific book  | GET | /books/:id/reviews | none | none | {"id": 75, "user_id": 100,"book_id": 3,"date": "..","review": "..","rating": 1,"likes":0|
| add new review for book  | POST | /books/:id/reviews | {...book_id: 3, review: '...'} | creates entry in database | {...'book_id': 3, 'review': '...'} |
| increment likes for a review  | PUT | /books/:id/reviews | {...book_id: 3, likes: 0} | update column in database | {... 'book_id': 3, 'likes': 0} |
| delete review  | DELETE | /books/:id/reviews | {...book_id: 3, review: '...'} | delete row in database table | {... 'book_id': 3, 'review': '...} |

## Related Projects

  - https://github.com/hrr37-hermes-4/repo
  - https://github.com/hrr37-hermes-4/repo
  - https://github.com/hrr37-hermes-4/repo
  - https://github.com/hrr37-hermes-4/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development
Workflow and sprint management can be seen at: https://trello.com/b/sI4IwOWn/fec.

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### To Run
  - Run 'npm run start:dev' to start server. Nodemon should be installed on your machine.
  - Run 'npm run build:dev' to build files with Webpack and create bundle.js.
  - Run 'npm run seed-db' to seed the database.
  - Run 'npm test" to run tests.

