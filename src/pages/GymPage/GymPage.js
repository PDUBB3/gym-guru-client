import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import CustomizedAccordions from "../../components/Accordian/Accordian";
import Rating from "../../components/GymPage/Rating/Rating";
import { GYM_QUERY } from "../../graphql/queries";

import "./GymPage.css";

const GymPage = ({ rating }) => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GYM_QUERY, {
    variables: { id },
  });

  if (loading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  if (!data?.gym) {
    return <div>error</div>;
  }

  const gymData = data.gym;

  console.log(gymData);

  return (
    <div className="main-container">
      <div className="image-container">
        <img
          src="https://prod-we-cdn-media.puregym.com/media/805029/calcot-free-weights.jpg?quality=80"
          alt="pure gym"
          height="350"
          class="image"
        />
      </div>
      <div className="about-container">
        <h1 className="title">Fitness First</h1>
        <div className="info-container">
          <Rating />
          <div className="accordian">
            <CustomizedAccordions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymPage;
