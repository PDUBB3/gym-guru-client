import "./BuddiesPage.css";
import { useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { USERS_QUERY } from "../../graphql/queries";

import { BuddiesFilterContext } from "../../context/BuddiesFilterContext";

import Filter from "../../components/BuddiesPage/Filter/Filter";
import BuddyCard from "../../components/BuddiesPage/BuddyCard/BuddyCard";

const BuddiesPage = () => {
  const [filterStatus, setFilterStatus] = useState(false);

  const { filterParams, setFilterParams } = useContext(BuddiesFilterContext);

  const { data, loading, error } = useQuery(USERS_QUERY);

  console.log(data);

  if (error) {
    return <h1>Error</h1>;
  }

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (data) {
    const handleFilter = () => {
      if (filterParams === "") {
        return data.users;
      }

      if (filterParams.city && filterParams.gym) {
        return data.users.filter(
          (user) =>
            user.attendingGymId !== null &&
            user.city === filterParams.city &&
            user.attendingGymId.name === filterParams.gym
        );
      }

      console.log(data.users);
      return data.users.filter((user) => user.city === filterParams.city);
    };

    return (
      <div>
        <div className="buddiesHeader">
          <h1>Find a buddy!</h1>
        </div>
        <div className="buddiesBody">
          <div>
            <button
              onClick={() => setFilterStatus(!filterStatus)}
              className="filterButton"
            >
              Filter
            </button>
          </div>
          <div className="buddiesCards">
            {handleFilter().map((user) => {
              return <BuddyCard data={user} />;
            })}
          </div>
        </div>
        <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
      </div>
    );
  }
};

export default BuddiesPage;
