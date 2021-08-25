import { useState } from "react";
import { useMutation } from "@apollo/client";
import { Controller } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import classNames from "classnames";

import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";

import { SIGNUP } from "../../graphql/mutations";

import ImageUploader from "../ImageUploader";
import MultiSelectDropDown from "../MultiSelectDropDown";
import CityAutocomplete from "../CityAutocomplete";
import { useUserContext } from "../../context/UserContext";

import "../../pages/SignUpPage/SignUpPage.css";
import Loader from "react-loader-spinner";

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

export default function ControlledAccordions({ redirect = "/login" }) {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const history = useHistory();

  const [signUp, { data, error, loading }] = useMutation(SIGNUP, {
    onCompleted: () => {
      history.push(redirect);
    },
    onError: (e) => {
      console.log(e);
    },
  });
  const classes = useStyles();

  const [expanded, setExpanded] = useState(false);
  const [images, setImages] = useState([]);
  const [imageUrl, setImageUrl] = useState();

  const onSubmit = async (formData) => {
    formData.username = formData.username.toLowerCase();
    try {
      await signUp({
        variables: {
          signUpInput: formData,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

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

  const goals = [
    "Lose Weight",
    "Gain Muscle",
    "Toning",
    "Make Friends",
    "Get Fit",
    "Improving Endurance",
    "Improve Strength",
  ];

  const interests = [
    "Yoga",
    "Cycling",
    "Cardio",
    "Weight Lifting",
    "Endurance",
    "Gym Classes",
  ];

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="accordion-container">
      <div className={classes.root}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                1. Basic details
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="signUp-form-container">
              <Box component="div" m={1}>
                <Controller
                  name="firstName"
                  control={control}
                  rules={{ required: "First name is required" }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl>
                      <InputLabel
                        className={classNames({ "form-error": error })}
                      >
                        First Name
                      </InputLabel>
                      <Input
                        value={value}
                        onChange={onChange}
                        error={!!error}
                      />
                    </FormControl>
                  )}
                />
              </Box>
              <Box component="div" m={1}>
                <Controller
                  name="lastName"
                  control={control}
                  rules={{ required: "Last name is required" }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl>
                      <InputLabel
                        className={classNames({ "form-error": error })}
                      >
                        Last Name
                      </InputLabel>
                      <Input
                        value={value}
                        onChange={onChange}
                        error={!!error}
                      />
                    </FormControl>
                  )}
                />
              </Box>
              <Box component="div" m={1}>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: "Email is required" }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl>
                      <InputLabel
                        className={classNames({ "form-error": error })}
                      >
                        Email
                      </InputLabel>
                      <Input
                        value={value}
                        onChange={onChange}
                        error={!!error}
                      />
                    </FormControl>
                  )}
                />
              </Box>
              <Box component="div" m={1}>
                <Controller
                  name="username"
                  control={control}
                  rules={{ required: "Username is required" }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl>
                      <InputLabel
                        className={classNames({ "form-error": error })}
                      >
                        Username
                      </InputLabel>
                      <Input
                        value={value}
                        onChange={onChange}
                        error={!!error}
                      />
                    </FormControl>
                  )}
                />
              </Box>
              <Box component="div" m={1}>
                <Controller
                  name="password"
                  control={control}
                  rules={{ required: "Password is required" }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl>
                      <InputLabel
                        className={classNames({ "form-error": error })}
                      >
                        Password
                      </InputLabel>
                      <Input
                        value={value}
                        onChange={onChange}
                        error={!!error}
                        label="Password"
                        type="password"
                      />
                    </FormControl>
                  )}
                />
              </Box>
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
              <Typography className={classes.heading}>
                2. Create your profile
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="signUp-form-container">
              <Box component="div" m={1}>
                <ImageUploader
                  images={images}
                  setImages={setImages}
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  prefix={"user/images/"}
                />
              </Box>
              <CityAutocomplete control={control} />
              <Box component="div" m={1}>
                <Controller
                  name="bio"
                  control={control}
                  rules={{ required: "Bio is required" }}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl>
                      <TextField
                        placeholder="Bio"
                        multiline
                        rows={1}
                        rowsMax={5}
                        value={value}
                        onChange={onChange}
                        className={classNames({ "form-error": error })}
                      />
                    </FormControl>
                  )}
                />
              </Box>
              <Box component="div" m={1}>
                <MultiSelectDropDown
                  options={goals}
                  placeholder="Goals"
                  name="goals"
                  control={control}
                />
              </Box>
              <Box component="div" m={1}>
                <MultiSelectDropDown
                  options={interests}
                  placeholder="Interests"
                  name="interests"
                  control={control}
                />
              </Box>
              <Box component="div" m={1}>
                <Controller
                  render={({ field: { onChange, value } }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={value}
                          onChange={onChange}
                          name="isGymOwner"
                          color="primary"
                        />
                      }
                      label="Are you a gym owner?"
                    />
                  )}
                  name="isGymOwner"
                  control={control}
                />
              </Box>
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
                3. Add your social media info
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="signUp-form-container">
              <Box component="div" m={1}>
                <Controller
                  name="facebookUrl"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl>
                      <InputLabel
                        className={classNames({ "form-error": error })}
                      >
                        Facebook URL
                      </InputLabel>
                      <Input
                        value={value}
                        onChange={onChange}
                        error={!!error}
                      />
                    </FormControl>
                  )}
                />
              </Box>
              <Box component="div" m={1}>
                <Controller
                  name="twitterUrl"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl>
                      <InputLabel
                        className={classNames({ "form-error": error })}
                      >
                        Twitter URL
                      </InputLabel>
                      <Input
                        value={value}
                        onChange={onChange}
                        error={!!error}
                      />
                    </FormControl>
                  )}
                />
              </Box>
              <Box component="div" m={1}>
                <Controller
                  name="instagramUrl"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <FormControl>
                      <InputLabel
                        className={classNames({ "form-error": error })}
                      >
                        Instagram URL
                      </InputLabel>
                      <Input
                        value={value}
                        onChange={onChange}
                        error={!!error}
                      />
                    </FormControl>
                  )}
                />
              </Box>
            </AccordionDetails>
          </Accordion>
          <div className="sign-up-btn-container">
            <button className="sign-up-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
