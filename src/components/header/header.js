import React from "react";
import * as constants from "./constant";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import GetIcons from "../../common/utility/iconSelector";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  toolbarRoot: {
    minHeight: "50px"
  },
  paper: {
    minWidth: "200px",
    top: "50px !important"
  },
  list: {
    padding: "0"
  },
  menuItemRoot: {
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "#ddf0f8"
    }
  },
  appBarRoot: {
    backgroundColor: "rgba(47, 144, 229, 0.8)",
    boxShadow: "none"
  }
}));

const Header = props => {
  const classes = useStyles();

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header-container">
      <AppBar position="static" classes={{root: classes.appBarRoot}}>
        <Toolbar classes={{ root: classes.toolbarRoot }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {constants.headerTitle}
          </Typography>
          <Button color="inherit">Login</Button>
          {auth && (
            <div className="header-right-section">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
                classes={{ paper: classes.paper, list: classes.list }}
              >
                {constants.profileMenuList.map((menu, index) => (
                  <MenuItem
                    classes={{ root: classes.menuItemRoot }}
                    onClick={handleClose}
                  >
                    {GetIcons(menu.iconName)}
                    <span style={{ paddingLeft: "8px" }}>{menu.label}</span>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
