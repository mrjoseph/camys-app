import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    display: "flex",
    "& a": {
      color: "#fff",
      margin: "0 0 0 20px",
      lineHeight: "2",
      padding: "0",
      "&:hover": {
        color: "#fff",
        transitionDuration: "0.2s",
      },
    },
    backgroundColor: "transparent",
    fontSize: "18px",
    // padding: "24px 0 16px 0",
  },
  appBackground: {
    backgroundImage: "url('/01.-Royal-Heath.jpg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

    backgroundPosition: "center",
    "padding-bottom": "60px",
  },

  logo: {
    fontSize: "26px",
    color: "#fff",
  },

  heroContent: {
    background: "rgba( 255, 255, 255, 0.30 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 8.0px )",
    "-webkit-backdrop-filter": "blur( 8.0px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    // padding: "100px 64px",
    color: "#FFFFFF",
  },

  hero: {
    padding: "0 0 99px",
  },

  h1: {
    fontWeight: "400",
  },

  heroButton: {
    "& a": {
      color: "#fff",
    },
    display: "inline-block",
    width: "150px",
    marginTop: "15px",
    padding: "8px 25px",
    backgroundColor: "#D0475B",
    borderRadius: "200px",
    textAlign: "center",
    fontSize: "18px",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "#c33247",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
      cursor: "pointer",
      transitionDuration: "0.2s",
    },
    "&:visited": {
      color: "#fff",
    },
  },
  content: {
    padding: "50px",
    color: "#151A3A",
  },
  about: {
    background: "white",
    color: "#151A3A",
    textAlign: "justify",
  },

  contact: {
    padding: "40px",
    color: "#151A3A",
    "& a": {
      color: "#D77F90",
    },
  },

  h3Contact: {
    color: "#D77F90",
    marginBottom: "20px",
  },

  footer: {},
}));

export default useStyles;
