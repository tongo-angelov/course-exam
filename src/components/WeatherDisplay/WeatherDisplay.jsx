import { Box } from "@mui/material";

import LocationSearch from "./LocationSearch";
import WeatherCard from "./WeatherCard";

const WeatherDisplay = ({ currentForecast, location, onLocationChanged }) => {
  return (
    <Box sx={{ padding: "5px" }}>
      <LocationSearch onLocationChanged={onLocationChanged} />
      {location && (
        <WeatherCard location={location} currentForecast={currentForecast} />
      )}
    </Box>
  );
};

export default WeatherDisplay;
