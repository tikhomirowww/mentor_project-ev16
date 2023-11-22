import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useAuth } from "../contexts/auth/AuthContextsProvider";
import { Navigate } from "react-router-dom";

export default function RegisterPage() {
  const { register, user } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    register(
      data.get("email") as string,
      data.get("password") as string,
      data.get("displayName") as string,
      data.get("photoURL") as string
    );
  };

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "20%",
        margin: "auto",
        marginTop: "100px",
        border: "2px solid #1976D2",
        borderRadius: "15px",
        gap: "5px",
        padding: "20px",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-search"
        label="Name"
        type="text"
        variant="standard"
        name="displayName"
        required
      />
      <TextField
        required
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
