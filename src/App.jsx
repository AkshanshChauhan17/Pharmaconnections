import './App.scss'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import TopSlidingText from './Components/TopSlidingText'
import TopStrip from './Components/TopStrip'
import Navigation from './Components/Navigation'

function App() {
  return (
    <div className='app'>
      <TopSlidingText />
      <TopStrip />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
