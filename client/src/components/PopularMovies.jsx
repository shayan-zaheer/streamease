import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import MovieBox from "./MovieBox";
import { motion } from "framer-motion";

function PopularMovies(){
    const {popularMovies} = useSelector(store => store.movies);

	return (
		<motion.section 
			className="py-8" 
			id="popular"
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
		>
			<motion.div 
				className="container mx-auto px-6"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.2, duration: 0.7 }}
			>
				<div className="flex items-center justify-between mb-8">
					<h2 className="text-responsive-2xl font-bold text-white">
						Popular Movies
					</h2>
					<div className="flex gap-2">
						<button className="swiper-button-prev-custom swiper-button-custom">
							←
						</button>
						<button className="swiper-button-next-custom swiper-button-custom">
							→
						</button>
					</div>
				</div>
				
				<Swiper
					spaceBetween={20}
					slidesPerView={1}
					breakpoints={{
						640: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						1024: {
							slidesPerView: 4,
						},
						1280: {
							slidesPerView: 5,
						},
					}}
					navigation={{
						nextEl: ".swiper-button-next-custom",
						prevEl: ".swiper-button-prev-custom",
					}}
					modules={[Navigation]}
					className="w-full"
				>
					{popularMovies.map((movie) => (
						<SwiperSlide key={movie.id}>
							<MovieBox movie={movie} />
						</SwiperSlide>
					))}
				</Swiper>
			</motion.div>
		</motion.section>
	);
};

export default PopularMovies;
