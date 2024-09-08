import "../styles/globals.css";
import { SWRConfig } from "swr";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { api } from "@/utils";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

export default function App({ Component, pageProps }) {
  const fetcher = (resource, init) =>
    api(resource, init).then((res) => res.data);

  const options = { fetcher: fetcher };

  return (
    <ThemeProvider theme={theme}>
      <SWRConfig value={options}>
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  );
}
