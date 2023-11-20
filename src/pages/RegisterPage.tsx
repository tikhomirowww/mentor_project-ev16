import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function RegisterPage() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-search"
        label="Name"
        type="text"
        variant="standard"
        name="name"
      />
      <TextField
        id="standard-search"
        label="Photo"
        type="url"
        variant="standard"
        name="photoURL"
      />
      <TextField
        id="standard-search"
        label="Email"
        type="email"
        variant="standard"
        name="email"
      />
      <TextField
        id="standard-search"
        label="Password"
        type="password"
        variant="standard"
        name="password"
      />
      <Button type="submit" variant="contained">
        Register
      </Button>
    </Box>
  );
}
