import Tabela from './Containers/Tabela'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Tabela />
      </Container>
    </>
  )
}

export default App
