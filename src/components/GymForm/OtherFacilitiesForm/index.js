import "./OtherFacilitiesForm.css";

const OtherFacilitiesForm = ({ errors, register }) => {
  const otherFacilities = [
    {
      id: 1,
      name: "Parking",
    },
    {
      id: 2,
      name: "Sauna",
    },
    {
      id: 3,
      name: "Steam Room",
    },
    {
      id: 4,
      name: "Spa",
    },
    {
      id: 5,
      name: "Changing Room",
    },
    {
      id: 6,
      name: "Showers",
    },
    {
      id: 7,
      name: "Restaurant & Bar",
    },
    {
      id: 8,
      name: "Creche",
    },
  ];

  return (
    <div>
      {otherFacilities.map((otherFacility) => {
        return (
          <div key={otherFacility.id}>
            <input
              type="checkbox"
              name="scales"
              // {...register(`otherFacilities_${otherFacility.id}`)}
            />
            <label>{otherFacility.name}</label>
          </div>
        );
      })}
    </div>
  );
};

export default OtherFacilitiesForm;
