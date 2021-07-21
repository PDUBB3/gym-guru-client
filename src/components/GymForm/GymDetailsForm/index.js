import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./GymDetailsForm.css";

const GymDetailsForm = (props) => {
  return (
    <div id="container">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Name:</InputGroup.Text>
        <FormControl
          placeholder="Gym name"
          aria-label="gym-name"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">Address:</InputGroup.Text>
        <FormControl
          placeholder="Gym address"
          aria-label="Gym-address"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">Postcode:</InputGroup.Text>
        <FormControl id="postcode" aria-describedby="basic-addon3" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>City:</InputGroup.Text>
        <FormControl aria-label="City name" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>Contact number:</InputGroup.Text>
        <FormControl id="Contact number" aria-describedby="basic-addon3" />
      </InputGroup>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default GymDetailsForm;
