import styled from "styled-components";
import { SearchIcon } from "./Search-icon";


export const PrimaryInput = styled.input`
width: 250px; 
background-color: transparent;
border-radius: 8px;
padding: 8px 16px;
font-family: inherit;
font-weight:400;
font-size:14px;
line-height:2px;
color: #ffffff;
border: none;
&:focus {
        outline: none;
        border-color: #1E90FF;
        box-shadow: 0 0 5px rgba(30, 144, 255, 0.5); 
    }
`
const InputContainer = styled.div`
position: relative;
width: 250px;
margin-bottom: 20px;
svg{
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translateY(-50%);
}
`

export function PrimaryInputWSearchIcon(props){
    return(
        <InputContainer>
            <PrimaryInput {...props}/>
            <SearchIcon
            />
        </InputContainer>
    )
}