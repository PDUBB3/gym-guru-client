import FormInput from "../../FormInput";
import Logo from "../../../assets/img/logo-blue-bg.png";

import "./GymDetailsForm.css";

const GymDetailsForm = ({ errors, register }) => {
  return (
    <div class="details-form-box">
      <div className="gym-details-image-container">
        <div className="logo" id="gg" width="500" height="600">
          <img src={Logo} alt="gym-guru-logo" />
        </div>
      </div>
      <div className="gym-details-input-container">
        <h2 class="form-heading">Please enter your gym details:</h2>
        <FormInput
          placeholder="Name"
          className="details-input"
          error={errors.name}
          register={register("name", { required: true })}
        />
        <FormInput
          placeholder="Address"
          className="details-input"
          error={errors.address}
          register={register("address", { required: true })}
        />
        <FormInput
          placeholder="City"
          className="details-input"
          error={errors.city}
          register={register("city", { required: true })}
        />
        <FormInput
          placeholder="Postcode"
          className="details-input"
          error={errors.postCode}
          register={register("postCode", { required: true })}
        />
        <FormInput
          placeholder="Contact Number"
          className="details-input"
          error={errors.contactNumber}
          register={register("contactNumber", { required: true })}
        />
      </div>
    </div>
  );
};

export default GymDetailsForm;
