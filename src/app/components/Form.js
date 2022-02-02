import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { TextField, Box } from '@mui/material';

import { Button } from './';
import { validationSchema } from '../utils/FormSchema';

const Form = ({ fieldList, initialFieldValues, buttonText, handleSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSubmitted) {
      setIsSubmitted(false);
      return navigate('/dashboard');
    }
  }, [isSubmitted]);

  const formik = useFormik({
    enableReintialize: true,
    initialValues: initialFieldValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values, setIsSubmitting, setIsSubmitted);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {fieldList?.map((f) => (
        <Box my={2} key={f.name}>
          <TextField
            fullWidth
            id={f.name}
            name={f.name}
            label={f.label}
            size="small"
            type={f.type}
            InputLabelProps={{
              shrink: true,
            }}
            value={formik.values?.[f.name]}
            onChange={formik.handleChange}
            error={formik.touched?.[f.name] && Boolean(formik.errors?.[f.name])}
            helperText={formik.touched?.[f.name] && formik.errors?.[f.name]}
          />
        </Box>
      ))}

      <Box display="flex">
        <Box mr={1}>
          <Button
            component={Link}
            to={'/dashboard'}
            label="Cancel"
            color="inherit"
          />
        </Box>
        <Box mr={1}>
          <Button
            color="success"
            type="submit"
            label={buttonText}
            disabled={isSubmitting}
          />
        </Box>
      </Box>
    </form>
  );
};

export default Form;
