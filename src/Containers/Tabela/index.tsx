import { useSelector } from 'react-redux'
import LinhaCadastra from '../../components/LinhaCadastra'
import LinhaTabela from '../../components/LinhaTabela'
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
          <LinhaCadastra />
        </tr>

        {contatos.map((c) => (
          <tr key={c.name}>
            <LinhaTabela id={c.id} name={c.name} tel={c.tel} email={c.email} />
          </tr>
        ))}
      </tbody>
    </S.Table>
  )
}

export default Tabela
