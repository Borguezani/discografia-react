import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteButton } from './DeleteButton'

export function DeleteDialog({ Id, config , cleanInput}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  async function handleDelete(config) {
    config === "Álbum"
      ? await axios
          .delete(` http://127.0.0.1:8000/api/v1/albums/${Id}`)
          .then(setOpen(false), navigate("/"))
      : await axios
          .delete(` http://127.0.0.1:8000/api/v1/tracks/${Id}`)
          .then(setOpen(false), !cleanInput ? null : cleanInput(""), navigate("/"));
  }
  return (
    <div>
      {config === "Álbum" ? (
       <DeleteButton handleDelete={handleDelete} config={config} setOpen={setOpen} open={open}/>
      ) : (
          <DeleteButton handleDelete={handleDelete} config={config} setOpen={setOpen} open={open}/>
      )}
    </div>
  );
}

