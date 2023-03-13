// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "darkTheme",
    themes: {
      lightTheme: {
        dark: false,
        colors: {
          "caption": "#6c757d",
          "succes": "#4CAF50",
          "primary-25": "#ffffff",
          "primary-100": "#e4e7ec",
          "primary-200": "#dee2e6",
          "primary-300": "#b3b3b3",
          "primary-500": "#667085",
          "primary-900": "#000000",
        },
      },
      darkTheme: {
        dark: true,
        colors: {
          "caption": "#6c757d",
          "succes": "#4CAF50",
          "primary-25": "#121212",
          "primary-100": "#1d2939",
          "primary-200": "#212529",
          "primary-300": "#ffffff",
          "primary-500": "E4E7EC",
          "primary-900": "#ffffff",
        },
      },
    },
  },
});
