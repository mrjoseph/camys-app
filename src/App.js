import React from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
// import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { createMuiTheme } from "@material-ui/core/styles";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

import "./App.css";
// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
 root:{},
  appBar: {
    display:"flex",
  '& a': {
    color: "#fff",
    margin: '0 0 0 20px',
    padding: '0',
    '&:hover':{
      color:"#D77F90",
      transitionDuration: "0.2s",
    },
   },
   backgroundColor: "transparent",
    fontSize: "18px",
   padding: '24px 0 16px 0',
 },
 appBackground:{
   backgroundImage: "url('/01.-Royal-Heath.jpg')",
   backgroundSize: "100%",
   "padding-bottom": "60px",
 },

logo:{
  fontSize: "26px",
},

 heroContent: {
  background: "rgba( 255, 255, 255, 0.30 )",
  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
  backdropFilter: "blur( 8.0px )",
  "-webkit-backdrop-filter": "blur( 8.0px )",
  borderRadius: "10px",
  border: "1px solid rgba( 255, 255, 255, 0.18 )",
  padding: "100px 64px",
  color: "#FFFFFF",
 },

 hero:{
   padding: "0 0 99px",
 },

 h1:{ 
   fontWeight: "400",
 },

 heroButton: {
  '& a': {
   color: "#fff",
  },
  display:"inline-block",
  width: "150px",
  marginTop:"15px",
  padding:"8px 25px",
  backgroundColor: "#D0475B",
  borderRadius: "200px",
  textAlign: "center",
  fontSize: "18px",
  textDecoration: "none",
  '&:hover': {
   backgroundColor: "#c33247",
   boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
   cursor: 'pointer',
   transitionDuration: "0.2s",
 },
 '&:visited': {
   color: "#fff",
 }},


 content:{
  padding: "50px",
  color: "#151A3A",
  },

h2Content:{
  marginBottom: "30px",
},


 about:{
  padding: "40px",
  background: "white",
  color: "#151A3A",
  textAlign: "justify",
  margin: "30px 70px",
},

 contact:{
  padding: "40px",
  color: "#151A3A",
  '& a': {
    color: "#D77F90",
 } },

 h3Contact:{
   color: "#D77F90",
   marginBottom: "20px",
 },

 footer:{},


}));
const cardsArray = [
  {
    title:"Service1", 
    description:"here is the description"
  },
  {
    title:"Service1", 
    description:"here is the description"
  },
  {
    title:"Service1", 
    description:"here is the description"
  },
];
const content = {
  about: {
    description: `There is no denying the fact that the success of an advertisement
    lies mostly in the headline. The headline should attract the reader and make 
    him read the rest of the advertisement. The headline should be simply catchy 
    and various key points should be embedded when deciding on the headline for the ad.`,
  }
};

const CardContainer = (classes) => {
return (
  <Grid container justify="space-evenly" spacing={3}>
    {cardsArray.map((item) => {
  return (
    <Grid item key={item.title} xs={12} sm={4}>
      <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {item.title}
                    </Typography>
                    <Typography>
                     {item.description}
                    </Typography>
                  </CardContent>
                
                </Card>
      </Grid>
  )
}) }
  </Grid>
)
};

const App = () => {
  const classes = useStyles();
  const theme = createMuiTheme({
    typography: {
      fontFamily: ['"Montserrat"'].join(","),
    },
  });
  return (
    <MuiThemeProvider theme={theme} >
      <main className={classes.container}>
        {/* Hero unit */}
        <CssBaseline />       
      </main>   
      <Container maxWidth={false} disableGutters>
        
        <div className={classes.appBackground}>
          <Container disableGutters maxWidth="md" className={classes.appBar} >
          <Grid direction="row" xs={6}>
            <Grid item><Typography className={classes.logo}>CR/</Typography></Grid>
          </Grid>
          <Grid container direction="row" justify="flex-end" spacing={2} xs={6}>
            <Grid item><Link href="#">Services</Link></Grid>
            <Grid item ><Link href="#">About</Link></Grid>
            <Grid item><Link href="#">Contact</Link></Grid>
          </Grid>
            </Container>
          <Container disableGutters maxWidth="md">
          <div className={classes.heroContent}>
            <Typography className={classes.h1} component="h1" variant="h2" align="left" >Heading</Typography>
            <Typography component="p" variant="h4">This is going to be the subheading</Typography>
            <Typography className={classes.heroButton}><Link className={classes.linkButton} href="#">CONTACT</Link></Typography>
            </div>
          </Container>
          </div>
       
  
            <Container maxWidth="md">
            <Typography component="h2" variant="h3" className={classes.h2Content}>This is going to be the h2</Typography>
              <CardContainer classes={classes.CardContainer}/>
        
      

          <div className={classes.about}>
          <Typography component="h2" variant="h3" align="center" gutterBottom={true}>About</Typography>
          <Typography component="p" align="center">{content.about.description}</Typography>
          </div>
          <div className={classes.contact}>
          <Typography component="h2" variant="h3" align="center" gutterBottom={true}>Contact</Typography>
          <Typography component="h3" variant="h4" align="center" gutterBottom={true} className={classes.h3Contact}>Get in touch with me</Typography>
          <Typography component="p" align="center">There is no denying the fact that the success of an advertisement lies mostly in the headline.</Typography>
          <Typography component="p" align="center"><Link href="#">email@me.com</Link></Typography>
          </div>
          <div className={classes.footer}></div>
          </Container>
          </Container>  
    </MuiThemeProvider>
  );
};

export default App;
