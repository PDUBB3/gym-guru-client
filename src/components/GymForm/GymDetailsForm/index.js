import { InputGroup } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Form } from "react-bootstrap";
// import "./GymDetailsForm.css";

const GymDetailsForm = (props) => {
  const {} = props;
  return (
    <div id="container">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Name:</InputGroup.Text>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon2">Address:</InputGroup.Text>
        <FormControl
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Label htmlFor="basic-url">Postcode:</Form.Label>
        <FormControl id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text>City:</InputGroup.Text>
        <FormControl aria-label="Amount (to the nearest dollar)" />
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>Contact number:</InputGroup.Text>
        <FormControl id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
    </div>
  );
};

export default GymDetailsForm;
