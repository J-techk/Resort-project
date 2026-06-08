import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  IconButton,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  Alert,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      setSuccess("Login successful!");

      console.log(data);
      setTimeout(() => {
        navigate("/Landingpage");
      }, 1000);

      // =========================
      // SAVE TOKEN
      // =========================
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      // =========================
      // SAVE USER
      // =========================
      if (data.user) {
        localStorage.setItem("user", JSON.stringify(data.user));

        // SAVE USER ID
        localStorage.setItem("userId", data.user._id);
      }
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Something went wrong";

      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
        px: 2,
      }}
    >
      <Paper
        elevation={12}
        sx={{
          width: 420,
          p: 5,
          borderRadius: 3,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
          Welcome Back
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Enter your email and password
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // @ts-ignore - MUI TextField InputProps typing conflict in this project setup
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            sx={{ mt: 1 }}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{
              mt: 3,
              height: 48,
              fontWeight: 600,
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Box>
        <Link to="/register">Don't have an account? Sign up</Link>
      </Paper>
    </Box>
  );
};

export default Login;
