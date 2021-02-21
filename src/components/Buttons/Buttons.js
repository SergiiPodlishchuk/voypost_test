import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

export default function Buttons() {
  return (
    <Box>
      <Box m={3}>
        <Button variant="contained" size="large" color="secondary">
          Sign Up
        </Button>
        <Button variant="contained" size="medium" color="secondary">
          Sign Up
        </Button>
        <Button variant="contained" size="small" color="secondary">
          Sign Up
        </Button>
      </Box>
      <Box m={3}>
        <Button variant="contained" size="large" color="primary">
          Sign Up
        </Button>
        <Button variant="contained" size="medium" color="primary">
          Sign Up
        </Button>
        <Button variant="contained" size="small" color="primary">
          Sign Up
        </Button>
      </Box>
      <Box m={3}>
        <Button variant="contained" size="large" color="inherit">
          Sign Up
        </Button>
        <Button variant="contained" size="medium" color="inherit">
          Sign Up
        </Button>
        <Button variant="contained" size="small" color="inherit">
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}
