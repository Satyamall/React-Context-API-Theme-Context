

import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Context/ThemeContextProvider";

const FooterPart = styled.footer`
    margin-top: 20px;
    width: 400px;
    height: 200px;
    border: 1px solid gray;
    background: aquamarine;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 20px;
    text-align: center;
`
export default function Footer(){

    const [{theme,themeData}]=useContext(ThemeContext);
    const currentTheme=themeData[theme];
    
    return (
        <FooterPart style={{
            color: currentTheme.color,
            backgroundColor: currentTheme.background
        }}>
            <h1>FOOTER</h1>
            <p>This is the footer of React Context Api Theme Context Assignment</p>
        </FooterPart>
    )
}
