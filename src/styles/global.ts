import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  ul{
    list-style-type: none;
  }
  
:root {
  --color-primary:#27AE60;
  --color-primary-hover: #93D7AF;
  --color-primary-disableb: #155e34;
  --color-gray-0: #FFFFFF;
  --color-gray-1: #F5F5F5;
  --color-gray-2: #E0E0E0 ;
  --color-gray-3: #999999;
  --color-gray-4: #828282;
  --color-gray-5: #333333;
  --color-sucess: #168821;
  --color-negative: #E60000;
  --color-warning: #FFCD07;
  --color-information: #155BCB;

}

body{
  background-color: var(--color-gray-0);;
}
`;

export const StyledContainer = styled.main`
  width: 100vw;
  max-width: 1440px;
  min-height: 100vh;
  height: 100%;

  margin: 0 auto;
  padding: 15px;

  display: flex;
  justify-content: center;

  @media (min-width: 800px) {
    align-items: center;
  }
`;
