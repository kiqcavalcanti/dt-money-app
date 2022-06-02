import React from 'react';
import styled from 'styled-components'
import { GlobalStyle } from "./styles/global";

const Title = styled.h1`
    color: #8257e6;
    font-size: 64px;
`


function App() {
  return (
    <div className="App">
        <Title>Hello World</Title>
        <GlobalStyle/>
    </div>
  );
}

export default App;
