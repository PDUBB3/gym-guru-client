import "./BuddiesJumbotron.css";

const BuddiesJumbotron = (props) => {
  return (
    <div className="buddies-header-container">
      <div className="h1-buddies-header-container">
        <h1 className="h1-buddies-header-home">Find Buddies</h1>
      </div>
      <div className="h2-buddies-header-container ">
        <h2 className="h2-buddies-header-blue">Workouts Are</h2>
        <h2 className="h2-buddies-header-white">Better </h2>{" "}
        <h2 className="h2-buddies-header-blue">Together</h2>
      </div>
    </div>
  );
};

export default BuddiesJumbotron;
