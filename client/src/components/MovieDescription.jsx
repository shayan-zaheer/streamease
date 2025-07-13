function MovieDescription({movie}){
    return (
        <div className="profile-card">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                About {movie.title}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {movie.description}
            </p>
            <h3 className="text-xl font-semibold text-white mb-4">
                Cast & Crew
            </h3>
        </div>
    )
};

export default MovieDescription;