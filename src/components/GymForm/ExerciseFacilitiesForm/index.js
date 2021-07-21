import { Dropdown } from "react-bootstrap";
import { RangeStepInput } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const ExerciseFacilitiesForm = (props) => {
  return (
    <div id="container">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Exercise Facilities
        </Dropdown.Toggle>

        {/* Need href for range slider here */}
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Weight Area</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Cardio area</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Fitness studio</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Tennis court</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Swimming pool</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ExerciseFacilitiesForm;
