import { Provider } from 'react-redux'
import Tabela from './Containers/Tabela'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Tabela />
      </Container>
    </Provider>
  )
}

export default App
