import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import MovieBox from "./MovieBox";

function PopularMovies(){
    const {popularMovies} = useSelector(store => store.movies);

	return (
		<section className="popular container" id="popular">
			<div className="heading">
				<h2 className="heading-title">Popular Movies</h2>
				<div className="swiper-btn">
					<div className="swiper-button-prev"></div>
					<div className="swiper-button-next"></div>
				</div>
			</div>
			<Swiper
				spaceBetween={20}
				slidesPerView={4}
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				}}
				modules={[Navigation]}
				className="popular-content"
			>
				{popularMovies.map((movie) => (
					<SwiperSlide key={movie.id}>
						<MovieBox key={movie.id} movie={movie} />
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default PopularMovies;
