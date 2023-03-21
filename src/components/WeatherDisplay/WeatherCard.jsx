import { Box, Grid, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

import { parseDirection } from "../../utils/helpers";
import { WMO_CODES, WMO_ICONS } from "../../utils/wmoCodes";
import Loader from "../Loader/Loader";

const WeatherCard = ({ currentForecast, location }) => {
  const { name: city } = location;

  return (
    <Box sx={{ padding: "5px" }}>
      <Grid container direction="column">
        <Grid item>
          <Typography
            variant="h4"
            textAlign="center"
          >{`City: ${city}`}</Typography>
        </Grid>
        {currentForecast ? (
          <WeatherCardDetails currentForecast={currentForecast} />
        ) : (
          <Loader />
        )}
      </Grid>
    </Box>
  );
};

const WeatherCardDetails = ({ currentForecast }) => {
  const { temperature, winddirection, windspeed, weathercode } =
    currentForecast;

  return (
    <>
      <Grid item>
        <Box textAlign="center">{WMO_ICONS({ id: weathercode, size: 48 })}</Box>
      </Grid>

      <Grid item>
        <Typography
          variant="h6"
          textAlign="center"
        >{`Temperature: ${temperature} C`}</Typography>
      </Grid>

      <Grid item>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="subtitle2">
            {`Wind direction: ${parseDirection(winddirection)} `}
          </Typography>
          <DoubleArrowIcon
            sx={{ fontSize: "22px", rotate: `${360 - winddirection}deg` }}
          />
        </Box>
      </Grid>

      <Grid item>
        <Typography
          variant="subtitle2"
          textAlign="center"
        >{`Wind speed: ${windspeed} km/h`}</Typography>
      </Grid>

      <Grid item>
        <Typography variant="h6" textAlign="center">
          {WMO_CODES[weathercode]}
        </Typography>
      </Grid>
    </>
  );
};

export default WeatherCard;
