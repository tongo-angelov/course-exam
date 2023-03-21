import { useMemo } from "react";
import { Box } from "@mui/system";

import ForecastCard from "./ForecastCard";
import Loader from "../Loader/Loader";

const ForecastList = ({ forecast }) => {
  const data = useMemo(() => {
    const mapped = [];
    if (forecast)
      forecast.time.forEach((time, index) => {
        mapped.push({
          time,
          temperature_2m_min: forecast["temperature_2m_min"][index],
          temperature_2m_max: forecast["temperature_2m_max"][index],
          windspeed_10m_max: forecast["windspeed_10m_max"][index],
          weathercode: forecast["weathercode"][index],
        });
      });
    return mapped;
  }, [forecast]);

  return (
    <Box sx={{ padding: "5px" }}>
      {forecast ? (
        data.map((item) => <ForecastCard key={item.time} data={item} />)
      ) : (
        <Loader />
      )}
    </Box>
  );
};

export default ForecastList;
