import "../styles/globals.css";
import { SWRConfig } from "swr";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useAxios } from "@/components/hooks";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

const api = useAxios();
const fetcher = (resource, init) => api(resource, init).then((res) => res.data);

const options = { fetcher: fetcher };

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <SWRConfig value={options}>
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  );
}
