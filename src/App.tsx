import { Navegation } from './routes/routes'
import './App.css'
import { ConfigProvider } from 'antd'
import ptBR from "antd/locale/pt_BR"

function App() {
  return (
    <ConfigProvider locale={ptBR} >
      <Navegation  />
    </ConfigProvider>
  )
}

export default App
