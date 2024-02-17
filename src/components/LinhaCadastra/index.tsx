import { useState } from 'react'

import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/contatos'
import BotaoAdicionar from '../BotaoAdicionar'

const LinhaCadastra = () => {
  const [name, setName] = useState('')
  const [tel, setTel] = useState(Number)
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()

  function cadastra_Verifica_Limpa() {
    if (name.length < 2) {
      alert('Digite um nome válido')
    } else if (tel <= 0) {
      alert('O número de telefone não pode ser 0')
    } else if (email.length < 5) {
      alert('O email deve ter ao menos 5 caracteres.')
    } else {
      dispatch(
        cadastrar({
          name,
          tel,
          email
        })
      )
      setName('')
      setTel(0)
      setEmail('')
    }
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
        <BotaoAdicionar onClick={cadastra_Verifica_Limpa} />
      </td>
    </>
  )
}

export default LinhaCadastra
