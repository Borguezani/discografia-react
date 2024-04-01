import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
        <>
          <DeleteButton onClick={() => setOpen(true)}>
            Deletar {config}?
          </DeleteButton>
          <Dialog
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
            open={open}
            onClose={() => setOpen(false)}
          >
            <DialogTitle id="dialog-title">Deletar {config}?</DialogTitle>
            <DialogContent>
              <DialogContentText id="dialog-description">
                Você tem certeza que deseja deletar o {config}?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancelar</Button>
              <Button onClick={() => handleDelete(config)} autoFocus>
                Deletar
              </Button>
            </DialogActions>
          </Dialog>
        </>
      ) : (
        <>
          <DeleteButton onClick={() => setOpen(true)}>
            Deletar {config}?
          </DeleteButton>
          <Dialog
            aria-labelledby="dialog-title"
            aria-describedby="dialog-description"
            open={open}
            onClose={() => setOpen(false)}
          >
            <DialogTitle id="dialog-title">Deletar {config}?</DialogTitle>
            <DialogContent>
              <DialogContentText id="dialog-description">
                Você tem certeza que deseja deletar o {config}?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>Cancelar</Button>
              <Button onClick={() => handleDelete(config)} autoFocus>
                Deletar
              </Button>
            </DialogActions>
          </Dialog>
        </>
        
      )}
    </div>
  );
}
const DeleteButton = styled.button`
  margin-top: 5px;
  background-color: #ff6347;
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
    background-color: #ff4500;
  }
`;
