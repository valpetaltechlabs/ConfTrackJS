import { HashRouter } from 'react-router-dom'
import Calendar from './components/Calendar'

function App() {
  return (
    <HashRouter>
      <div className="app">
        <header className="header">
          <h1>Conf Track</h1>
        </header>

        <main className="calendar-container">
          <Calendar />
        </main>

        <footer className="footer">
          Made with ❤️ by <a href="https://github.com/valpetal" target="_blank" rel="noopener noreferrer">ValPetal Tech Labs</a>
        </footer>
      </div>
    </HashRouter>
  )
}

export default App
