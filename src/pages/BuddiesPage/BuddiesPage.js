import { useLazyQuery, useQuery } from "@apollo/client";
import Loader from "react-loader-spinner";

import { City } from "country-state-city";

import { Box } from "@material-ui/core";

import { USERS_QUERY } from "../../graphql/queries";

import BuddiesJumbotron from "../../components/BuddiesJumbotron";
import BuddiesFilter from "../../components/BuddiesPage/Filter/BuddiesFilter";
import BuddyCard from "../../components/BuddiesPage/BuddyCard/BuddyCard";

import "./BuddiesPage.css";
import ErrorCard from "../../components/ErrorCard";

const BuddiesPage = () => {
  const [getUsers, { loading: lazyLoading, data: lazyData, error: lazyError }] =
    useLazyQuery(USERS_QUERY, {
      fetchPolicy: "network-only",
    });

  const { data, loading, error } = useQuery(USERS_QUERY);

  const cities = City.getCitiesOfCountry("GB");

  if (error) {
    return <h1>Error</h1>;
  }

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </Box>
    );
  }

  if (data || lazyData) {
    const users = lazyData?.users || data.users;

    return (
      <div>
        <BuddiesJumbotron />
        <BuddiesFilter getUsers={getUsers} options={cities} />
        <div className="buddiesBody">
          {users.length ? (
            <div className="buddiesCards">
              {users.map((user) => {
                return <BuddyCard data={user} />;
              })}
            </div>
          ) : (
            <ErrorCard text="buddies" />
          )}
        </div>
      </div>
    );
  }
};

export default BuddiesPage;
