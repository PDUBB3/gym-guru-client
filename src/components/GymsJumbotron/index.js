import "./GymsJumbotron.css";

const GymsJumbotron = (props) => {
  return (
    <div className="gym-header-container">
      <div className="h1-gym-header-container">
        <h1 className="h1-gym-header-home">Find Gyms</h1>
      </div>
      <div className="h2-gym-header-container ">
        <h2 className="h2-gym-header-white">A Place For</h2>
        <h2 className="h2-gym-header-blue">Goals</h2>{" "}
        <h2 className="h2-gym-header-white"> & </h2>
        <h2 className="h2-gym-header-blue">Gains</h2>
      </div>
    </div>
  );
};

export default GymsJumbotron;
