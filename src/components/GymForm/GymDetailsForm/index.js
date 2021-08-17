import FormInput from "../../FormInput";

import "./GymDetailsForm.css";

const GymDetailsForm = ({ errors, register }) => {
  return (
    <div class="details-form-box">
      <div className="gym-details-image-container">
        <img src="../../../assets/img/gym-guru-white.png" alt="logo"></img>
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
