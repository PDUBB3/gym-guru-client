import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FormGroup from "@material-ui/core/FormGroup";

const exerciseFacilities = [
  {
    id: "1",
    name: "Weight Area",
  },
  {
    id: "2",
    name: "Cardio Area",
  },
  {
    id: "3",
    name: "Fitness Studio",
  },
  {
    id: "4",
    name: "Swimming Pool",
  },
  {
    id: "5",
    name: "Tennis Court",
  },
];

const GymFilter = () => {
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

  return (
    <Container maxWidth="sm">
      <Button onClick={toggleDrawer(true)}>Filter</Button>
      <Drawer anchor="top" open={isOpen} onClose={toggleDrawer(false)}>
        <Container maxWidth="sm">All goes here</Container>
      </Drawer>
    </Container>
  );
};

export default GymFilter;
