import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  Typography,
  ImageListItem,
  Stack,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import React from "react";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJlZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJlYWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
    title: "Camera",
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: {
          xs: "none",
          sm: "block",
        },
        position: "relative",
      }}
    >
      <Box position="fixed" fontWeight="600">
        <Box>
          <Typography variant="h5">Online Friends</Typography>
          <AvatarGroup
            max={5}
            sx={{
              marginTop: "10px",
              display: "flex",
              flexDirection: "flex-start",
              alignItems: "center",
              width: "200px",
            }}
          >
            <Avatar
              alt="Krishna"
              src="https://w0.peakpx.com/wallpaper/480/995/HD-wallpaper-lord-krishna-bhagwan-krishna-lord-shree-thumbnail.jpg"
            />
            <Avatar
              alt="Hanuman"
              src="https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFudW1hbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            />
            <Avatar
              alt="Durga"
              src="https://images.unsplash.com/photo-1602772576751-f90059b6a8ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVyZ2F8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            />
            <Avatar
              alt="Ram"
              src="https://images.bhaskarassets.com/thumb/1800x1800/web2images/521/2020/10/23/shree-raam-730_1603452491.jpg"
            />
            <Avatar
              alt="Shankar"
              src="https://m.media-amazon.com/images/I/81lllxF2bjS._SL1500_.jpg"
            />
          </AvatarGroup>
        </Box>
        <Typography marginTop="2rem" variant="h5">
          Whats New ?
        </Typography>

        <ImageList sx={{ width: 400, height: 170 }} cols={3} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography marginTop="10px" variant="h5">
          Latest Convo
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper", overflow: "auto" }} 
        >
          <ListItem alignItems="flex-start" width={200}>
            <ListItemAvatar>
              <Avatar
                alt="Thor"
                src="https://images.unsplash.com/photo-1592513002316-e4fa19175023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGhvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Groot"
              secondary={
                <React.Fragment>
                  {"I'm groot"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start" width={200}>
            <ListItemAvatar>
              <Avatar
                alt="IronMan"
                src="https://images.unsplash.com/photo-1635863138275-d9b33299680b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJvbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Tony Stark"
              secondary={
                <React.Fragment>
                  {" I'm Iron Man"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
