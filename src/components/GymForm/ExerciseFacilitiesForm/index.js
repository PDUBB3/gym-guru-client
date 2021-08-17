import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import "./ExerciseFacilitiesForm.css";

const ExerciseFacilitiesForm = ({ errors, register }) => {
  const exerciseFacilities = [
    {
      id: "60fbf16966e59b3e340604b5",
      name: "Weight Area",
    },
    { id: "60fbf16966e59b3e340604b6", name: "Cardio Area" },
    {
      id: "60fbf16966e59b3e340604b7",
      name: "Fitness Studio",
    },
    {
      id: "60fbf16966e59b3e340604b8",
      name: "Swimming Pool",
    },
    {
      id: "60fbf16966e59b3e340604b9",
      name: "Tennis Court",
    },
  ];

  return (
    <div>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox checked={true} onChange={() => {}} name="checkedA" />
          }
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={true}
              onChange={() => {}}
              name="checkedB"
              color="primary"
            />
          }
          label="Primary"
        />
      </FormGroup>
      <div className="form-box-facilities">
        <div className="facilities-image-container">
          <div className="facilities-input">
            {exerciseFacilities.map((exerciseFacility) => {
              return (
                <div className="facilities-checkbox" key={exerciseFacility.id}>
                  <input
                    type="checkbox"
                    name="scales"
                    value={exerciseFacility.id}
                    {...register(`exerciseFacilities.${exerciseFacility.id}`)}
                  />
                  <label>{exerciseFacility.name}</label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseFacilitiesForm;
