import { useQuery } from "@apollo/client";
import { GYMS_QUERY } from "../../graphql/queries";

import GymCard from "../../components/GymCard";

import GymsJumbotron from "../../components/GymsJumbotron";

import "./GymsPage.css";
import GymFilter from "../../components/GymPage/GymFilter";

const GymsPage = () => {
  const { data, loading, error } = useQuery(GYMS_QUERY);

  if (loading) {
    return <h1>loading</h1>;
  }

  if (error) {
    return <h1>error</h1>;
  }

  if (data) {
    return (
      <div>
        <GymFilter />
        <GymsJumbotron />
        <div className="gym-cards">
          {data.gyms.map((gym) => {
            return (
              <GymCard
                id={gym.id}
                name={gym.name}
                address={gym.address}
                postcode={gym.postCode}
                city={gym.city}
                contactNumber={gym.contactNumber}
                imageURL={gym.imageURL}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default GymsPage;
