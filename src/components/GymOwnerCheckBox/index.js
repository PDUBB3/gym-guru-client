import "./GymOwnerCheckBox.css";

const GymOwnerCheckBox = ({
  placeholder,
  type = "checkbox",
  error,
  register,
}) => {
  return (
    <div>
      <form>
        <input type={type} value="true">
          <label for="yes">Yes</label>
        </input>
        <input type={type} value="no">
          <label for="no">No</label>
        </input>
      </form>
    </div>
  );
};

export default GymOwnerCheckBox;
