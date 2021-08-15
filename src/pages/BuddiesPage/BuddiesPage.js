import "./BuddiesPage.css";
import Filter from "../../components/BuddiesPage/Filter/Filter";
import { useState } from "react";

const BuddiesPage = () => {
  const [filterStatus, setFilterStatus] = useState(false);
  return (
    <div>
      <h1>This is the buddies page</h1>
      <button
        onClick={() => setFilterStatus(!filterStatus)}
        className="filterButton"
      >
        Filter
      </button>
      <Filter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
    </div>
  );
};

export default BuddiesPage;
