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
      <input {...register("isGymOwner")} type={type}></input>
    </div>
  );
};

export default GymOwnerCheckBox;
