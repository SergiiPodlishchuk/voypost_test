import { createMuiTheme } from "@material-ui/core/styles";

// const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6D9B12",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        width: 133,
        height: 50,
      },
      sizeLarge: {
        width: 270,
      },
      sizeSmall: {
        width: 120,
        height: 40,
      },
      containedSecondary: {
        backgroundColor: "#6D9B12",
      },
      containedPrimary: {
        backgroundColor: "#4285F4",
      },
      colorInherit: {
        backgroundColor: "#E5E5E5",
      },
      label: {
        textTransform: "none",
      },
    },
    MuiTypography: {
      root: {
        width: "550px",
        fontFamily: "Roboto",
        fontStyle: "normal",
      },
      h1: {
        fontSize: "36px",
        fontWeight: "900",
        lineHeight: "42px",
        marginBottom: "24px",
      },
      h2: {
        fontSize: "32px",
        fontWeight: "700",
        lineHeight: "37px",
        marginBottom: "24px",
        // textAlign:"center"
      },
      h3: {
        fontSize: "28px",
        fontWeight: "500",
        lineHeight: "33px",
        marginBottom: "24px",
      },
      h4: {
        fontSize: "24px",
        fontWeight: "500",
        lineHeight: "28px",
        marginBottom: "24px",
      },
      h5: {
        fontSize: "18px",
        fontWeight: "500",
        lineHeight: "21px",
        marginBottom: "24px",
      },
      h6: {
        fontSize: "16px",
        fontWeight: "700",
        lineHeight: "19px",
        marginBottom: "24px",
      },

      subtitle1: {
        fontSize: "14px",
        fontWeight: "700",
        lineHeight: "16px",
        marginBottom: "24px",
      },
      subtitle2: {
        fontSize: "14px",
        fontWeight: "300",
        lineHeight: "16px",
      },
    },
    MuiTextField: {
      root: {
        width: 550,
        marginBottom: 68,
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 6,
        backgroundColor: "#EFEFEF",
      },

      notchedOutline: {
        borderColor: "#EFEFEF",
      },
    },
    MuiFormLabel: {
      root: {
        color: "#000000",
        transform: 0,
      },
    },
    MuiInputLabel: {
      outlined: {
        transform: "none",
        position: "static",
        marginBottom: 10,
        shrink: {
          transform: "none",
          color: "red",
        },
      },
    },
  },
});

export default theme;
