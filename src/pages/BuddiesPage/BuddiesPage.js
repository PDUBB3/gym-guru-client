import "./BuddiesPage.css";
import { useState } from "react";

import Filter from "../../components/BuddiesPage/Filter/Filter";
import BuddyCard from "../../components/BuddiesPage/BuddyCard/BuddyCard";

const BuddiesPage = () => {
  const [filterStatus, setFilterStatus] = useState(false);
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
          <BuddyCard />
        </div>
      </div>
      <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
    </div>
  );
};

export default BuddiesPage;
