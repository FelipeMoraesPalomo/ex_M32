import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Contato = {
  id: number
  name: string
  tel: number
  email: string
  disabled?: boolean
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
        alert('Já existe um contato com esse nome')
      } else {
        const ultimoContato = state.contatos[state.contatos.length - 1]
        const ContatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.contatos.push(ContatoNovo)
      }
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.contatos.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.contatos[indexDoContato] = action.payload
      }
    }
  }
})

export const { cadastrar, editar } = contatosSlice.actions

export default contatosSlice.reducer
