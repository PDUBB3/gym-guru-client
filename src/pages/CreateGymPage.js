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
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import FormInput from "../components/FormInput";
import ReactHookFormSelect from "../components/ReactHookFormSelect";

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

  const { handleSubmit, control } = useForm();

  const [expanded, setExpanded] = useState(false);

  const cities = City.getCitiesOfCountry("GB");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const onSubmit = (formData) => {
    console.log(formData);
  };

  const times = [
    {
      value: "6:00",
      label: "6:00 AM",
    },
    {
      value: "6:30",
      label: "6:30 AM",
    },
    {
      value: "7:00",
      label: "7:00 AM",
    },
    {
      value: "7:30",
      label: "7:30 AM",
    },
    {
      value: "8:00",
      label: "8:00 AM",
    },
    {
      value: "8:30",
      label: "8:30 AM",
    },
    {
      value: "9:00",
      label: "9:00 AM",
    },
    {
      value: "9:30",
      label: "9:30 AM",
    },
    {
      value: "10:00",
      label: "10:00 AM",
    },
    {
      value: "10:30",
      label: "10:30 AM",
    },
    {
      value: "11:00",
      label: "11:00 AM",
    },
    {
      value: "11:30",
      label: "11:30 AM",
    },
    {
      value: "12:00",
      label: "12:00 PM",
    },
    {
      value: "12:30",
      label: "12:30 PM",
    },
    {
      value: "1:00",
      label: "1:00 PM",
    },
    {
      value: "1:30",
      label: "1:30 PM",
    },
    {
      value: "2:00",
      label: "2:00 PM",
    },
    {
      value: "2:30",
      label: "2:30 PM",
    },
    {
      value: "3:00",
      label: "3:00 PM",
    },
    {
      value: "3:30",
      label: "3:30 PM",
    },
    {
      value: "4:00",
      label: "4:00 PM",
    },
    {
      value: "4:30",
      label: "4:30 PM",
    },
    {
      value: "5:00",
      label: "5:00 PM",
    },
    {
      value: "5:30",
      label: "5:30 PM",
    },
    {
      value: "6:00",
      label: "6:00 PM",
    },
    {
      value: "6:30",
      label: "6:30 PM",
    },
    {
      value: "7:00",
      label: "7:00 PM",
    },
    {
      value: "7:30",
      label: "7:30 PM",
    },
    {
      value: "8:00",
      label: "8:00 PM",
    },
    {
      value: "8:30",
      label: "8:30 PM",
    },
    {
      value: "9:00",
      label: "9:00 PM",
    },
    {
      value: "9:30",
      label: "9:30 PM",
    },
    {
      value: "10:00",
      label: "10:00 PM",
    },
  ];

  const days = [
    {
      label: "Sunday",
      value: "sunday",
    },
    {
      label: "Monday",
      value: "monday",
    },
    {
      label: "Tuesday",
      value: "tuesday",
    },
    {
      label: "Wednesday",
      value: "wednesday",
    },
    {
      label: "Thursday",
      value: "thursday",
    },
    {
      label: "Friday",
      value: "friday",
    },
    {
      label: "Saturday",
      value: "saturday",
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
              <Box component="div">
                <Controller
                  name="city"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <Autocomplete
                        onChange={(_, data) => onChange(data.name)}
                        value={value}
                        options={cities}
                        getOptionLabel={(option) => option.name}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Select city"
                            variant="outlined"
                          />
                        )}
                      />
                    );
                  }}
                />
              </Box>
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
              <Typography className={classes.heading}>
                Advanced settings
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Filtering has been entirely disabled for whole web server
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
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
              <Typography className={classes.heading}>Personal data</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                Integer sit amet egestas eros, vitae egestas augue. Duis vel est
                augue.
              </Typography>
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
