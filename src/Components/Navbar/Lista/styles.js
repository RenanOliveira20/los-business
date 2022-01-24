import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai" 
import { BsBagCheckFill } from "react-icons/bs"
import { FaUserAlt } from "react-icons/fa"

export const ListIcons = styled.ul `
    width: 100%;
    max-height: 70px;
    display: flex;
    justify-content: space-between;
`
export const Logo = styled.img`
    max-height: 70px;
    width: auto;
`;
export const UserIcons = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div{
        width: 50%;
    };
    span{
        max-height: 40px;
        border-left: 1px solid white
    }
`;
export const Lupa = styled(AiOutlineSearch)`
    color: black;
    font-size:25px;
    position: absolute;
    margin-left: 16%;
    &: hover{   
        color: grey
    };
`;
export const Bag = styled(BsBagCheckFill)`
    color: white;
    margin: 0 10px;
    font-size : 20px;
    &: hover{
        color: gold
    };
`;
export const User = styled(FaUserAlt)`
color: white;
margin: 0 10px;
    font-size : 20px;
    &: hover{
        color: gold
    }
`;
export const SearchBar = styled.div `
    width:50%;
    height: 25px;
    display: flex;
    justify-content: center;
    input{
        width: 100%;
        border: none;
        border-radius:5px;
        font-size: 16px
    }
`