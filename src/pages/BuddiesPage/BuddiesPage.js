import "./BuddiesPage.css";
import { useState, useContext } from "react";
import { useQuery } from "@apollo/client";
import { USERS } from "../../graphql/queries";

import { BuddiesFilterContext } from "../../context/BuddiesFilterContext";

import Filter from "../../components/BuddiesPage/Filter/Filter";
import BuddyCard from "../../components/BuddiesPage/BuddyCard/BuddyCard";

const BuddiesPage = () => {
  const [filterStatus, setFilterStatus] = useState(false);

  const { filterParams, setFilterParams } = useContext(BuddiesFilterContext);

  console.log(filterParams);

  const { data, loading, error } = useQuery(USERS);

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

      return data.users.filter((user) => user.city === filterParams);
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
