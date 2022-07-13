import './App.css'
import Nav from './components/Navbar/Nav'
import Form from './components/Form/Form'
function App() {
  return (
    <div className='App'>
      <Nav />
      <Form />
      <div className='r1-container'>
        <div className='r1'></div>
      </div>
      <footer>
        <p>Terms of use | Privacy Policy</p>
      </footer>
    </div>
  )
}

export default App
