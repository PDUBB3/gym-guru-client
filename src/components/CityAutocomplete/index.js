import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { listCities } from "cclist";

const cities = listCities("GB");

export default function ComboBox() {
  console.log(cities);
  return (
    <Autocomplete
      options={cities}
      getOptionLabel={(option) => option}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Type a city in here" variant="outlined" />
      )}
    />
  );
}
