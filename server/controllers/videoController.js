const Video = require("../models/video");

exports.createMovie = async (request, response) => {
	const { id, title, link, thumbnail } = request.body;
	try{
		await Video.create({ id, title, link, thumbnail });
		response.status(201).json({
            status: "success",
        })
	} 
    catch(error){
		console.error(error.message);
		response.status(500).send("Error uploading video.");
	}
};

exports.getAllMovies = async (request, response) => {
	try{
		const videos = await Video.findAll();

        if(!videos){
            return response.status(400).json({
                status: "fail",
                message: "Movies not found!"
            })
        }

        response.status(201).json({
            status: "success",
            videos: videos
        })
    }
	catch(error){
		console.error(error.message);
		response.status(500).send("Error fetching videos.");
	}
};
