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
import { Albums } from "../components/Albums";
import { Tracks } from "../components/Tracks";

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
                <Albums key={album.id} album={album} handleAlbums={handleAlbums}/>
              ))
            : albums
                .filter((album) =>
                  album.title.toLowerCase().replace(/\s+/g, '').includes(searchAlbums.toLowerCase().replace(/\s+/g, ''))
                )
                .map((album) => (
                  <Albums key={album.id} album={album} handleAlbums={handleAlbums}/>
                ))
          : tracks
              .filter((track) =>
                track.title.toLowerCase().replace(/\s+/g, '').includes(searchTracks.toLowerCase().replace(/\s+/g, ''))
              )
              .map((track) => (
                <Tracks key={track.id} track={track} setSearchTracks={setSearchTracks}/>
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
