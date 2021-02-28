import React from "react";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import content from "../content.json";
const Contact = ({ content }) => {
  const { title, description, email } = content.contact;
  return (
    <Box mb={5}>
      <Typography
        component="h2"
        variant="h3"
        align="center"
        gutterBottom={true}
      >
        {title}
      </Typography>

      <Typography component="p" align="center">
        {description}
      </Typography>
      <Typography component="p" align="center">
        <Link href="#">{email}</Link>
      </Typography>
    </Box>
  );
};

export default Contact;
