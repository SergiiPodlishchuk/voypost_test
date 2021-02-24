import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function TypographyComp() {
  return (
    <Box>
      <Typography variant="h1" component="h2">
        Typography
      </Typography>
      <Typography variant="h2" component="h2">
        Typography
      </Typography>
      <Typography variant="h3" component="h2">
        Typography
      </Typography>
      <Typography variant="h4" component="h2">
        Typography
      </Typography>
      <Typography variant="h5" component="h2">
        Typography
      </Typography>
      <Typography variant="h6" component="h2">
        Typography
      </Typography>
      <Typography variant="subtitle1" component="h2">
        Typography
      </Typography>
      <Typography variant="subtitle2" component="h2">
        Typography
      </Typography>
    </Box>
  );
}
