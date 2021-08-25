import "./BuddiesPage.css";
import { useState, useContext } from "react";
import { useLazyQuery, useQuery } from "@apollo/client";
import { City } from "country-state-city";

import { USERS_QUERY } from "../../graphql/queries";

import BuddiesJumbotron from "../../components/BuddiesJumbotron";
import BuddiesFilter from "../../components/BuddiesPage/Filter/BuddiesFilter";
import BuddyCard from "../../components/BuddiesPage/BuddyCard/BuddyCard";

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
    return <h1>Loading</h1>;
  }

  if (data || lazyData) {
    const users = lazyData?.users || data.users;

    return (
      <div>
        <BuddiesJumbotron />
        <div className="buddiesHeader">
          <h1>Find a buddy!</h1>
        </div>
        <div className="buddiesBody">
          <div>
            <BuddiesFilter getUsers={getUsers} options={cities} />
          </div>
          <div className="buddiesCards">
            {users.map((user) => {
              return <BuddyCard data={user} />;
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default BuddiesPage;
