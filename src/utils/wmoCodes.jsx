import ErrorIcon from "@mui/icons-material/Error";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import ShowerIcon from "@mui/icons-material/Shower";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export const WMO_CODES = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Dense drizzle",
  56: "Light freezing drizzle",
  57: "Dense freezing drizzle",
  61: "Slight rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Slight snow fall",
  73: "Moderate snow fall",
  75: "Heavy snow fall",
  77: "Snow grains",
  80: "Slight rain showers",
  81: "Moderate rain showers",
  82: "Violent rain showers",
  85: "Slight snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with slight hail",
  99: "Thunderstorm with heavy hail",
};

export const WMO_ICONS = ({ id, size }) => {
  switch (id) {
    case 0:
    case 1:
      return <WbSunnyIcon sx={{ fontSize: size, color: "orange" }} />;
    case 2:
    case 3:
      return <CloudIcon sx={{ fontSize: size }} />;

    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 61:
    case 63:
    case 66:
    case 67:
      return <ShowerIcon sx={{ fontSize: size, color: "lightblue" }} />;
    case 95:
    case 96:
    case 99:
      return <ThunderstormIcon sx={{ fontSize: size }} />;

    default:
      return <ErrorIcon sx={{ fontSize: size }} />;
  }
};
