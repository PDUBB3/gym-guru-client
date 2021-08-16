import Carousel from "react-multi-carousel";

import GymCard from "../GymCard";

import "react-multi-carousel/lib/styles.css";
import "./GymCarousel.css";

const GymCarousel = ({ gyms }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40, // this is optional if you are not using partialVisible props
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30, // this is optional if you are not using partialVisible props
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is optional if you are not using partialVisible props
    },
  };

  return (
    <Carousel
      containerClass="gym-carousel-container"
      infinite={true}
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {gyms.map((gym) => {
        return <GymCard {...gym} />;
      })}
    </Carousel>
  );
};

export default GymCarousel;
