import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Contato = {
  id: number
  name: string
  tel: number
  email: string
}

type ContatosState = {
  contatos: Contato[]
}

const initialState: ContatosState = {
  contatos: []
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.contatos.find(
        (contato) =>
          contato.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (contatoJaExiste) {
        console.log('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.contatos[state.contatos.length - 1]
        const ContatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.contatos.push(ContatoNovo)
      }
    }
  }
})

export const { cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
