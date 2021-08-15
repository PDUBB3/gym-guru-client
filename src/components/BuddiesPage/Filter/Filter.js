import React from "react";
import { useState } from "react";

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Box from "@material-ui/core/Box";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import "./Filter.css";

const Filter = ({ filterStatus, setFilterStatus }) => {
  // const [countries] = useState(Country.getAllCountries());
  const [cities, setCities] = useState();
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedGym, setSelectedGym] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    console.log({
      selectedCity,
      selectedGym,
    });
  };

  const handleChangeCity = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleChangeGym = (event) => {
    setSelectedGym(event.target.value);
  };

  return (
    <div className={`filter ${filterStatus ? "active-filter" : ""}`}>
      <h2>Filter</h2>
      <div className="filterOptions">
        <form onSubmit={onSubmit}>
          <Box component="div" m={1}>
            <FormControl style={{ minWidth: "200px" }}>
              <InputLabel>City</InputLabel>
              <Select value={selectedCity} onChange={handleChangeCity}>
                <MenuItem name="Birmingham" value="Birmingham" key="Birmingham">
                  Birmingham
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          {selectedCity && (
            <Box component="div" m={1}>
              <FormControl style={{ minWidth: "200px" }}>
                <InputLabel>Gym</InputLabel>
                <Select value={selectedGym} onChange={handleChangeGym}>
                  <MenuItem value="PureGym" key="PureGym">
                    PureGym
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}
          <Box component="div" m={1}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={() => setFilterStatus(!filterStatus)}
            >
              Save & Close
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default Filter;
