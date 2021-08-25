import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { City } from "country-state-city";
import { Controller } from "react-hook-form";
import { Box } from "@material-ui/core";

const cities = City.getCitiesOfCountry("GB");

const CityAutocomplete = ({ control }) => {
  return (
    <Box component="div">
      <Controller
        name="city"
        control={control}
        render={({ field: { onChange, value } }) => {
          return (
            <Autocomplete
              onChange={(_, data) => onChange(data.name)}
              value={value}
              options={cities}
              getOptionLabel={(option) => option.name}
              style={{ width: 300 }}
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
