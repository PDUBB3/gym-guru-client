import FormInput from "../FormInput";
import GymOwnerCheckBox from "../GymOwnerCheckBox";
import ImageUpload from "../ImageUpload";

import "./SignUpForm.css";
import "../Button/button.css";

const PartTwo = ({ errors, register, setValue }) => {
  return (
    <div class="signUp-form-box">
      <form className="signUpForm">
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
      </form>
    </div>
  );
};

export default PartTwo;
