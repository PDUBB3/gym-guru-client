import { useQuery } from "@apollo/client";
import { GYMS } from "../graphql/queries";
import Header from "../components/Header/Header";

import GymCard from "../components/GymCard";

const GymsPage = () => {
  const { data, loading, error } = useQuery(GYMS);

  console.log(data);

  if (loading) {
    return <h1>loading</h1>;
  }

  if (error) {
    return <h1>error</h1>;
  }

  if (data) {
    return (
      <div>
        <div>
        <Header />
        </div>
        <div className="gymCards">
          {data.gyms.map((gym) => {
            return (
              
              <GymCard
                name={gym.name}
                address={gym.address}
                postcode={gym.postcode}
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
