import { Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const OtherFacilitiesForm = (props) => {
  const { otherFacilities } = props;
  return (
    <div id="container">
      {["checkbox", "radio"].map((otherFacilities) => {
        return <div key={otherFacilities} className="mb-3"></div>;
      })}

      {/* // .map((otherFacilities) => (
      //   <div key={`default-${otherFacilities}`} className="mb-3"></div>
      // ))} */}
    </div>
  );
};

export default OtherFacilitiesForm;
