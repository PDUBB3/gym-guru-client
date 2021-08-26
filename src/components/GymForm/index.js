import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";

import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";

import { GYMS_QUERY } from "../../graphql/queries";
import { CREATE_GYM, UPDATE_GYM } from "../../graphql/mutations";

import ImageUploader from "../ImageUploader";
import CityAutocomplete from "../CityAutocomplete";
import FacilitiesCheckboxes from "../FacilitiesCheckboxes";
import FormInput from "../FormInput";
import ReactHookFormSelect from "../ReactHookFormSelect";
import { useUserContext } from "../../context/UserContext";
import days from "./days";
import times from "./times";
import Loader from "react-loader-spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: 20,
    flexBasis: "33.33%",
    flexShrink: 0,
    color: "#00b4d8",
    fontWeight: "bold",
  },
  accordionDetails: {
    display: "flex",
    flexDirection: "column",
  },
  formControl: {
    padding: "8px 16px",
    minWidth: "100%",
    fontSize: 18,
  },
  cityAutocomplete: {
    minWidth: "100%",
    padding: "0 16px",
    paddingTop: "15px",
  },
  label: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
  },
  day: {
    display: "flex",
    justifyContent: "space-evenly",
    alignContent: "middle",
  },
  dayDropdown: {
    width: "25%",
  },
  accordionDetailsFacilities: {
    display: "flex",
    justifyContent: "space-evenly",
  },
}));

const GymForm = ({ gym }) => {
  const id = gym?.id;

  const classes = useStyles();

  const history = useHistory();

  const { state } = useUserContext();

  const { handleSubmit, control } = useForm();

  const [expanded, setExpanded] = useState(false);

  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState(gym?.imageURL);

  const { data, loading, error } = useQuery(GYMS_QUERY);

  const [createGym] = useMutation(CREATE_GYM, {
    onCompleted: (data) => {
      history.push(`${data.createGym.id}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [updateGym] = useMutation(UPDATE_GYM, {
    onCompleted: (data) => {
      history.push(`${data.createGym.id}`);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </Box>
    );
  }

  if (error) {
    return <h1>error</h1>;
  }

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getFacilities = (formData, prefix) => {
    return Object.entries(formData).reduce((acc, [key, value]) => {
      if (key.includes(prefix) && value) {
        return [...acc, key.replace(prefix, "")];
      }
      return acc;
    }, []);
  };

  const getOpeningTimes = (formData, prefix) => {
    return Object.entries(formData).reduce((acc, [key, value]) => {
      if (key.includes(prefix) && value) {
        return { ...acc, value };
      }
      return acc;
    }, {});
  };

  const onSubmit = async (formData) => {
    const openingTimes = days.map((day, dayIndex) => {
      const openTime = getOpeningTimes(formData, `openTime_${day.value}`);
      const closeTime = getOpeningTimes(formData, `closeTime_${day.value}`);
      const isClosed = getOpeningTimes(formData, `isClosed_${day.value}`);
      return {
        dayIndex,
        dayName: day.label,
        dayShort: day.short,
        startTime: openTime.value || "",
        endTime: closeTime.value || "",
      };
    });

    const exerciseFacilities = getFacilities(formData, "exercise_facility_");
    const otherFacilities = getFacilities(formData, "other_facility_");

    const { name, address, city, postCode, contactNumber } = formData;

    if (!gym) {
      const { data } = await createGym({
        variables: {
          createGymInput: {
            name,
            imageURL: imageUrl,
            address,
            city,
            postCode,
            contactNumber,
            openingTimes,
            otherFacilities,
            exerciseFacilities,
          },
        },
      });
    } else {
      await updateGym({
        variables: {
          updateGymInput: {
            id,
            name,
            imageURL: imageUrl,
            address,
            city,
            postCode,
            contactNumber,
            openingTimes,
            otherFacilities,
            exerciseFacilities,
          },
        },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classes.root}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Gym Details</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <FormInput
              name="name"
              placeholder="Name"
              control={control}
              required={true}
              defaultValue={gym?.name}
              classes={classes}
            />
            <FormInput
              name="address"
              placeholder="Address"
              control={control}
              required={true}
              defaultValue={gym?.address}
              classes={classes}
            />
            <CityAutocomplete
              control={control}
              city={gym?.city}
              classes={classes}
            />
            <FormInput
              name="postCode"
              placeholder="Postcode"
              control={control}
              required={true}
              defaultValue={gym?.postCode}
              classes={classes}
            />
            <FormInput
              name="contactNumber"
              placeholder="Contact Number"
              control={control}
              required={true}
              defaultValue={gym?.contactNumber}
              classes={classes}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography className={classes.heading}>Opening Hours</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            {days.map(({ label, value }) => {
              let openDefaultValue = null;
              let closeDefaultValue = null;

              if (gym) {
                const { openingTimes } = gym;
                const dayObject = openingTimes.find((day) => {
                  return day.dayName === label;
                });

                openDefaultValue = dayObject.startTime;
                closeDefaultValue = dayObject.endTime;
              }

              return (
                <Box component="div" m={1}>
                  <Box component="div" m={1} className={classes.day}>
                    <Typography className={classes.label}>{label}</Typography>
                    <Box component="div" m={1} className={classes.dayDropdown}>
                      <ReactHookFormSelect
                        name={`openTime_${value}`}
                        label="Open"
                        control={control}
                        defaultValue={openDefaultValue}
                        rules={{ required: false }}
                      >
                        {times.map(({ label, value }) => {
                          return (
                            <MenuItem name={value} value={value} key={value}>
                              {label}
                            </MenuItem>
                          );
                        })}
                      </ReactHookFormSelect>
                    </Box>
                    <Box component="div" m={1} className={classes.dayDropdown}>
                      <ReactHookFormSelect
                        name={`closeTime_${value}`}
                        label="Close"
                        control={control}
                        defaultValue={closeDefaultValue}
                        rules={{ required: false }}
                      >
                        {times.map(({ label, value }) => {
                          return (
                            <MenuItem name={value} value={value} key={value}>
                              {label}
                            </MenuItem>
                          );
                        })}
                      </ReactHookFormSelect>
                    </Box>
                    <FormControlLabel
                      control={
                        <Controller
                          name={`isClosed_${value}`}
                          control={control}
                          defaultValue={false}
                          render={({ field: { onChange, value } }) => {
                            return (
                              <Checkbox checked={value} onChange={onChange} />
                            );
                          }}
                        />
                      }
                      label="Closed"
                      key={value}
                    />
                  </Box>
                </Box>
              );
            })}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography className={classes.heading}>Facilities</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetailsFacilities}>
            <FacilitiesCheckboxes
              control={control}
              classes={classes}
              facilities={data.exerciseFacilities}
              selectedFacilities={gym?.exerciseFacilities || []}
              label="Exercise Facilities"
            />
            <Divider />
            <FacilitiesCheckboxes
              control={control}
              classes={classes}
              facilities={data.otherFacilities}
              selectedFacilities={gym?.otherFacilities || []}
              label="Other Facilities"
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.heading}>Upload an image</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Box component="div" m={1}>
              <ImageUploader
                images={images}
                setImages={setImages}
                imageUrl={imageUrl}
                setImageUrl={setImageUrl}
                prefix={`${state.user.username}/gyms/images/`}
              />
            </Box>
          </AccordionDetails>
        </Accordion>
        <Box component="div" className={classes.center}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
          >
            Submit
          </Button>
        </Box>
      </div>
    </form>
  );
};

export default GymForm;
