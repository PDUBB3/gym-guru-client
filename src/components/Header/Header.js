import "./Header.css";

const Header = (props) => {
  return (
    <div className="container">
      <div className="h1-container">
        <h1 className="h1-home">Welcome to Gym Guru</h1>
      </div>
      <div className="h2-container">
        <h2 className="h2-blue">Find Gyms. </h2>
        <h2 className="h2-white">Rate Gyms. </h2>{" "}
        <h2 className="h2-blue">Find Buddies.</h2>
      </div>
    </div>
  );
};

export default Header;
