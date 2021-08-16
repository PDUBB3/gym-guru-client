import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

import BasicTable from "../Table/Table";

import "./Accordian.css";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const CustomizedAccordions = ({ gym }) => {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const {
    address,
    city,
    postCode,
    contactNumber,
    openingTimes,
    exerciseFacilities,
    otherFacilities,
  } = gym;

  console.log(exerciseFacilities, otherFacilities);
  return (
    <div>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Contact Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <div>{address}</div>
            <div>{city}</div>
            <div>{postCode}</div>
            <div>{contactNumber}</div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Opening Hours</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="table">
            <BasicTable openingTimes={openingTimes} />
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Facilities</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="facilities">
            <div>
              <div>Exercise Facilities</div>
              <ul>
                {exerciseFacilities.map((facility) => (
                  <li className="list-item">{facility.name}</li>
                ))}
              </ul>
            </div>
            <div>
              <div>Other Facilities</div>
              <ul>
                {otherFacilities.map((facility) => (
                  <li className="list-item">{facility.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CustomizedAccordions;
