import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
`

export const Container = styled.div`
  padding: 120px;
  background-color: blue;
  height: 100vh;
`
export default EstiloGlobal
