import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disable: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disable } = props;
  const { control } = form;
  // const { errors } = form;
  // const hasError = errors[name];
  // console.log(hasError);

  return (
    <Controller
      // name={name}
      // control={form.control}
      // render={({ onChange, onBlur, value, name }) => (
      //   <TextField
      //     margin="normal"
      //     variant="outlined"
      //     fullWidth
      //     label={label}
      //     disabled={disabled}
      //     error={!!hasError}
      //     helperText={errors[name]?.message}
      //     name={name}
      //     value={value}
      //     onChang={onChange}
      //     onBlur={onBlur}
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
        <TextField
          margin="normal"
          variant="outlined"
          fullWidth
          label={label}
          error={invalid}
          helperText={error?.message}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          disabled={disable}
        />
      )}
    ></Controller>
  );
}

export default InputField;
