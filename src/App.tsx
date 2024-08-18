import './App.css'
import './components/Shop/static_files/css/style.css'
import { BrowserRouter as Router } from 'react-router-dom'  //BrowserRouter
import { Shop } from './components/Shop/Shop/Shop';
// import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Shop />
    </Router >
  )
}

export default App
