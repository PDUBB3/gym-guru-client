import React from "react";
import { useState, useContext } from "react";

import { BuddiesFilterContext } from "../../../context/BuddiesFilterContext";

import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Box from "@material-ui/core/Box";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import "./Filter.css";

const Filter = ({ filterStatus, setFilterStatus }) => {
  // const [countries] = useState(Country.getAllCountries());
  const [cities, setCities] = useState();
  const [selectedGym, setSelectedGym] = useState("");

  const { filterParams, setFilterParams } = useContext(BuddiesFilterContext);

  const onSubmit = (event) => {
    event.preventDefault();

    console.log({
      filterParams,
      selectedGym,
    });
  };

  const handleChangeCity = (event) => {
    setFilterParams(event.target.value);
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
              <Select value={filterParams} onChange={handleChangeCity}>
                <MenuItem name="Birmingham" value="Birmingham" key="Birmingham">
                  Birmingham
                </MenuItem>
                <MenuItem name="Manchester" value="Manchester" key="Manchester">
                  Manchester
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          {filterParams && (
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
              className="closeFilterButton"
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
