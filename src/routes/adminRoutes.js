const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:adminRoutes');

const adminRouter = express.Router();

const books = [
  {
    title: 'title',
    genre: 'genre',
    author: 'author',
    read: false,
    bookId: 656,
  },
  {
    title: 'title2',
    genre: 'genre2',
    author: 'author2',
    read: false,
    bookId: 24280,
  },
  {
    title: 'title3',
    genre: 'genre3',
    author: 'author3',
    read: true,
  },
  {
    title: 'title4',
    genre: 'genre4',
    author: 'author4',
    read: true,
  },
];

function router() {
  adminRouter.route('/')
    .get((req, res) => {
      const url = 'mongodb://localhost:27017';
      const dbName = 'libraryApp';
      (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(url);
          debug('Connected to the server');

          const db = client.db(dbName);

          const response = await db.collection('books').insertMany(books);
          res.json(response);
        } catch (err) {
          debug(err.stack);
        }

        client.close();
      }());
    });

  return adminRouter;
}

module.exports = router;
