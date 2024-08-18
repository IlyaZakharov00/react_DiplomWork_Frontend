import './App.css'
import './components/Shop/static_files/css/style.css'
import { HashRouter as Router } from 'react-router-dom'  //BrowserRouter
import { Shop } from './components/Shop/Shop/Shop';
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router basename='/react_DiplomWork_Frontend/' >
      <Shop />
    </Router >
  )
}

export default App
