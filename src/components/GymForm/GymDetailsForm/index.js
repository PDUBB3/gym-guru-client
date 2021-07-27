import { useState } from "react";
import { useForm } from "react-hook-form";

import FormInput from "../../FormInput";

import "./GymDetailsForm.css";

const CreateGymDetailsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formNumber, setFormNumber] = useState(1);

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const onClickPrevious = () => {
    setFormNumber(formNumber - 1);
  };

  const onClickNext = () => {
    setFormNumber(formNumber + 1);
  };

  const renderFormOne = () => {
    return (
      <div class="form-box">
        <div>
          <h2 class="form-heading">Please enter your gym details</h2>
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
          error={errors.postcode}
          register={register("postcode", { required: true })}
        />
        <FormInput
          placeholder="Contact Number"
          error={errors.contactNumber}
          register={register("contactNumber", { required: true })}
        />
      </div>
    );
  };

  const renderFormTwo = () => {
    const openingTimes = [
      {
        dayIndex: 1,
        dayName: "Sunday",
        dayShort: "Sun",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 2,
        dayName: "Monday",
        dayShort: "Mon",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 3,
        dayName: "Tuesday",
        dayShort: "Tue",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 4,
        dayName: "Wednesday",
        dayShort: "Wed",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 5,
        dayName: "Thursday",
        dayShort: "Thu",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 6,
        dayName: "Friday",
        dayShort: "Fri",
        startTime: "00:00",
        endTime: "00:00",
      },
      {
        dayIndex: 7,
        dayName: "Saturday",
        dayShort: "Sat",
        startTime: "00:00",
        endTime: "00:00",
      },
    ];

    return (
      <div>
        {openingTimes.map((day) => {
          return (
            <div key={day.dayIndex}>
              <label>{day.dayName}</label>
              <select name="from" id="from">
                <option value="06:00">6:00 AM</option>{" "}
                <option value="06:30">6:30 AM</option>{" "}
                <option value="07:00">7:00 AM</option>{" "}
                <option value="07:30">7:30 AM</option>{" "}
                <option value="08:00">8:00 AM</option>{" "}
                <option value="08:30">8:30 AM</option>{" "}
                <option value="09:00" selected>
                  9:00 AM
                </option>{" "}
                <option value="09:30">9:30 AM</option>{" "}
                <option value="10:00">10:00 AM</option>{" "}
                <option value="10:30">10:30 AM</option>{" "}
                <option value="11:00">11:00 AM</option>{" "}
                <option value="11:30">11:30 AM</option>{" "}
                <option value="12:00">12:00 PM</option>{" "}
                <option value="12:30">12:30 PM</option>{" "}
                <option value="13:00">1:00 PM</option>{" "}
                <option value="13:30">1:30 PM</option>{" "}
                <option value="14:00">2:00 PM</option>{" "}
                <option value="14:30">2:30 PM</option>{" "}
                <option value="15:00">3:00 PM</option>{" "}
                <option value="15:30">3:30 PM</option>{" "}
                <option value="16:00">4:00 PM</option>{" "}
                <option value="16:30">4:30 PM</option>{" "}
                <option value="17:00">5:00 PM</option>{" "}
                <option value="17:30">5:30 PM</option>{" "}
                <option value="18:00">6:00 PM</option>{" "}
                <option value="18:30">6:30 PM</option>{" "}
                <option value="19:00">7:00 PM</option>{" "}
                <option value="19:30">7:30 PM</option>{" "}
                <option value="20:00">8:00 PM</option>{" "}
                <option value="20:30">8:30 PM</option>{" "}
                <option value="21:00">9:00 PM</option>{" "}
                <option value="21:30">9:30 PM</option>{" "}
                <option value="22:00">10:00 PM</option>
              </select>
              <label>to</label>
              <select name="to" id="to">
                <option value="06:00">6:00 AM</option>{" "}
                <option value="06:30">6:30 AM</option>{" "}
                <option value="07:00">7:00 AM</option>{" "}
                <option value="07:30">7:30 AM</option>{" "}
                <option value="08:00">8:00 AM</option>{" "}
                <option value="08:30">8:30 AM</option>{" "}
                <option value="09:00">9:00 AM</option>{" "}
                <option value="09:30">9:30 AM</option>{" "}
                <option value="10:00">10:00 AM</option>{" "}
                <option value="10:30">10:30 AM</option>{" "}
                <option value="11:00">11:00 AM</option>{" "}
                <option value="11:30">11:30 AM</option>{" "}
                <option value="12:00">12:00 PM</option>{" "}
                <option value="12:30">12:30 PM</option>{" "}
                <option value="13:00">1:00 PM</option>{" "}
                <option value="13:30">1:30 PM</option>{" "}
                <option value="14:00">2:00 PM</option>{" "}
                <option value="14:30">2:30 PM</option>{" "}
                <option value="15:00">3:00 PM</option>{" "}
                <option value="15:30">3:30 PM</option>{" "}
                <option value="16:00">4:00 PM</option>{" "}
                <option value="16:30">4:30 PM</option>{" "}
                <option value="17:00" selected>
                  5:00 PM
                </option>{" "}
                <option value="17:30">5:30 PM</option>{" "}
                <option value="18:00">6:00 PM</option>{" "}
                <option value="18:30">6:30 PM</option>{" "}
                <option value="19:00">7:00 PM</option>{" "}
                <option value="19:30">7:30 PM</option>{" "}
                <option value="20:00">8:00 PM</option>{" "}
                <option value="20:30">8:30 PM</option>{" "}
                <option value="21:00">9:00 PM</option>{" "}
                <option value="21:30">9:30 PM</option>{" "}
                <option value="22:00">10:00 PM</option>
              </select>
              <input type="checkbox" name="closed" value="closed" />
              <font size="-1" />
              <span>Closed</span>
            </div>
          );
        })}
      </div>
    );
  };

  const renderFormThree = () => {
    const exerciseFacilities = [
      {
        id: 1,
        name: "Weight Area",
      },
      { id: 2, name: "Cardio Area" },
      {
        id: 3,
        name: "Fitness Studio",
      },
      {
        id: 4,
        name: "Swimming Pool",
      },
      {
        id: 5,
        name: "Tennis Court",
      },
    ];

    return (
      <div>
        {exerciseFacilities.map((exerciseFacility) => {
          return (
            <div key={exerciseFacility.id}>
              <input
                type="checkbox"
                name="scales"
                {...register(`exerciseFacilities_${exerciseFacility.id}`)}
              />
              <label>{exerciseFacility.name}</label>
            </div>
          );
        })}
      </div>
    );
  };

  const renderFormFour = () => {
    const otherFacilities = [
      {
        id: 1,
        name: "Parking",
      },
      {
        id: 2,
        name: "Sauna",
      },
      {
        id: 3,
        name: "Steam Room",
      },
      {
        id: 4,
        name: "Spa",
      },
      {
        id: 5,
        name: "Changing Room",
      },
      {
        id: 6,
        name: "Showers",
      },
      {
        id: 7,
        name: "Restaurant & Bar",
      },
      {
        id: 8,
        name: "Creche",
      },
    ];

    return (
      <div>
        {otherFacilities.map((otherFacility) => {
          return (
            <div key={otherFacility.id}>
              <input
                type="checkbox"
                name="scales"
                {...register(`otherFacilities_${otherFacility.id}`)}
              />
              <label>{otherFacility.name}</label>
            </div>
          );
        })}
      </div>
    );
  };

  const renderForm = () => {
    if (formNumber === 1) {
      return renderFormOne();
    }
    if (formNumber === 2) {
      return renderFormTwo();
    }
    if (formNumber === 3) {
      return renderFormThree();
    }
    if (formNumber === 4) {
      return renderFormFour();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {renderForm()}
      <div className="button-block">
        {formNumber !== 1 && (
          <button className="button" type="button" onClick={onClickPrevious}>
            Previous
          </button>
        )}
        {formNumber !== 4 && (
          <button className="button" type="button" onClick={onClickNext}>
            Next
          </button>
        )}
        {formNumber === 4 && (
          <button className="button" type="submit">
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default CreateGymDetailsForm;
