import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useAuth } from "../contexts/auth/AuthContextsProvider";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const { login, user } = useAuth();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    login(data.get("email") as string, data.get("password") as string);
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
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        autoComplete="email"
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
        Login
      </Button>
    </Box>
  );
}
