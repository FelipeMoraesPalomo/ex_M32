import { Contato } from '../../store/reducers/contatos'

type Props = Contato

const LinhaTabela = ({ id, name, tel, email }: Props) => {
  return (
    <>
      <td>{id}</td>
      <td>
        <input type="text" value={name} disabled />
      </td>
      <td>
        <input type="tel" value={tel} disabled />
      </td>
      <td>
        <input type="email" value={email} disabled />
      </td>
      <td></td>
    </>
  )
}

export default LinhaTabela
