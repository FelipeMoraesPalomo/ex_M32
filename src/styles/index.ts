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
  height: 100vh;
  background-color: #d3d3d3;
`
export default EstiloGlobal
