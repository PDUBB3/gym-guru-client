import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { Controller } from "react-hook-form";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const MultiSelectDropDown = ({
  options,
  placeholder,
  name,
  control,
  defaults,
}) => {
  return (
    <Controller
      render={({ field: { onChange } }) => (
        <Autocomplete
          multiple
          disableCloseOnSelect
          defaultValue={defaults}
          options={options}
          renderOption={(option, { selected }) => (
            <FormControlLabel
              control={
                <Checkbox
                  checked={selected}
                  style={{ marginRight: 8 }}
                  icon={icon}
                  checkedIcon={checkedIcon}
                  name={option}
                />
              }
              label={option}
            />
          )}
          renderInput={(params) => (
            <TextField {...params} variant="outlined" label={placeholder} />
          )}
          onChange={(_, data) => onChange(data)}
        />
      )}
      name={name}
      control={control}
    />
  );
};

export default MultiSelectDropDown;
