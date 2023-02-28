// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "lightTheme",
    themes: {
      lightTheme: {
        dark: false,
        colors: {
          "primary-25": "#ffffff",
          "primary-900": "#000000",
          "primary-300": "#b3b3b3",
          "primary-500": "#667085",
          "primary-100": "#e4e7ec",
        },
      },
      darkTheme: {
        dark: true,
        colors: {
          "primary-25": "#121212",
          "primary-900": "#ffffff",
          "primary-300": "#ffffff",
          "primary-500": "E4E7EC",
          "primary-100": "#1d2939",
        },
      },
    },
  },
});
