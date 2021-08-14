import "./GymOwnerCheckBox.css";

const GymOwnerCheckBox = ({
  placeholder,
  type = "checkbox",
  error,
  register,
}) => {
  return (
    <div>
      <p> Are you the owner of a gym?</p>
      <label for="yes">Yes</label>
      <input register={register("yes", { required: true })} type={type}></input>
      <label for="no">No</label>
      <input register={register("no", { required: true })} type={type}></input>
    </div>
  );
};

export default GymOwnerCheckBox;
