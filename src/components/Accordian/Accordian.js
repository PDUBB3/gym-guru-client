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

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

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
          <Typography>
            <div className="contact">
              <div>Ulleries Rd</div>
              <div>Solihull</div>
              <div>B92 8DS</div>
              <div>0121 700 1350</div>
            </div>
          </Typography>
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
          <Typography>
            <div className="table">
              <BasicTable />
            </div>
          </Typography>
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
          <Typography>
            <div className="facilities">
              <div>
                <div>Exercise Facilities</div>
                <ul>
                  <li className="list-item">Fitness Studio</li>
                  <li className="list-item">Cardio Area</li>
                  <li className="list-item">Weight Area</li>
                </ul>
              </div>
              <div>
                <div>Other Facilities</div>
                <ul>
                  <li className="list-item">Sauna</li>
                  <li className="list-item">Spa</li>
                  <li className="list-item">Showers</li>
                </ul>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
