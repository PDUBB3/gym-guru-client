import FormInput from "../FormInput";
import GymOwnerCheckBox from "../GymOwnerCheckBox";
import ImageUpload from "../ImageUpload";

import "./SignUpForm.css";

const PartTwo = ({ errors, register, setValue }) => {
  return (
    <div className="signUp-form-box">
      <ImageUpload setValue={setValue} />
      <FormInput
        placeholder="City"
        error={errors.city}
        register={register("city", { required: true })}
      />
      <FormInput
        placeholder="Type a short bio about yourself here"
        error={errors.bio}
        register={register("bio", { required: true })}
      />
      <GymOwnerCheckBox register={register} />
    </div>
  );
};

export default PartTwo;
