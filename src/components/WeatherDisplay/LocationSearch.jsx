import { Autocomplete, TextField, Typography } from "@mui/material";
import { useState } from "react";

const LocationSearch = ({ onLocationChanged }) => {
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const query = e.target.value;
    if (query) {
      const data = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}&count=5`
      ).then((res) => res.json());
      setResults(data["results"] || []);
    }
  };

  const mapOptions = () => {
    return results.map((item, index) => ({
      label: `${item.name}, ${item.country}`,
      id: index,
    }));
  };

  const handleLocationChanged = (item) => {
    if (item) onLocationChanged(results[item.id]);
  };

  return (
    <Autocomplete
      onChange={(e, value) => handleLocationChanged(value)}
      options={mapOptions()}
      renderOption={(props, option) => {
        return (
          <Typography {...props} key={option.id}>
            {option.label}
          </Typography>
        );
      }}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      noOptionsText="No results"
      sx={{
        "& input": {
          color: "white",
        },
      }}
      renderInput={(params) => (
        <TextField onChange={handleSearch} fullWidth {...params} />
      )}
    />
  );
};

export default LocationSearch;
