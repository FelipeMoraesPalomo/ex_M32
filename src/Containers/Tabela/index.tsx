import { useSelector } from 'react-redux'
import LinhaCadastra from '../../components/LinhaCadastra'
import * as S from './styles'
import { RootReducer } from '../../store'

const Tabela = () => {
  const { contatos } = useSelector((state: RootReducer) => state.contatos)
  return (
    <S.Table>
      <S.TituloTabela>Lista de contatos</S.TituloTabela>
      <S.CabecalhoTabela>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Número</th>
          <th>Email</th>
          <th>Ações</th>
        </tr>
      </S.CabecalhoTabela>

      <tbody>
        <tr>
          <LinhaCadastra id={0} name="" tel={0} email="" />
        </tr>

        {contatos.map((c) => (
          <tr key={c.name}>
            <LinhaCadastra
              id={c.id}
              name={c.name}
              tel={c.tel}
              email={c.email}
              disabled
            />
          </tr>
        ))}
      </tbody>
    </S.Table>
  )
}

export default Tabela
