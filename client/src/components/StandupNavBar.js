import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function StandupNavBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem component={Link} to="/">Home</MenuItem>
            <MenuItem component={Link} to="/full_data">Full Data</MenuItem>
          </Menu>
          <Typography variant="h6">
            Hiring Events Stand Up
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

export default StandupNavBar;