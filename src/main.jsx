import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Slide, ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer
      position='bottom-right'
    autoClose={2000}
    transition={Slide}
    />
  </> 
)
