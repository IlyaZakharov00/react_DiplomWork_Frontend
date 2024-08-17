import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { configureStore } from './components/Shop/redux/store.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={configureStore()}>
    <App />
  </Provider>
)
