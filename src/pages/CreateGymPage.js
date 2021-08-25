import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { City } from "country-state-city";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import FormInput from "../components/FormInput";
import ReactHookFormSelect from "../components/ReactHookFormSelect";
import { GYMS_QUERY } from "../graphql/queries";
import { useMutation, useQuery } from "@apollo/client";
import Divider from "@material-ui/core/Divider";
import { CREATE_GYM } from "../graphql/mutations";
import ImageUploader from "../components/ImageUploader";
import CityAutocomplete from "../components/CityAutocomplete";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const CreateGymPage = () => {
  const classes = useStyles();

  const { handleSubmit, setValue, control } = useForm();

  const [expanded, setExpanded] = useState(false);

  const { data, loading, error } = useQuery(GYMS_QUERY);

  const [createGym] = useMutation(CREATE_GYM, {
    onError: (error) => {
      console.log(error);
    },
  });

  if (loading) {
    return <h1>loading</h1>;
  }

  if (error) {
    return <h1>error</h1>;
  }

  const cities = City.getCitiesOfCountry("GB");

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
    console.log(formData);
    const openingTimes = days.map((day, dayIndex) => {
      const openTime = getOpeningTimes(formData, `openTime_${day.value}`);
      const closeTime = getOpeningTimes(formData, `closeTime_${day.value}`);
      const isClosed = getOpeningTimes(formData, `isClosed_${day.value}`);

      let startTime = "";
      let endTime = "";

      if (openTime.value) {
        startTime = openTime.value;
      }

      if (closeTime.value) {
        endTime = closeTime.value;
      }

      return {
        dayIndex,
        dayName: day.label,
        dayShort: day.short,
        startTime,
        endTime,
      };
    });

    const exerciseFacilities = getFacilities(formData, "exercise_facility_");
    const otherFacilities = getFacilities(formData, "other_facility_");

    let imageURL = "";

    if (formData.imageURL) {
      imageURL = formData.imageURL;
    }

    const { name, address, city, postCode, contactNumber } = formData;

    await createGym({
      variables: {
        createGymInput: {
          name,
          imageURL,
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
  };

  const times = [
    {
      value: "6:00",
      label: "6:00",
    },
    {
      value: "6:30",
      label: "6:30",
    },
    {
      value: "7:00",
      label: "7:00",
    },
    {
      value: "7:30",
      label: "7:30",
    },
    {
      value: "8:00",
      label: "8:00",
    },
    {
      value: "8:30",
      label: "8:30",
    },
    {
      value: "9:00",
      label: "9:00",
    },
    {
      value: "9:30",
      label: "9:30",
    },
    {
      value: "10:00",
      label: "10:00",
    },
    {
      value: "10:30",
      label: "10:30",
    },
    {
      value: "11:00",
      label: "11:00",
    },
    {
      value: "11:30",
      label: "11:30",
    },
    {
      value: "12:00",
      label: "12:00",
    },
    {
      value: "12:30",
      label: "12:30",
    },
    {
      value: "13:00",
      label: "13:00",
    },
    {
      value: "13:30",
      label: "13:30",
    },
    {
      value: "14:00",
      label: "14:00",
    },
    {
      value: "14:30",
      label: "14:30",
    },
    {
      value: "15:00",
      label: "15:00",
    },
    {
      value: "15:30",
      label: "15:30",
    },
    {
      value: "16:00",
      label: "16:00",
    },
    {
      value: "16:30",
      label: "16:30",
    },
    {
      value: "17:00",
      label: "17:00",
    },
    {
      value: "17:30",
      label: "17:30",
    },
    {
      value: "18:00",
      label: "18:00",
    },
    {
      value: "18:30",
      label: "18:30",
    },
    {
      value: "19:00",
      label: "19:00",
    },
    {
      value: "19:30",
      label: "19:30",
    },
    {
      value: "20:00",
      label: "20:00",
    },
    {
      value: "20:30",
      label: "20:30",
    },
    {
      value: "21:00",
      label: "21:00",
    },
    {
      value: "21:30",
      label: "21:30",
    },
    {
      value: "22:00",
      label: "22:00",
    },
    {
      value: "22:30",
      label: "22:30",
    },
    {
      value: "23:00",
      label: "23:00",
    },
    {
      value: "23:30",
      label: "23:30",
    },
    {
      value: "00:00",
      label: "00:00",
    },
  ];

  const days = [
    {
      label: "Sunday",
      value: "sunday",
      short: "Sun",
    },
    {
      label: "Monday",
      value: "monday",
      short: "Mon",
    },
    {
      label: "Tuesday",
      value: "tuesday",
      short: "Tue",
    },
    {
      label: "Wednesday",
      value: "wednesday",
      short: "Wed",
    },
    {
      label: "Thursday",
      value: "thursday",
      short: "Thur",
    },
    {
      label: "Friday",
      value: "friday",
      short: "Fri",
    },
    {
      label: "Saturday",
      value: "saturday",
      short: "Sat",
    },
  ];

  return (
    <Container maxWidth="lg">
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
            <AccordionDetails>
              <FormInput
                name="name"
                placeholder="Name"
                control={control}
                required={true}
              />
              <FormInput
                name="address"
                placeholder="Address"
                control={control}
                required={true}
              />
              <CityAutocomplete control={control} />
              <FormInput
                name="postCode"
                placeholder="Postcode"
                control={control}
                required={true}
              />
              <FormInput
                name="contactNumber"
                placeholder="Contact Number"
                control={control}
                required={true}
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
            <AccordionDetails>
              {days.map(({ label, value }) => {
                return (
                  <Box>
                    <Typography>{label}</Typography>
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
                    <Box component="div" m={1}>
                      <ReactHookFormSelect
                        name={`openTime_${value}`}
                        label="Open"
                        control={control}
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
                    <Box component="div" m={1}>
                      <ReactHookFormSelect
                        name={`closeTime_${value}`}
                        label="Close"
                        control={control}
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
            <AccordionDetails>
              <Box component="div">
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Exercise Facilities</FormLabel>
                  <FormGroup className={classes.checkboxesContainer}>
                    {data.exerciseFacilities.map((exerciseFacility) => {
                      return (
                        <FormControlLabel
                          control={
                            <Controller
                              name={`exercise_facility_${exerciseFacility.id}`}
                              control={control}
                              defaultValue={false}
                              render={({ field: { onChange, value } }) => {
                                return (
                                  <Checkbox
                                    checked={value}
                                    onChange={onChange}
                                  />
                                );
                              }}
                            />
                          }
                          label={exerciseFacility.name}
                          key={exerciseFacility.id}
                        />
                      );
                    })}
                  </FormGroup>
                </FormControl>
              </Box>
              <Divider />
              <Box component="div">
                <FormControl
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormLabel component="legend">Other Facilities</FormLabel>
                  <FormGroup className={classes.checkboxesContainer}>
                    {data.otherFacilities.map((otherFacility) => {
                      return (
                        <FormControlLabel
                          control={
                            <Controller
                              name={`other_facility_${otherFacility.id}`}
                              control={control}
                              defaultValue={false}
                              render={({ field: { onChange, value } }) => {
                                return (
                                  <Checkbox
                                    checked={value}
                                    onChange={onChange}
                                  />
                                );
                              }}
                            />
                          }
                          label={otherFacility.name}
                          key={otherFacility.id}
                        />
                      );
                    })}
                  </FormGroup>
                </FormControl>
              </Box>
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
              <Typography className={classes.heading}>
                Upload an image
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box component="div" m={1}>
                <ImageUploader setValue={setValue} />
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
              Search
            </Button>
          </Box>
        </div>
      </form>
    </Container>
  );
};

export default CreateGymPage;
