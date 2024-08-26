const express = require("express");
const moviesController = require("../controllers/moviesController");
const authController = require("../controllers/authController");
const router = express.Router();

router.route("/search").get(authController.checkToken, moviesController.searchMovies);
router.route("/popular").get(authController.checkToken, moviesController.getPopularMovies);
router.route("/general").get(authController.checkToken, moviesController.getAllMovies);
router.route("/add-favorite/:movieId").post(authController.checkToken, moviesController.addFavorite);
router.route("/favorites").get(authController.checkToken, moviesController.getFavorites);
router.route("/moviedata/:movieId").get(authController.checkToken, moviesController.getMovieData);
router.route("/remove-favorite/:movieId").post(authController.checkToken, moviesController.removeFavorite);
router.route("/:id").get(authController.checkToken, moviesController.getMovieByID);

module.exports = router;