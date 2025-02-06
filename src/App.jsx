import './App.css'
import HomePage from './components/HomePage/HomePage'
import About from './components/About/About'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
function App() {

  return (
    <Router>
      <Routes>
      <Route path='/' element = {<HomePage />} ></Route>
      <Route path='/about' element = {<About />} ></Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
