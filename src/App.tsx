import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from './scene/main_page'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" Component={MainPage} />
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
