import { useForm } from "react-hook-form";
import { useState } from "react";
import { useMutation } from "@apollo/client";

import { CREATE_GYM } from "../../graphql/mutations";
import GymDetailsForm from "./GymDetailsForm";
import OpeningHoursForm from "./OpeningHoursForm";
import ExerciseFacilitiesForm from "./ExerciseFacilitiesForm";
import OtherFacilitiesForm from "./OtherFacilitiesForm";

import "./GymForm.css";

const GymForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formNumber, setFormNumber] = useState(1);

  const [createGym] = useMutation(CREATE_GYM, {
    onError: (error) => {
      console.log(error);
    },
  });

  const onSubmit = async (formData) => {
    console.log(formData);

    const otherFacilities = Object.entries(formData.otherFacilities)
      .filter((each) => {
        return each[1];
      })
      .map((each) => {
        return each[0];
      });

    const exerciseFacilities = Object.entries(formData.exerciseFacilities)
      .filter((each) => {
        return each[1];
      })
      .map((each) => {
        return each[0];
      });

    const openingTimes = formData.openingTimes.map((each, dayIndex) => {
      const openingTimesMap = {
        1: {
          dayName: "Sunday",
          dayShort: "Sun",
        },
        2: {
          dayName: "Monday",
          dayShort: "Mon",
        },
        3: {
          dayName: "Tuesday",
          dayShort: "Tue",
        },
        4: {
          dayName: "Wednesday",
          dayShort: "Wed",
        },
        5: {
          dayName: "Thursday",
          dayShort: "Thu",
        },
        6: {
          dayName: "Friday",
          dayShort: "Fri",
        },
        7: {
          dayName: "Saturday",
          dayShort: "Sat",
        },
      };

      const { startTime, endTime } = each;

      const startTimeValue = Object.entries(startTime)[0][1];
      const endTimeValue = Object.entries(endTime)[0][1];

      return {
        dayIndex,
        dayName: openingTimesMap[dayIndex].dayName,
        dayShort: openingTimesMap[dayIndex].dayShort,
        endTime: endTimeValue,
        startTime: startTimeValue,
      };
    });

    console.log(openingTimes);

    await createGym({
      variables: {
        createGymInput: {
          ...formData,
          openingTimes,
          otherFacilities,
          exerciseFacilities,
        },
      },
    });
  };

  const onClickPrevious = () => {
    setFormNumber(formNumber - 1);
  };

  const onClickNext = () => {
    setFormNumber(formNumber + 1);
  };

  const renderForm = () => {
    if (formNumber === 1) {
      return <GymDetailsForm errors={errors} register={register} />;
    }
    if (formNumber === 2) {
      return <OpeningHoursForm errors={errors} register={register} />;
    }
    if (formNumber === 3) {
      return <ExerciseFacilitiesForm errors={errors} register={register} />;
    }
    if (formNumber === 4) {
      return <OtherFacilitiesForm errors={errors} register={register} />;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="gymForm">
      {renderForm()}
      <div className="button-block">
        {formNumber !== 1 && (
          <button
            className="button border-gradient"
            type="button"
            onClick={onClickPrevious}
          >
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

export default GymForm;
