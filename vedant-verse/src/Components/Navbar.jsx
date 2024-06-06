import {
  Avatar,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import { MyThemes } from "../MyThemes";
import Pfp from "../img/MyPfp.jpg";
import { Button, Drawer } from "antd";
import HomeIcon from "@mui/icons-material/Home";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupsIcon from "@mui/icons-material/Groups";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import Hamburger from "hamburger-react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "5px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

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

const MyPfp = () => {
  return (
    <Stack
      direction="row"
      gap={5}
      alignItems="center"
      sx={{ marginBottom: "15px" }}
    >
      <Avatar
        sx={{
          width: "100px",
          height: "100px",
          margin: "0 15px",
        }}
        src={Pfp}
      />

      <Typography fontWeight="600" fontSize="30px">
        Vedant Patel
      </Typography>
    </Stack>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hamb, setHamb] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    setHamb(false);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "3.5rem",
        background: MyThemes.palette.primary.main,
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        height="100%"
      >
        <Typography
          sx={{
            color: "white",
            fontSize: {
              xs: "10px",
              sm: "20px",
              lg: "25px",
            },
            fontWeight: "600",
            paddingLeft: {
              xs: "10px",
              sm: "15px",
              lg: "20px",
            },
            alignContent: "center",
          }}
        >
          VEDANT-VERSE
        </Typography>

        <SearchBar
          sx={{
            width: {
              sm: "30%",
              lg: "40%",
            },
          }}
        >
          <InputBase placeholder="search..." />
        </SearchBar>
        <Box sx={{ paddingRight: "10px" }}>
          <Hamburger
            toggled={hamb}
            toggle={setHamb}
            color="white"
            onToggle={showDrawer}
          />
        </Box>
        <Drawer placement="right" onClose={onClose} open={open}>
          <List className="myList">
            <MyPfp />
            <Stack direction="row" gap={3} paddingLeft="10rem" paddingBottom="3rem">
              <LinkedInIcon
                sx={{ color: "blue", fontSize: "30px", cursor: "pointer" }}
                onClick={() => {
                  window.open("https://www.linkedin.com/in/vedantpatel31/");
                }}
              />
              <GitHubIcon
                sx={{ color: "black", fontSize: "30px", cursor: "pointer" }}
                onClick={() => {
                  window.open("https://www.github.com/VedantCode04/");
                }}
              />
            </Stack>
            {menuItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton element="a" href="#">
                  <ListItemIcon sx={{ color: MyThemes.palette.secondary.main }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={{ fontSize: "1rem", paddingLeft: "30px" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Stack>
    </Box>
  );
};

export default Navbar;
