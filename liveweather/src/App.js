
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CircularProgress,
} from "@mui/material";
import "./App.css";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
if (!API_KEY) {
  throw new Error("REACT_APP_WEATHER_API_KEY is not defined in .env file");
}
function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");
    setWeatherData(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();

      if (res.ok) {
        setWeatherData(data);
      } else {
        setError(data.message || "City not found.");
      }
    } catch (err) {
      setError("Failed to fetch data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Live Weather Dashboard
      </Typography>

      <TextField
        fullWidth
        label="Enter City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={fetchWeather}
        sx={{ mb: 3 }}
      >
        Get Weather
      </Button>

      {loading && <CircularProgress />}

      {error && (
        <Typography color="error" align="center" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {weatherData && (
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h5">{weatherData.name}</Typography>
            <Typography variant="body1" gutterBottom>
              {weatherData.weather[0].description.toUpperCase()}
            </Typography>
            <Typography variant="h6">
              Temperature: {weatherData.main.temp}°C
            </Typography>
            <Typography>Humidity: {weatherData.main.humidity}%</Typography>
            <Typography>Wind Speed: {weatherData.wind.speed} m/s</Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}

export default App;
