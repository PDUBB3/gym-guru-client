import { City } from "country-state-city";
import { useLazyQuery, useQuery } from "@apollo/client";

import { GYMS_QUERY } from "../../graphql/queries";
import GymCard from "../../components/GymCard";
import GymsJumbotron from "../../components/GymsJumbotron";
import GymFilter from "../../components/GymPage/GymFilter";

import "./GymsPage.css";

const GymsPage = () => {
  const { data, loading, error } = useQuery(GYMS_QUERY);

  const [getGyms, { loading: lazyLoading, data: lazyData, error: lazyError }] =
    useLazyQuery(GYMS_QUERY, {
      fetchPolicy: "network-only",
    });

  const cities = City.getCitiesOfCountry("GB");

  if (loading || lazyLoading) {
    return <h1>loading</h1>;
  }

  if (error || lazyError) {
    return <h1>error</h1>;
  }

  if (data || lazyData) {
    const exerciseFacilities =
      lazyData?.exerciseFacilities || data.exerciseFacilities;
    const otherFacilities = lazyData?.otherFacilities || data.otherFacilities;
    const gyms = lazyData?.gyms || data.gyms;

    return (
      <div>
        <GymsJumbotron />
        <GymFilter
          exerciseFacilities={exerciseFacilities}
          otherFacilities={otherFacilities}
          getGyms={getGyms}
          options={cities}
        />
        <div className="gym-cards">
          {gyms.map((gym) => {
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
