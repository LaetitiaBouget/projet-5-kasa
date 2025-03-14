import { BrowserRouter as Router} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Layout from './layout'

const App = () => {
  return (
    <Router>
      <Layout>
        <AppRouter />
      </Layout>
    </Router>
  )
}

export default App

