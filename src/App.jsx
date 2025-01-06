import { BrowserRouter } from 'react-router-dom'
import Calendar from './components/Calendar'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Calendar />
      </div>
    </BrowserRouter>
  )
}

export default App
