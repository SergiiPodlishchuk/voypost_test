import React from "react";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";

export default function TextFields(params) {
  return (
    <Box>
      <h2>Text fields</h2>
      <TextField
        id="filled-secondary"
        label="Filled secondary"
        variant="filled"
        color="secondary"
      ></TextField>
      <TextField
        id="filled-secondary"
        label="Filled secondary"
        placeholder="Placeholder"
        variant="filled"
        color="secondary"
      ></TextField>
      <TextField
        id="filled-secondary"
        label="Filled secondary"
        variant="filled"
        color="secondary"
      ></TextField>
    </Box>
  );
}
