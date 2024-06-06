import { Box, Checkbox } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Stack } from "@mui/system";

const Feeds = ({ cardList, onDelete, onEdit }) => {
  const handleDelete = (index) => {
    onDelete(index);
  };
  return (
    <Box
      flex={4}
      p={2}
      sx={{
        width: {
          xs: "500px",
          sm: "600px",
          lg: "800px",
        },
        margin: "0",
        minHeight: "100vh"
      }}
    >
      {cardList.map((card, index) => (
        <Card
          sx={{
            borderRadius: "1rem",
            marginBottom: "10px",
            padding: {
              xs: "10px",
              sm: "15px",
            },
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: "red" }}
                aria-label="recipe"
                src={card.avatar}
              >
                R
              </Avatar>
            }
            title={card.title}
            subheader={card.subheader}
          />
          <CardMedia
            component="img"
            loading="lazy"
            height="50%"
            image={card.image}
            alt="Paella dish"
            sx={{ borderRadius: "1rem" }}
          />
          <CardContent>
            <Typography
              variant="p"
              color="text.secondary"
              sx={{
                fontSize: {
                  xs: "10px",
                  sm: "15px",
                  lg: "20px",
                },
              }}
            >
              {card.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton onClick={onEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => handleDelete(index)}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default Feeds;
