const express = require('express');
const bookRouter = express.Router();

function router(nav) {
    const books = [
        {
            title: 'title',
            genre: 'genre',
            author: 'author',
            read: false,
        },
        {
            title: 'title2',
            genre: 'genre2',
            author: 'author2',
            read: false,
        },
        {
            title: 'title3',
            genre: 'genre3',
            author: 'author3',
            read: true,
        },
    ];

    bookRouter.route('/')
        .get((req, res) => {
            res.render(
                'bookListView',
                {
                    nav,
                    title: 'Library',
                    books,
                },
            );
        });
    bookRouter.route('/:id')
        .get((req, res) => {
            const { id } = req.params || {}
            res.render(
                'bookView',
                {
                    nav,
                    title: 'Library',
                    book: books[id],
                },
            );
        });

    return bookRouter
}

module.exports = router