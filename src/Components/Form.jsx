
import { useContext } from "react";
import styled from "styled-components";
import Button from "./Button";
import { ThemeContext } from "../Context/ThemeContextProvider";

const FormBox = styled.form`
    margin-top: 20px;
    width: 300px;
    border: 1px solid gray;
    background: blanchedalmond;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

`
const Input =styled.input`
    border: none;
    border-bottom: 2px solid red;
    font-size: 15px;
`
export default function Form(){

    const [{theme,themeData}]=useContext(ThemeContext);
    const currentTheme=themeData[theme];
    
    return (
        <FormBox style={{
            color: currentTheme.color,
            backgroundColor: currentTheme.background
        }}>
            <h1>User Form</h1>
            <Input placeholder="Username"/>
            <Input placeholder="Email"/>
            <Input placeholder="Phone Number"/>
            <Button title={"ADD DATA"}/>
        </FormBox>
    )
}
