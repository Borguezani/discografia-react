import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import styled from "styled-components";

export function DeleteButton({handleDelete, config , setOpen, open}){
    return(
        <>
        <TagDeleteButton onClick={() => setOpen(true)}>
          Deletar {config}?
        </TagDeleteButton>
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
    )
}
const TagDeleteButton = styled.button`
  margin-top: 10px;
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