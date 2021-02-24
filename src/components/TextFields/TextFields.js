import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";

export default function TextFields() {
  const [error, setError] = useState();
  const [text, setText] = useState("");

  function handle(e) {
    if (e.target.value.length >= 8) {
      setError(false);
      setText("");
    } else {
      setError(true);
      setText(
        "Please input your password! The password must be at least 8 characters!"
      );
    }
  }

  return (
    <Box display="flex" flexDirection="column">
      <TextField
        // id="full_name"
        label="Full name"
        variant="outlined"
        placeholder="Enter your name"
        InputLabelProps={{
          shrink: false,
        }}
        // id="outlined-size-small"
        // onChange={handle}
      ></TextField>
      <TextField
        id="email"
        label="Email Address"
        placeholder="Enter your email"
        variant="outlined"
        type="email"
        InputLabelProps={{
          shrink: false,
        }}
      ></TextField>
      <TextField
        error={error}
        id="password"
        label="Password (8 characters)"
        placeholder="Enter your password"
        type="password"
        variant="outlined"
        helperText={text}
        onChange={handle}
        InputLabelProps={{
          shrink: false,
        }}
      ></TextField>
    </Box>
  );
}
