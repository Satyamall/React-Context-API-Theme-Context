
import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Context/ThemeContextProvider";

const ButtonTag = styled.button`
   padding: 5px 10px;
   font-size: 20px;
   font-weight: 600;
`

export default function Button({title}){

    const [{theme,themeData}]=useContext(ThemeContext);
    const currentTheme=themeData[theme];
    return(
        <ButtonTag style={{
            color: currentTheme.color,
            backgroundColor: currentTheme.background
        }} >
            {title}
        </ButtonTag>
    )
}

