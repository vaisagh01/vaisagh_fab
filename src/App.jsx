import { Routes, Route } from 'react-router-dom'
import './App.css'
import FeedBackPage from './pages/FeedBackPage/FeedBackPage'
import Home from './pages/HomePage/Home'

function App() {

  return (
    <div className='wrapper'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/feedback' element={<FeedBackPage/>} />
      </Routes>
    </div>
  )
}

export default App
