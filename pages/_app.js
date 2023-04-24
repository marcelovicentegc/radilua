import { appWithTranslation } from "next-i18next";
import { GeistProvider, CssBaseline } from "@geist-ui/core";

function App({ Component, pageProps }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}

export default appWithTranslation(App);
