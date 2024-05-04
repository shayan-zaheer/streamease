const express = require("express");
const router = express.Router();

const videoController = require("../controllers/videoController");

router.route("/")
    .post(videoController.createMovie)
    .get(videoController.getAllMovies);

module.exports = router;