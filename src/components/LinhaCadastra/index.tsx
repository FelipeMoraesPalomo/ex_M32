import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/contatos'
import BotaoAdicionar from '../BotaoAdicionar'

const LinhaCadastra = () => {
  const [name, setName] = useState('')
  const [tel, setTel] = useState(Number)
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()

  function CadastraContato() {
    dispatch(
      cadastrar({
        name,
        tel,
        email
      })
    )
  }

  return (
    <>
      <td>0</td>
      <td>
        <input
          placeholder="Digite o nome"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
      <td>
        <input
          placeholder="Digite o telefone"
          type="tel"
          value={tel}
          onChange={(e) => setTel(e.target.value as unknown as number)}
        />
      </td>
      <td>
        <input
          placeholder="Digite o e-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </td>
      <td>
        <BotaoAdicionar onClick={CadastraContato()} />
      </td>
    </>
  )
}

export default LinhaCadastra
