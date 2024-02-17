import { Botao } from './styles'

type BotaoAdicionarProps = {
  onClick?: () => void
}

const BotaoAdicionar = ({ onClick }: BotaoAdicionarProps) => (
  <Botao onClick={onClick}>+</Botao>
)

export default BotaoAdicionar
