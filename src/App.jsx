import Calendar from './components/Calendar'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.VITE_REPO_NAME}>
      <div className="app">
        <header className="app-header">
          <h1>ConfTrackJS</h1>
          <p className="app-description">
            Track developer conferences and tech events worldwide
          </p>
        </header>
        <main>
          <Calendar />
        </main>
        <footer className="app-footer">
          <p>Made with ❤️ for the developer community by Valpetal Tech Labs</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
