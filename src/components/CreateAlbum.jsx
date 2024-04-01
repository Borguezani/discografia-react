import axios from "axios";
import { useState } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
axios.defaults.withCredentials = true;
export function CreateAlbum(){
    const navigate = useNavigate()
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [year, setYear] = useState('');
    const [image, setImage] = useState('');
    async function handleSubmit(e){
        e.preventDefault();
        const album = {
            title,
            year,
            artist,
            link_image: image
        }
        await axios.post('http://127.0.0.1:8000/api/v1/albums', album).then(
            navigate('/')
        )
       }
    return(
        <ContainerForm>
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Label htmlFor="titulo">Título:</Label>
            <Inputs type="text" id="titulo" name="titulo" placeholder="Informe o Título do Álbum:" onChange={(e)=>setTitle(e.target.value)}/>
            <Label htmlFor="artist">Artista:</Label>
            <Inputs type="text" id="artist" name="artist" placeholder="Informe o Artista:" onChange={(e)=>setArtist(e.target.value)}/>
            <Label htmlFor="year">Ano:</Label>
            <Inputs type="text" id="year" name="year" placeholder="Informe o Ano do Álbum:" onChange={(e)=>setYear(e.target.value)}/>
            <Label htmlFor="link_image">Link da Imagem da Capa:</Label>
            <Inputs type="text" id="link_image" name="link_image" placeholder="Informe o Link da Imagem:" onChange={(e)=>setImage(e.target.value)}/>
            <SendButton type="submit" id="submit_album_button" name='submit_album_button' placeholder="Enviar" />
        </Form>
        </ContainerForm>
    )
}

const ContainerForm = styled.div`
    margin-top:120px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;

`
const Label = styled.label`
    font-size: 16px;
    margin-bottom: 5px;
    color: #ffffff;
    text-align: center;
`
const Inputs = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;

    &:focus {
        outline: none;
        border-color: #1E90FF;
        box-shadow: 0 0 5px rgba(30, 144, 255, 0.5); 
    }
`
const SendButton = styled.input`
    margin-top: 5px;
    background-color: #1E90FF;
    color: #fff;
    padding: 8px 20px; 
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