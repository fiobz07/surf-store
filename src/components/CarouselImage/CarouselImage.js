import Carousel from "react-bootstrap/Carousel";
import "./CarouselImage.scss";

function CarouselImage() {
	return (
		<Carousel fade className="carousel__images">
			<Carousel.Item>
				<div className="carousel__images__wrapper">
					<img src="/images/carousel/01.jpg" />
				</div>
				<Carousel.Caption>
					<h3>Skate</h3>
					<p>Lo ultimo en skateboards</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<div className="carousel__images__wrapper">
					<img src="/images/carousel/02.jpg" />
				</div>
				<Carousel.Caption>
					<h3>Tablas de Surf</h3>
					<p>Tenemos las mejores marcas de tablas.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<div className="carousel__images__wrapper">
					<img src="/images/carousel/03.jpg" />
				</div>
				<Carousel.Caption>
					<h3>Tablas de Snowboard</h3>
					<p>Conoce todas las marcas que trabajamos.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default CarouselImage;
