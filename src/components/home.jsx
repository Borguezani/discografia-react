import axios from 'axios';
import React, { useState, useEffect } from 'react';
export function Home(){
    const [albums, setAlbums] = useState([]);
console.log(albums);
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/v1/albums')
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.error('Error fetching albums:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Álbuns</h1>
      <ul>
        {albums.map(album => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}
