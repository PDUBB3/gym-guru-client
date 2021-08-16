import "./BuddiesPage.css";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { USERS } from "../../graphql/queries";

import Filter from "../../components/BuddiesPage/Filter/Filter";
import BuddyCard from "../../components/BuddiesPage/BuddyCard/BuddyCard";

const BuddiesPage = () => {
  const [filterStatus, setFilterStatus] = useState(false);

  const { data, loading, error } = useQuery(USERS);

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (data) {
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
            {data.users.map((user) => {
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
