import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useMediaQuery } from "react-responsive";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
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

const BuddiesFilter = ({ getUsers, options }) => {
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

  const onSubmit = (formData) => {
    const { city } = formData;

    getUsers({
      variables: {
        usersCity: city,
      },
    });
  };

  return (
    <Container maxWidth="lg">
      <div className="gymFilterButton">
        <Button onClick={toggleDrawer(true)}>Filter</Button>
      </div>
      <Drawer anchor="top" open={isOpen} onClose={toggleDrawer(false)}>
        <Box m={2} className={classes.closeButton}>
          <CloseIcon onClick={toggleDrawer(false)} />
        </Box>
        <Box m={2}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box component="div">
              <Controller
                name="city"
                control={control}
                render={({ field: { onChange, value } }) => {
                  return (
                    <Autocomplete
                      onChange={(_, data) => onChange(data.name)}
                      value={value}
                      options={options}
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
            <Divider />
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

export default BuddiesFilter;
