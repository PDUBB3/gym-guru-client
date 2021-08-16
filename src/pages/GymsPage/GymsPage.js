import { useQuery } from "@apollo/client";
import { GYMS_QUERY } from "../../graphql/queries";

import GymCard from "../../components/GymCard";

import "./GymsPage.css";

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
        <div className="gym-cards">
          {data.gyms.map((gym) => {
            return (
              <GymCard
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
