import './App.css'
import { Route, Router, Routers } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer.jsx'
import Home from './pages/home.jsx'

export const App = () => {


  return (
    <Router>
      <Header />
      <main className='min-h-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
