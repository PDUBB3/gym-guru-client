// import { Carousel } from "bootstrap";
import Carousel from "../utils/Carousel";

import Header from "../components/Header/Header";

import "../index.css";

const HomePage = (props) => {
  return (
    <>
      <Header />
      <Carousel>
        {
          <div id="app">
            <a
              href="https://youtu.be/5ptXXNjuUfg"
              target="_blank"
              rel="noreferrer"
              data-keyframers-credit
              style="color: #FFF"
            >
              Link text
            </a>
          </div>
        }
      </Carousel>
    </>
  );
};

export default HomePage;
