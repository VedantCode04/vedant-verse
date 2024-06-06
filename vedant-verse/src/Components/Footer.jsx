import React from "react";
import { Image } from "@chakra-ui/react";
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";
import pfp from "../img/MyPfp.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
const styles = {
  position: "relative",
  width: "10",
  height: "5rem",
  backgroundColor: "#FF0A54",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  left: 0,
  bottom: 0
};

const Footer = () => {
  return (
    <div style={styles}>
      <Stack
        direction="row"
        gap={5}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        <Image borderRadius="50%" boxSize="60px" src={pfp} alt="Dan Abramov" />
        <Typography
          sx={{
            color: "white",
            fontSize: {
              xs: "20px",
              sm: "25px",
              lg: "30px",
            },
            fontWeight: "900",
          }}
        >
          Made by Vedant Patel
        </Typography>
      </Stack>
      <Box
        direction="column"
        sx={{ paddingRight: "10px" }}
        justifyContent="center"
        alignItems="center"
      >
        <Stack direction="row" gap={2} marginRight={1}>
          <LinkedInIcon
            sx={{ color: "white", fontSize: "30px", cursor: "pointer" }}
            onClick={() => {
              window.open("https://www.linkedin.com/in/vedantpatel31/");
            }}
          />
          <GitHubIcon
            sx={{ color: "white", fontSize: "30px", cursor: "pointer" }}
            onClick={() => {
              window.open("https://www.github.com/VedantCode04/");
            }}
          />
        </Stack>
      </Box>
    </div>
  );
};

export default Footer;
