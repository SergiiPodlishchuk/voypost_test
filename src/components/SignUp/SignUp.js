import React, { useState } from "react";
import { useFormik } from "formik";
import {
  TextField,
  Typography,
  Button,
  Box,
  InputAdornment,
  IconButton,
  SvgIcon,
} from "@material-ui/core";

import { Visibility, VisibilityOff } from "@material-ui/icons";

import validationSchema from "./yup";

export default function SignUp() {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
            startIcon={
              <SvgIcon>
                <svg viewBox="0 0 50 50">
                  <path d="M 25.089844 20.476562 L 25.089844 28.121094 L 35.980469 28.121094 C 34.554688 32.75 30.6875 36.0625 25.089844 36.0625 C 18.425781 36.0625 13.023438 30.660156 13.023438 24 C 13.023438 17.339844 18.425781 11.9375 25.089844 11.9375 C 28.085938 11.9375 30.820312 13.035156 32.933594 14.84375 L 38.558594 9.214844 C 35.007812 5.976562 30.277344 4 25.089844 4 C 14.042969 4 5.085938 12.953125 5.085938 24 C 5.085938 35.046875 14.042969 44 25.089844 44 C 41.882812 44 45.589844 28.300781 43.941406 20.503906 Z M 25.089844 20.476562 " />
                </svg>
              </SvgIcon>
            }
          >
            Sign up with Google
          </Button>
          <Button
            variant="contained"
            size="large"
            color="inherit"
            startIcon={
              <SvgIcon>
                <svg viewBox="0 0 50 50">
                  <path d="M 5 4 C 4.448 4 4 4.447 4 5 L 4 24 L 24 24 L 24 4 L 5 4 z M 26 4 L 26 24 L 46 24 L 46 5 C 46 4.447 45.552 4 45 4 L 26 4 z M 4 26 L 4 45 C 4 45.553 4.448 46 5 46 L 24 46 L 24 26 L 4 26 z M 26 26 L 26 46 L 45 46 C 45.552 46 46 45.553 46 45 L 46 26 L 26 26 z" />
                </svg>
              </SvgIcon>
            }
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
            onBlur={formik.handleBlur}
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
            onBlur={formik.handleBlur}
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
            variant="outlined"
            value={formik.values.password}
            type={values.showPassword ? "text" : "password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputLabelProps={{
              shrink: false,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextField>
        </Box>
        <Box>
          <Button
            variant="contained"
            size="large"
            color="secondary"
            type="submit"
            disabled={!(formik.dirty && formik.isValid)}
          >
            Sign Up
          </Button>
        </Box>
      </form>
    </Box>
  );
}
