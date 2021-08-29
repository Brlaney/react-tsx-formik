import { FieldProps } from 'formik';
import React from 'react';
import { Slider, Typography } from '@material-ui/core';

export const SliderFormField: React.FC<FieldProps & { label: string }> = ({
  field,
  form,
  label,
  ...props
}) => {
  return (
    <>
      <Typography
        component='div'
        id='sliderlabel'
        // variant='h3'
      >
        {label}
      </Typography>
      <Slider
        onChange={(_, v) => form.setFieldValue(field.name, v)}
        value={field.value}
        step={1}
        marks
        min={1}
        max={50}
        {...props}
      />
    </>
  );
};
