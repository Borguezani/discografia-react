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
import { useNavigate, useParams } from "react-router-dom";


export function Album(){
    const navigate = useNavigate();
    const [searchTracks ,setSearchTracks]= useState('');
    const [tracks, setTracks] = useState([]);
    
    function handleSearchTracks (event){
        setSearchTracks(event);
    }
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/v1/albums/${id}/tracks`).then((response) => {
            setTracks(response.data);
        })
      },
      []);
      return (
        <FlexContainer>
          <Title>Lista de Músicas do Álbum:</Title>
          <TagButton onClick={()=>{navigate(`/CreateTrack/${id}`)}}>Adicionar Música ao Álbum Atual</TagButton>
          <PrimaryInputWSearchIcon onChange={(e) => handleSearchTracks(e.target.value)} placeholder="Procurando uma Track específica?"/>
          <GridContainer>
            {!searchTracks ? (
            tracks.map((track) => (
              <div key={track.id} item xs={2} sm={4} md={4}>
              <Card  sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 300 }}
                  image={track.link_image}
                  title="Album Image"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div">
                    {track.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Link da Música: <a href={track.link} target="_blank" rel="noopener noreferrer">{track.title}</a>
                  </Typography>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent:'center'}}>
                </CardActions>
              </Card>
              </div>
            ))) : (tracks.filter(track => track.title.toLowerCase().includes(searchTracks.toLowerCase())).map(track => (
                <div key={track.id} item xs={2} sm={4} md={4}>
              <Card  sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 300 }}
                  image={track.link_image}
                  title="Album Image"
                />
                <CardContent >
                  <Typography gutterBottom variant="h5" component="div">
                    {track.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Link da Música: <a href={track.link} target="_blank" rel="noopener noreferrer">{track.title}</a>
                  </Typography>
                </CardContent>
                <CardActions sx={{display: 'flex', justifyContent:'center'}}>
                </CardActions>
              </Card>
              </div>
            ))
            
            )}
          </GridContainer>
        </FlexContainer>
      );
    }
    const Title = styled.h2`
    color:#ffffff
    `
    const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    `
    const GridContainer = styled.div`
     display: grid;
     gap: 2rem;
     grid-template-columns: repeat(4 , 1fr);
     @media(max-width:768px){
      grid-template-columns: repeat(2 , 1fr)
     }
     @media(max-width:430px){
      grid-template-columns: repeat(1 , 1fr)
     }
    `
    const TagButton = styled.button`
    margin-bottom:5px;
    background-color: #1E90FF;
    color: #fff;
    padding: 8px 16px; 
    border: none;
    margin-left: 5px;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;
    font-size: 16px; 
    font-weight: bold; 

    &:hover {
        background-color: #4682B4; 
    }
`
    
    