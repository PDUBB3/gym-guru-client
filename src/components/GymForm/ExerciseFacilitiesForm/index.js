import { Dropdown } from "react-bootstrap";
// import { RangeStepInput } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const ExerciseFacilitiesForm = (props) => {
  const { facilities } = props;
  return (
    <div id="container">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Exercise Facilities
        </Dropdown.Toggle>

        {/* Need href for range slider here */}
        <Dropdown.Menu>
          <div>
            {facilities.map((facilities) => {
              return <Dropdown.Item>{facilities}</Dropdown.Item>;
            })}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ExerciseFacilitiesForm;
