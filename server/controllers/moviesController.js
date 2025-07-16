const { S3Client } = require("@aws-sdk/client-s3");
const executeQuery = require("../connection/execution");

const accountId = process.env.S3_ACCOUNT_ID;
const accessKeyId = process.env.S3_ACCESS_KEY_ID;
const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;

const s3 = new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
    },
});

exports.getAllMovies = async (request, response) => {
    try {
        const SQL = "SELECT * FROM MOVIES WHERE SECTION = 'General'";
        const results = await executeQuery(SQL);

        response.status(200).json({
            status: "success",
            movies: results,
        });
    } catch (err) {
        response.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};

exports.getPopularMovies = async (request, response) => {
    try {
        const SQL = "SELECT * FROM MOVIES WHERE SECTION = 'Popular'";
        const results = await executeQuery(SQL);

        response.status(200).json({
            status: "success",
            movies: results,
        });
    } catch (err) {
        response.status(400).json({
            status: "fail",
            message: err.message,
        });
    }
};


exports.getMovieData = async (request, response) => {
    try {
        const { movieId } = request.params;
        const SQL = "SELECT * FROM MOVIES WHERE ID = ?";
        const result = await executeQuery(SQL, [movieId]);

        response.status(200).json({
            status: "success",
            result,
        });
    } catch (err) {
        response.status(500).json({
            status: "fail",
            message: err.message,
        });
    }
};

exports.getMovieByID = async (request, response) => {
    try {
        const { id } = request.params;

        if (!id) {
            return response.status(400).json({
                status: "fail",
                message: "ID not provided!",
            });
        }

        const SQL = "SELECT * FROM MOVIES WHERE ID = ?";
        const results = await executeQuery(SQL, [id]);

        if (results.length === 0) {
            return response.status(404).json({
                status: "fail",
                message: "Movie not found!",
            });
        }

        const movie = results[0];

        const fileTitle = movie.title.replace(/\s+/g, "").toLowerCase();
        movie.url = `${process.env.S3_PUBLIC_DEVELOPMENT_URL}/${fileTitle}/master.m3u8`;

        return response.status(200).json({
            status: "success",
            movie,
        });
    } catch (err) {
        return response.status(500).json({
            status: "fail",
            message: err.message,
        });
    }
};

exports.searchMovies = async (request, response) => {
    const query = request.query.q;
    if (!query) {
        return response.status(400).json({
            status: "fail",
            message: "No query parameters!",
        });
    }
    try {
        const SQL = "SELECT * FROM MOVIES WHERE title LIKE ?";
        const results = await executeQuery(SQL, [`${query}%`]);

        response.status(200).json({
            status: "success",
            movies: results,
        });
    } catch (err) {
        response.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

exports.addFavorite = async (request, response) => {
    try {
        const movieId = +request.params.movieId;
        const userId = +request.cookies.uid;

        console.log("movie: ", movieId, "\nuser: ", userId);
        const SQL = "INSERT INTO FAVORITES (user_id, movie_id) VALUES (?, ?)";
        const result = await executeQuery(SQL, [userId, movieId]);

        response.status(200).json({
            status: "success",
            user: userId,
            favorite: movieId,
        });
    } catch (err) {
        if (err.code === "ER_DUP_ENTRY") {
            return response.status(409).json({
                status: "fail",
                message: "This movie already exists in the favorites page!",
            });
        }
        response.status(500).json({
            status: "fail",
            message: err.message,
        });
    }
};

exports.getFavorites = async (request, response) => {
    try {
        const uid = +request.cookies.uid;
        const SQL = "SELECT movie_id FROM FAVORITES WHERE user_id = ?";
        const result = await executeQuery(SQL, [uid]);

        response.status(200).json({
            status: "success",
            result,
        });
    } catch (err) {
        response.status(500).json({
            status: "fail",
            message: err.message,
        });
    }
};

exports.removeFavorite = async (request, response) => {
    try {
        const { movieId } = request.params;
        const uid = request.cookies.uid;
        const SQL = "DELETE FROM FAVORITES WHERE user_id = ? AND movie_id = ?";
        const result = await executeQuery(SQL, [uid, movieId]);

        response.status(204).json({
            status: "success",
        });
    } catch (err) {
        response.status(500).json({
            status: "fail",
            message: err.message,
        });
    }
};
