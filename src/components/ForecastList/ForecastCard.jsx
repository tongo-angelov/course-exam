import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { WMO_CODES, WMO_ICONS } from "../../utils/wmoCodes";

const ForecastCard = ({ data }) => {
  const {
    time,
    temperature_2m_min: min,
    temperature_2m_max: max,
    windspeed_10m_max: wind,
    weathercode: code,
  } = data;

  return (
    <Box sx={{ marginBottom: "5px", background: "#333", padding: "10px" }}>
      <Grid container direction="column">
        <Grid item>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography variant="h6">{time}</Typography>
            </Grid>
            <Grid item>{WMO_ICONS({ id: code, size: 32 })}</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            sx={{
              color: (min > 18 && "peachpuff") || (min < 0 && "lightblue"),
            }}
          >{`${min} C ~ ${max} C`}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">{`Wind speed: ${wind} km/h`}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption">{WMO_CODES[code]}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ForecastCard;
