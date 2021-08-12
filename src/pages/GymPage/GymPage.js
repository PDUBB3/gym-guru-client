import CustomizedAccordions from "../../components/GymPage/Accordian/Accordian";

import { FaStar, FaRegStar } from "react-icons/fa";
import "./GymPage.css";

const GymPage = ({ rating }) => {
  return (
    <div className="main-container">
      <div className="image-container">
        <img
          src="https://prod-we-cdn-media.puregym.com/media/805029/calcot-free-weights.jpg?quality=80"
          alt="pure gym"
          height="350"
        />
      </div>
      <div className="about-container">
        <h1 className="title">Fitness First</h1>
        <div className="info-container">
          <div>
            {(rating === 10 && (
              <div>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            )) ||
              (rating >= 8 && (
                <div>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </div>
              )) ||
              (rating >= 6 && (
                <div>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              )) ||
              (rating >= 3 && (
                <div>
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              )) ||
              (rating >= 1 && (
                <div>
                  <FaStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              )) ||
              (rating === 0 && (
                <div>
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                  <FaRegStar />
                </div>
              ))}
          </div>
          <div className="accordian">
            <CustomizedAccordions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymPage;
