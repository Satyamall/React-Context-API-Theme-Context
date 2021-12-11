import { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../Context/ThemeContextProvider";

const Box= styled.nav`
   width: 50%;
   height: 50px;
   background: gray;
   display: flex;
   align-items: center;
   justify-content: center;
`
const Button = styled.button`
   padding: 5px 10px;
   font-size: 20px;
   font-weight: 600;
`
export default function Navbar(){

    const [{theme,themeData},toggleTheme]=useContext(ThemeContext);
    const currentTheme=themeData[theme]
    return (
       <Box>
           <Button onClick={toggleTheme} style={{
               color: currentTheme.color,
               backgroundColor: currentTheme.background
           }}>
            Switch the {theme === "light" ? "Dark" : "Light"} mode
           </Button>
       </Box>
    )
}