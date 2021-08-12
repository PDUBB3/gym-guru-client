import { useQuery } from "@apollo/client";
import { GYMS } from "../graphql/queries";

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
          <h1>This is the gyms page</h1>
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
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default GymsPage;
