import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";

import { DESKTOP_BREAKPOINT } from "../../../mediaQueries";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  checkboxesContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  center: {
    padding: "16px",
    textAlign: "center",
  },
  closeButton: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: 0,
  },
}));

const GymFilter = ({ exerciseFacilities, otherFacilities, getGyms }) => {
  const isDesktop = useMediaQuery(DESKTOP_BREAKPOINT);

  const classes = useStyles();

  const { handleSubmit, control } = useForm();

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(open);
  };

  const getFacilities = (formData, prefix) => {
    return Object.entries(formData).reduce((acc, [key, value]) => {
      if (key.includes(prefix) && value) {
        return [...acc, key.replace(prefix, "")];
      }
      return acc;
    }, []);
  };

  const onSubmit = (formData) => {
    const exerciseFacilities = getFacilities(formData, "exercise_facility_");
    const otherFacilities = getFacilities(formData, "other_facility_");

    getGyms({
      variables: {
        gymsExerciseFacilities: exerciseFacilities,
        gymsOtherFacilities: otherFacilities,
      },
    });
  };

  return (
    <Container maxWidth="lg">
      <Button onClick={toggleDrawer(true)}>Filter</Button>
      <Drawer anchor="top" open={isOpen} onClose={toggleDrawer(false)}>
        <Box m={2} className={classes.closeButton}>
          <CloseIcon onClick={toggleDrawer(false)} />
        </Box>
        <Box m={2}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box component="div">
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Exercise Facilities</FormLabel>
                <FormGroup className={classes.checkboxesContainer}>
                  {exerciseFacilities.map((exerciseFacility) => {
                    return (
                      <FormControlLabel
                        control={
                          <Controller
                            name={`exercise_facility_${exerciseFacility.id}`}
                            control={control}
                            defaultValue={false}
                            render={({ field: { onChange, value } }) => {
                              return (
                                <Checkbox checked={value} onChange={onChange} />
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
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Other Facilities</FormLabel>
                <FormGroup className={classes.checkboxesContainer}>
                  {otherFacilities.map((otherFacility) => {
                    return (
                      <FormControlLabel
                        control={
                          <Controller
                            name={`other_facility_${otherFacility.id}`}
                            control={control}
                            defaultValue={false}
                            render={({ field: { onChange, value } }) => {
                              return (
                                <Checkbox checked={value} onChange={onChange} />
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
            {!isDesktop && (
              <Box component="div" className={classes.center}>
                <Button
                  variant="contained"
                  color="primary"
                  disableElevation
                  onClick={toggleDrawer(false)}
                >
                  Close
                </Button>
              </Box>
            )}
          </form>
        </Box>
      </Drawer>
    </Container>
  );
};

export default GymFilter;
