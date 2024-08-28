function MovieDescription({movie}){
    return (
       <>
         <h2>{movie.title}</h2>
         <p>{movie.description}</p>
         <h2 class="cast-heading">{movie.title}'s Cast</h2>
       </>
    )
};

export default MovieDescription;