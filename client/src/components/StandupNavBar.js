import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function StandupNavBar() {
  return(
    // <Container maxWidth="lg">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Hiring Events Stand Up
          </Typography>
        </Toolbar>
      </AppBar>
    // </Container>
  );
}

export default StandupNavBar;