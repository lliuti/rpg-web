import "./App.css";
import { AuthProvider } from "./contexts/auth";
import { Router } from "./routes";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";

export const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const theme = useTheme();

  return (
    <ThemeProvider theme={darkTheme}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ThemeProvider>
  );
};
