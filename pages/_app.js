import { appWithTranslation } from "next-i18next";
import { GeistProvider, CssBaseline } from "@geist-ui/core";
import { useState } from "react";

function App({ Component, pageProps }) {
  const [themeType, setThemeType] = useState("light");
  const onSwitchTheme = () => {
    setThemeType((last) => (last === "dark" ? "light" : "dark"));
  };

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Component {...pageProps} onSwitchTheme={onSwitchTheme} />
    </GeistProvider>
  );
}

export default appWithTranslation(App);
