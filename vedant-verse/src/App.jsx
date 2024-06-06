import Feeds from "./Components/Feeds";
import Rightbar from "./Components/Rightbar";
import Sidebar from "./Components/Sidebar";
import "./App.css";
import { Box, Container, Stack } from "@mui/material";
import Navbar from "./Components/Navbar";
import Add from "./Components/Add";
import Footer from "./Components/Footer";
import { useState } from "react";
import Pfp from "./img/MyPfp.jpg";
const cardData = [
  {
    avatar: Pfp,
    title: "Pink Beauty",
    subheader: "September 14, 2016",
    image:
      "https://images.pexels.com/photos/4612304/pexels-photo-4612304.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Experience the captivating beauty of a pink sunset at the beach...",
  },
  {
    avatar: Pfp,
    title: "Golden Reflection",
    subheader: "October 22, 2017",
    image:
      "https://images.pexels.com/photos/268694/pexels-photo-268694.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Witness the golden reflections on a calm lake as the sun sets...",
  },
  {
    avatar: Pfp,
    title: "Mountain Peak",
    subheader: "May 9, 2019",
    image:
      "https://images.pexels.com/photos/4215113/pexels-photo-4215113.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Conquer the breathtaking mountain peak and behold the stunning views...",
  },
  {
    avatar: Pfp,
    title: "Majestic Waterfall",
    subheader: "November 18, 2021",
    image:
      "https://images.pexels.com/photos/464327/pexels-photo-464327.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Stand in awe of the majestic waterfall cascading down with immense power...",
  },
  {
    avatar: Pfp,
    title: "Serenity of Forest",
    subheader: "April 7, 2022",
    image:
      "https://images.pexels.com/photos/1083515/pexels-photo-1083515.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Embrace the tranquility of the lush green forest and its peaceful atmosphere...",
  },
  {
    avatar: Pfp,
    title: "Sunrise over the Hills",
    subheader: "July 11, 2023",
    image:
      "https://images.pexels.com/photos/2404371/pexels-photo-2404371.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Witness the breathtaking sunrise as it paints the hills in golden hues...",
  },
  {
    avatar: Pfp,
    title: "Village Vibes",
    subheader: "December 5, 2024",
    image:
      "https://images.pexels.com/photos/5023725/pexels-photo-5023725.jpeg?auto=compress&cs=tinysrgb&w=600",
    description:
      "Step into the misty morning and experience the serene ambiance...",
  },
];
function App() {
  const onDelete = (index) => {
    setcardList((prevCardList) => {
      const updatedCardList = [...prevCardList];
      updatedCardList.splice(index, 1);
      return updatedCardList;
    });
  };

    const onEdit = (index, updatedDescription) => {
      setcardList((prevCardList) => {
        const updatedCardList = [...prevCardList];
        updatedCardList[index].description = updatedDescription;
        return updatedCardList;
      });
    };

  const [cardList, setcardList] = useState(cardData);
  return (
    <Box>
      <Navbar />
      <Stack direction="row" justifyContent="space-between">
        <Sidebar />
        <Feeds cardList={cardList} onDelete={onDelete} onEdit={onEdit} />
        <Rightbar />
      </Stack>
      <Add setcardList={setcardList} />
      <Footer />
    </Box>
  );
}

export default App;
