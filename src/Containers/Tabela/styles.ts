import styled from 'styled-components'

export const Table = styled.table`
  margin: 0 auto;
  width: 1024px;
  background-color: #fff;
  border: 1px solid #000;
  border-collapse: collapse;
  text-align: center;

  /* tr:nth-child(even) {
    background: lightgray;
  } */

  th,
  td {
    border: 2px solid #000;
    padding: 8px 0;

    input {
      border: none;
      outline: none;
      text-align: center;
    }

    input[type='number']::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
    input[type='number'] {
      -moz-appearance: textfield;
      appearance: textfield;
    }
  }
`

export const TituloTabela = styled.caption`
  padding: 16px 0px;
  background-color: green;
  font-size: 40px;
`

export const CabecalhoTabela = styled.thead`
  tr {
  }
`
