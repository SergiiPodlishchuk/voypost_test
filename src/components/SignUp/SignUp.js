import React, { useState } from "react";
import { useFormik } from "formik";
import { TextField, Typography, Button, Box } from "@material-ui/core";

import validationSchema from "./yup";

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box>
      <Typography variant="h2" component="h2">
        Sign up to set your brand up for success
      </Typography>

      <form onSubmit={formik.handleSubmit}>
        <Box mb={10}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            type="submit"
          >
            Sign up with Google
          </Button>
          <Button
            variant="contained"
            size="large"
            color="inherit"
            type="submit"
          >
            Sign up with Microsoft
          </Button>
        </Box>
        <Box display="flex" flexDirection="column">
          <TextField
            id="userName"
            label="Full name"
            variant="outlined"
            placeholder="Enter your name"
            value={formik.values.userName}
            type="text"
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
            InputLabelProps={{
              shrink: false,
            }}
          ></TextField>
          <TextField
            id="email"
            label="Email Address"
            placeholder="Enter your email"
            variant="outlined"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            InputLabelProps={{
              shrink: false,
            }}
          ></TextField>
          <TextField
            id="password"
            label="Password (8 characters)"
            placeholder="Enter your password"
            type="password"
            variant="outlined"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputLabelProps={{
              shrink: false,
            }}
          ></TextField>
        </Box>
        <Box>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            type="submit"
          >
            Sign Up
          </Button>
        </Box>
      </form>
    </Box>
  );
}
