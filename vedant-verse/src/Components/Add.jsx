import { IconButton, Stack, TextField, Tooltip } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { styled } from "@mui/material";
import { Avatar } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Pfp from "../img/MyPfp.jpg";
import { MyThemes } from "../MyThemes";

const PostIcon = styled(PostAddIcon)({
  color: "white",
});

const CustomModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const UserBox1 = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: {
    xs: "15px",
    sm: "20px",
  },
});

const CustomTextField = styled(TextField)({
  width: "100%",
  marginBottom: "10px",
});

const Add = ({ setcardList }) => {
  const [open, setopen] = useState(false);

  const handleTitleChange = (event) => {
    settitle(event.target.value);
  };

  const handleImageChange = (event) => {
    setimage(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setdescription(event.target.value);
  };

  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");

  const sendData = () => {
    const currentDate = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const post = {
      title: title,
      subheader: currentDate,
      image: image,
      description: description,
    };
    settitle("");
    setimage("");
    setdescription("");
    setcardList((prevCardList) => {
      const updatedCardList = [...prevCardList];
      updatedCardList.splice(0, 0, post);
      return updatedCardList;
    });

    setopen(false);
  };

  return (
    <>
      <Tooltip
        title="add new post"
        sx={{
          position: "sticky",
          bottom: "20px",
          left: "20px ",
          boxShadow: "none",
          marginBottom: "20px",
        }}
        onClick={(e) => setopen(true)}
      >
        <Fab variant="extended" color="primary">
          <AddIcon sx={{ mr: 1, color: "white", fontWeight: "900" }} />
          <Typography sx={{ fontWeight : "900"}}>New Post</Typography>
        </Fab>
      </Tooltip>
      <CustomModal
        open={open}
        onClose={(e) => setopen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            borderRadius: "1rem",
            height: {
              xs: "330px",
              md: "350px",
              lg: "340px",
            },
            width: {
              xs: "300px",
              md: "400px",
              lg: "500px",
            },
            backgroundColor: "white",
          }}
          p={3}
        >
          <Typography
            variant="h4"
            color="gray"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "1.3rem",
                lg: "1.7rem",
              },
            }}
            textAlign="center"
          >
            New Post
          </Typography>
          <UserBox1 sx={{ marginBottom: "20px" }}>
            <Avatar sx={{ width: 50, height: 50 }} src={Pfp} />
            <Typography
              variant="span"
              sx={{
                fontWeight: "600",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontSize: {
                  xs: "20px",
                  sm: "25px",
                },
              }}
            >
              Vedant
            </Typography>
          </UserBox1>
          <CustomTextField
            id="standard-multiline-static"
            multiline
            rows={1}
            placeholder="Post Title"
            variant="standard"
            onChange={handleTitleChange}
          />
          <CustomTextField
            id="standard-multiline-static"
            multiline
            rows={1}
            placeholder="Image url"
            variant="standard"
            onChange={handleImageChange}
          />
          <CustomTextField
            id="standard-multiline-static"
            multiline
            rows={1}
            placeholder="caption"
            variant="standard"
            onChange={handleDescriptionChange}
          />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              marginTop: {
                xs: "20px",
                sm: "30px",
                lg: "30px",
              },
              marginBottom: {
                xs: "20px",
                sm: "30px",
                lg: "30px",
              },
            }}
          >
            <Box>
              <IconButton>
                <AttachFileIcon sx={{ color: "#FF0A54" }} />
              </IconButton>
              <IconButton>
                <AlternateEmailIcon sx={{ color: "#FF0A54" }} />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              startIcon={<PostIcon />}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={sendData}
            >
              Add Post
            </Button>
          </Stack>
        </Box>
      </CustomModal>
    </>
  );
};

export default Add;
