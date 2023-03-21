import { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";

import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import ForecastList from "./components/ForecastList/ForecastList";

function App() {
  const [location, setLocation] = useState();
  const [currentForecast, setCurrentForecast] = useState();
  const [weekForecast, setWeekForecast] = useState();

  useEffect(() => {
    fetch("https://geocoding-api.open-meteo.com/v1/search?name=vratsa&count=1")
      .then((res) => res.json())
      .then((data) => setLocation(data.results[0]))
      .catch((e) => console.log("Something went wrong:", e));
  }, []);

  useEffect(() => {
    if (location)
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true&daily=temperature_2m_min,temperature_2m_max,windspeed_10m_max,weathercode,sunrise,sunset&timezone=auto`
      )
        .then((res) => res.json())
        .then((data) => {
          setCurrentForecast(data["current_weather"]);
          setWeekForecast(data["daily"]);
        })
        .catch((e) => console.log("Something went wrong:", e));
  }, [location]);

  return (
    <Container>
      <Typography variant="h3" textAlign="center">
        Weather Station
      </Typography>
      <Grid container direction="row-reverse">
        <Grid item xs={12} lg={6} sx={{ background: "#444" }}>
          <WeatherDisplay
            currentForecast={currentForecast}
            location={location}
            onLocationChanged={setLocation}
          />
        </Grid>
        <Grid item xs={12} lg={6} sx={{ background: "#444" }}>
          <ForecastList forecast={weekForecast} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
