import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export function NavBar(){
    const navigate = useNavigate();
    function handleCreate (){
        return navigate('/CreateAlbum')
    }
    function handleHome (){
        return navigate('/')
    }
    return(
        <TagHeader>
            <div>
                <HomeButton onClick={handleHome}>
                    Home
                </HomeButton>
            </div>
            <div>
                <TagButton onClick={handleCreate}>Criar Álbum</TagButton>
            </div>
        </TagHeader>
    )
}
const TagHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    `
const TagButton = styled.button`
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
const HomeButton = styled.button`
     background-color: #4CAF50; 
    color: #fff;
    padding: 8px 16px; 
    border: none;
    border-radius: 5px;
   
    transition: background-color 0.3s, color 0.3s;
    cursor: pointer;
    font-size: 16px; 
    font-weight: bold;

    &:hover {
        background-color: #093a0b;
    }
`