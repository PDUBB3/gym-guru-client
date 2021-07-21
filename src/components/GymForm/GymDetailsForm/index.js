const GymDetailsForm = (props) => {
  const { name, address, postCode, city, contactNumber } = props;
  return (
    <div>
      <form>
        <h1>{name}</h1>
      </form>
    </div>
  );
};

export default GymDetailsForm;
