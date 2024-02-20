import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Contato, cadastrar, editar } from '../../store/reducers/contatos'
import BotaoAdicionar from '../BotaoAdicionar'
import { Botao } from './styles'

type Props = Contato

const LinhaCadastra = ({ id, name, tel, email, disabled }: Props) => {
  const [nameState, setNameState] = useState(name)
  const [telState, setTelState] = useState(tel)
  const [emailState, setEmailState] = useState(email)
  const [estaEditando, setEstaEditando] = useState(false)
  const [campoEstaAtivado, setCampoEstaAtivado] = useState(disabled)

  const dispatch = useDispatch()

  function cadastra_Verifica_Limpa() {
    if (nameState.length < 2) {
      alert('Digite um nome válido')
    } else if (telState <= 0) {
      alert('O número de telefone não pode ser 0')
    } else if (emailState.length < 5) {
      alert('O email deve ter ao menos 5 caracteres.')
    } else {
      dispatch(
        cadastrar({
          name: nameState,
          tel: telState,
          email: emailState
        })
      )
      setNameState('')
      setTelState(0)
      setEmailState('')
    }
  }

  function verificar_Editar() {
    if (nameState.length < 2) {
      alert('Digite um nome válido')
    } else if (telState <= 0) {
      alert('O número de telefone não pode ser 0')
    } else if (emailState.length < 5) {
      alert('O email deve ter ao menos 5 caracteres.')
    } else {
      setEstaEditando(false)
      setCampoEstaAtivado(disabled)
      dispatch(
        editar({
          id: id,
          name: nameState,
          tel: telState,
          email: emailState
        })
      )
    }
  }

  function editando() {
    setEstaEditando(true)
    setCampoEstaAtivado(!disabled)
  }

  return (
    <>
      <td>{id}</td>
      <td>
        <input
          placeholder="Digite o nome"
          type="text"
          value={nameState}
          onChange={(e) => setNameState(e.target.value)}
          disabled={campoEstaAtivado}
        />
      </td>
      <td>
        <input
          placeholder="Digite o telefone"
          type="number"
          value={telState}
          onChange={(e) => setTelState(e.target.value as unknown as number)}
          disabled={campoEstaAtivado}
        />
      </td>
      <td>
        <input
          placeholder="Digite o e-mail"
          type="email"
          value={emailState}
          onChange={(e) => setEmailState(e.target.value)}
          disabled={campoEstaAtivado}
        />
      </td>
      <td>
        {id === 0 && <BotaoAdicionar onClick={cadastra_Verifica_Limpa} />}
        {!estaEditando && id != 0 && <Botao onClick={editando}>Editar</Botao>}
        {estaEditando && id != 0 && (
          <>
            <button onClick={verificar_Editar}>SALVAR</button>{' '}
            <button>Cancelar</button>
          </>
        )}
      </td>
    </>
  )
}

export default LinhaCadastra
