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
    }
]

router.get("/", (req, res) => {
    res.send(authors);
});

module.exports = router;
