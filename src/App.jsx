import "./App.css";
import Router from "./routes";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const theme = useTheme();

  return (
    <ThemeProvider theme={darkTheme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
