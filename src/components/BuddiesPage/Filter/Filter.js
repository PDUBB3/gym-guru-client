import React from "react";
import { useState, useContext } from "react";
import { useQuery } from "@apollo/client";

import { GYMS_QUERY, USERS_QUERY } from "../../../graphql/queries";
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
  const [selectedGym, setSelectedGym] = useState("");

  const { data, loading, error } = useQuery(GYMS_QUERY);
  const {
    data: userData,
    loading: userLoading,
    error: userError,
  } = useQuery(USERS_QUERY);

  const { filterParams, setFilterParams } = useContext(BuddiesFilterContext);

  const onSubmit = (event) => {
    event.preventDefault();

    console.log({
      filterParams,
      selectedGym,
    });
  };

  const handleChangeCity = (event) => {
    setFilterParams({ ...filterParams, city: event.target.value });
  };

  const handleChangeGym = (event) => {
    setFilterParams({ ...filterParams, gym: event.target.value });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  const filteredGyms = data.gyms.filter((gym) => {
    return gym.city === filterParams.city;
  });

  return (
    <div className={`filter ${filterStatus ? "active-filter" : ""}`}>
      <h2>Filter</h2>
      <div className="filterOptions">
        <form onSubmit={onSubmit}>
          <Box component="div" m={1}>
            <FormControl style={{ minWidth: "200px" }}>
              <InputLabel>City</InputLabel>
              <Select value={filterParams} onChange={handleChangeCity}>
                {userData.users.map((user) => {
                  return (
                    <MenuItem
                      name={user.city}
                      value={user.city}
                      key={user.city}
                    >
                      {user.city}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
          {filterParams && (
            <Box component="div" m={1}>
              <FormControl style={{ minWidth: "200px" }}>
                <InputLabel>Gym</InputLabel>
                <Select value={selectedGym} onChange={handleChangeGym}>
                  {filteredGyms.map((gym) => {
                    return (
                      <MenuItem name={gym.name} value={gym.name} key={gym.name}>
                        {gym.name}
                      </MenuItem>
                    );
                  })}
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
