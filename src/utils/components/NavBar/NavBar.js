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
import ImageContainer from "../ImageContainer.js";
import "./NavBar.css";

const drawerWidth = "15%";

export function NavBar() {
  const { logout } = useContext(UserContext);
  return (
    <div className="navbar">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer
          sx={{
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
            <ImageContainer imagePath="https://static.vecteezy.com/system/resources/thumbnails/002/098/203/small/silver-tabby-cat-sitting-on-green-background-free-photo.jpg" />
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
