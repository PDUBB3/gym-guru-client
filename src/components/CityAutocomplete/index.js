import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { City } from "country-state-city";
import { Controller } from "react-hook-form";
import { Box } from "@material-ui/core";

const CityAutocomplete = ({ control, city, classes }) => {
  const cities = City.getCitiesOfCountry("GB");

  const defaultValue = cities.find((each) => {
    return each.name === city;
  });

  return (
    <Box component="div">
      <Controller
        name="city"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <Autocomplete
              onChange={(_, data) => onChange(data?.name)}
              value={value}
              defaultValue={defaultValue}
              options={cities}
              getOptionLabel={(option) => option.name}
              className={classes?.cityAutocomplete}
              renderInput={(params) => (
                <TextField {...params} label="Select city" variant="outlined" />
              )}
            />
          );
        }}
      />
    </Box>
  );
};

export default CityAutocomplete;
