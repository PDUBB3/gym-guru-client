import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import GymCard from "../GymCard/index";

// import React from "react";

const GymCarousel = ({ gyms }) => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlaySpeed={3000}
      centerMode={true}
      className=""
      ariaLabel={true}
      containerClass="container"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite={true}
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items: 3,
          partialVisibilityGutter: 40,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 30,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items: 2,
          partialVisibilityGutter: 30,
        },
      }}
      showDots={true}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      {gyms.map((gym) => {
        return <GymCard imageURL={gym.imageURL} name={gym.name} />;
      })}
      ;
    </Carousel>
  );
};

export default GymCarousel;
