const express = require("express");

const router = express.Router();

const authors = [
    {
        index: 1,
        name: "Pushkin",
        image: "pushkin.jpg"
    },
    {
        index: 2,
        name: "Pasternak",
        image: "pushkin.jpg"
    },
    {
        index: 3,
        name: "Lermontov",
        image: "pushkin.jpg"
    },
    {
        index: 4,
        name: "David",
        image: "pushkin.jpg"
    },
];

let favorites = [];

router.get("/get", (req, res) => {
    res.send(authors);
});

router.get("/get/:index", (req, res) => {
    const index = req.params["index"];
    for (const author of authors)
        if (author.index == index)
            res.send(author);

    res.end();
});

router.post("/add", (req, res) => {
    if (favorites.includes(req.body.index)) res.status(400).end();
    else {
        favorites.push(req.body.index);
        res.status(200).end();
    }
});

router.get("/favorites", (req, res) => {
    res.send(favorites);
});

router.delete("/favorites/delete", (req, res) => {
    if (favorites.includes(req.body.index))
        favorites = favorites.filter(index => index != req.body.index);

    res.end();
});

module.exports = router;
