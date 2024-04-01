import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { PrimaryInputWSearchIcon } from "../components/SearchInput";
import { useNavigate } from "react-router-dom";
import { DeleteDialog } from "../components/DeleteDialog";

export function AlbumsList() {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [searchAlbums, setSearchAlbums] = useState("");
  const [searchTracks, setSearchTracks] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/v1/tracks")
      .then((response) => {
        setTracks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching albums:", error);
      });
    axios
      .get("http://127.0.0.1:8000/api/v1/albums")
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((error) => {
        console.error("Error fetching albums:", error);
      });
  }, []);
  function handleAlbums(id, title) {
    navigate(`/album/${id}/${title}`);
  }
  return (
    <FlexContainer>
      <Title>Lista de Álbuns</Title>
      <SearchContainer>
        <PrimaryInputWSearchIcon
          onChange={(e) => setSearchAlbums(e.target.value)}
          placeholder="Procurando Álbum específico?"
          value={searchAlbums}
        />
        <PrimaryInputWSearchIcon
          onChange={(e) => setSearchTracks(e.target.value)}
          placeholder="Procurando Alguma Música?"
          value={searchTracks}
        />
      </SearchContainer>

      <GridContainer>
        {!searchTracks
          ? !searchAlbums
            ? albums.map((album) => (
                <div key={album.id} item xs={2} sm={4} md={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 300 }}
                      image={album.link_image}
                      title="Album Image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {album.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Ano: {album.year}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {album.artist}
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        size="small"
                        onClick={() => handleAlbums(album.id, album.title)}
                      >
                        Ver Álbum
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              ))
            : albums
                .filter((album) =>
                  album.title.toLowerCase().replace(/\s+/g, '').includes(searchAlbums.toLowerCase().replace(/\s+/g, ''))
                )
                .map((album) => (
                  <div key={album.id} item xs={2} sm={4} md={4}>
                    <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 300 }}
                        image={album.link_image}
                        title="Album Image"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {album.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Ano: {album.year}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {album.artist}
                      </Typography>
                      </CardContent>
                      <CardActions
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <Button
                          size="small"
                          onClick={() => handleAlbums(album.id)}
                        >
                          Ver Álbum
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                ))
          : tracks
              .filter((track) =>
                track.title.toLowerCase().replace(/\s+/g, '').includes(searchTracks.toLowerCase().replace(/\s+/g, ''))
              )
              .map((track) => (
                <div key={track.id} item xs={2} sm={4} md={4}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 300 }}
                      image={track.link_image}
                      title="Album Image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {track.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Link da Música:{" "}
                        <a
                          href={track.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {track.title}
                        </a>
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <DeleteDialog Id={track.id} config={"Música"} cleanInput={setSearchTracks}/>
                    </CardActions>
                  </Card>
                </div>
              ))}
      </GridContainer>
    </FlexContainer>
  );
}
const Title = styled.h2`
  color: #ffffff;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GridContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
