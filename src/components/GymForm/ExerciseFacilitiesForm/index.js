import "./ExerciseFacilitiesForm.css";

const ExerciseFacilitiesForm = ({ errors, register }) => {
  const exerciseFacilities = [
    {
      id: 1,
      name: "Weight Area",
    },
    { id: 2, name: "Cardio Area" },
    {
      id: 3,
      name: "Fitness Studio",
    },
    {
      id: 4,
      name: "Swimming Pool",
    },
    {
      id: 5,
      name: "Tennis Court",
    },
  ];

  return (
    <div className="form-box-facilities">
      <div className="facilities-image-container"></div>
      <div className="facilities-input">
        {exerciseFacilities.map((exerciseFacility) => {
          return (
            <div className="facilities-checkbox" key={exerciseFacility.id}>
              <input
                type="checkbox"
                name="scales"
                // {...register(`exerciseFacilities_${exerciseFacility.id}`)}
              />
              <label>{exerciseFacility.name}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExerciseFacilitiesForm;
