import FormInput from "../FormInput";
import GymOwnerCheckBox from "../GymOwnerCheckBox";
import ImageUpload from "../ImageUpload";

import "./SignUpForm.css";
import "../Button/button.css";
import CheckboxesTags from "../FormFilter/index";

const PartTwo = ({ errors, register, setValue }) => {
  const goals = [
    { title: "Lose Weight" },
    { title: "Gain Muscle" },
    { title: "Toning" },
    { title: "Make Friends" },
    { title: "Get Fit" },
    { title: "Improving Endurance" },
    { title: "Improve Strength" },
  ];
  const interests = [
    { title: "Yoga" },
    { title: "Cycling" },
    { title: "Cardio" },
    { title: "Weight Lifting" },
    { title: "Endurance" },
    { title: "Gym Classes" },
  ];
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
      <CheckboxesTags options={goals} placeholder="Goals" id="goals" />
      <CheckboxesTags
        options={interests}
        placeholder="Interests"
        id="interests"
      />
      <GymOwnerCheckBox register={register} />
    </div>
  );
};

export default PartTwo;
