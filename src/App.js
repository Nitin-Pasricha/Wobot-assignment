import './App.css'
import Nav from './components/Navbar/Nav'
import Form from './components/Form/Form'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className='App'>
      <Nav />
      <Form />
      <div className='r1-container'>
        <div className='r1'></div>
      </div>
      <Footer />
    </div>
  )
}

export default App
