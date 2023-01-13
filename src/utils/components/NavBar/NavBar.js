import * as React from "react";
import { useContext } from "react";
import { UserContext } from "../../store/AuthContext.js";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ImageContainer from "../Image.js";
import logo_style from "../../models/css_styles.js";
import "./NavBar.css";

const drawerWidth = "25%";

export function NavBar() {
  const { logout } = useContext(UserContext);
  return (
    <div className="navbar">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar disableGutters>
            <Box>
              <ImageContainer
                imageStyle={logo_style}
                imagePath="resting_cat.jpg"
              />
            </Box>
          </Toolbar>
          <Divider />
          <List>
            <ListItem key={"home-button"} disablePadding>
              <ListItemButton>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"logout-button"} disablePadding>
              <ListItemButton onClick={logout}>
                <ListItemText primary={"Logout"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </div>
  );
}