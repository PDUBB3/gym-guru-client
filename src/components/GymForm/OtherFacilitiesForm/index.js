import "./OtherFacilitiesForm.css";

const OtherFacilitiesForm = ({ errors, register }) => {
  const otherFacilities = [
    {
      id: "60fbf16966e59b3e340604bb",
      name: "Parking",
    },
    {
      id: "60fbf16966e59b3e340604bc",
      name: "Sauna",
    },
    {
      id: "60fbf16966e59b3e340604bd",
      name: "Steam Room",
    },
    {
      id: "60fbf16966e59b3e340604be",
      name: "Spa",
    },
    {
      id: "60fbf16966e59b3e340604bf",
      name: "Changing Room",
    },
    {
      id: "60fbf16966e59b3e340604c0",
      name: "Showers",
    },
    {
      id: "60fbf16966e59b3e340604c1",
      name: "Restaurant & Bar",
    },
    {
      id: "60fbf16966e59b3e340604c2",
      name: "Creche",
    },
  ];

  return (
    <div>
      {otherFacilities.map((otherFacility, index) => {
        return (
          <div key={otherFacility.id}>
            <input
              type="checkbox"
              name="scales"
              value={otherFacility.id}
              {...register(`otherFacilities.${index}.${otherFacility.id}`)}
            />
            <label>{otherFacility.name}</label>
          </div>
        );
      })}
    </div>
  );
};

export default OtherFacilitiesForm;
