import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Switch,
} from "@mui/material";
import { ListItemIcon } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupsIcon from "@mui/icons-material/Groups";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { MyThemes } from "../MyThemes";

const menuItems = [
  { icon: <HomeIcon />, text: "Homepage" },
  { icon: <DescriptionIcon />, text: "Pages" },
  { icon: <GroupsIcon />, text: "My Groups" },
  { icon: <ShoppingBagIcon />, text: "Marketplace" },
  { icon: <ShoppingCartIcon />, text: "Cart" },
  { icon: <HelpIcon />, text: "Help" },
  { icon: <AccountCircleIcon />, text: "My Account" },
  { icon: <SettingsIcon />, text: "Settings" },
];

const Sidebar = () => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          lg: "block",
          sm: "none",
        },
      }}
    >
      <Box position="fixed">
        <List className="myList">
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton element="a" href="#">
                <ListItemIcon sx={{ color: MyThemes.palette.secondary.main }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ fontSize: "1rem" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
