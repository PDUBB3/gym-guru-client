// import { Carousel } from "bootstrap";
import Carousel from "../utils/Carousel";
import "../index.css";

const HomePage = () => {
  return (
    <>
      <Carousel>
        {
          <div id="app">
            <a
              href="https://youtu.be/5ptXXNjuUfg"
              target="_blank"
              data-keyframers-credit
              style="color: #FFF"
            ></a>
          </div>
        }
      </Carousel>
    </>
  );
};

export default HomePage;
