import FormInput from "../../FormInput";

import "./GymDetailsForm.css";

const GymDetailsForm = ({ errors, register }) => {
  return (
    <div class="form-box">
      <div>
        <h2 class="form-heading">Please enter your gym details:</h2>
      </div>
      <FormInput
        placeholder="Name"
        error={errors.name}
        register={register("name", { required: true })}
      />
      <FormInput
        placeholder="Address"
        error={errors.address}
        register={register("address", { required: true })}
      />
      <FormInput
        placeholder="City"
        error={errors.city}
        register={register("city", { required: true })}
      />
      <FormInput
        placeholder="Postcode"
        error={errors.postCode}
        register={register("postCode", { required: true })}
      />
      <FormInput
        placeholder="Contact Number"
        error={errors.contactNumber}
        register={register("contactNumber", { required: true })}
      />
    </div>
  );
};

export default GymDetailsForm;
