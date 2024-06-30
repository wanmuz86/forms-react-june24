
import './App.css'
import ControlledInput from './components/ControlledInput'
import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm'
function App() {

 
  return (
    <div>
      <h1>Hello Forms</h1>
      <ControlledInput/>
      <hr />
      <ControlledForm/>
      <hr />
      <UncontrolledForm/>
     
    </div>
  )
}

export default App
