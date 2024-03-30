import axios from "axios";
import { useEffect, useState } from "react";
export function AlbumsList(){
    const [albums, setAlbums] = useState([]);
    console.log(albums);
    useEffect(() => {
        
        axios.get('http://127.0.0.1:8000/api/v1/albums')
          .then(response => {
            setAlbums(response.data);
          })
          .catch(error => {
            console.error('Error fetching albums:', error);
          });
      }, []);
    return(
        <div>
      <h1>Lista de Álbuns</h1>
      <ul>
        {albums.map(album => (
            <>
            <img src={album.link_image}></img>
          <li key={album.id}>{album.title} - {album.year}</li>
        
          </>
        ))}
      </ul>
    </div>
    )
}