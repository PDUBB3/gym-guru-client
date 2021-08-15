import "./BuddiesPage.css";
import Filter from "../../components/BuddiesPage/Filter/Filter";
import { useState } from "react";

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
          <h1>BuddyCard</h1>
          <h1>BuddyCard</h1>
          <h1>BuddyCard</h1>
        </div>
      </div>
      <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
    </div>
  );
};

export default BuddiesPage;
