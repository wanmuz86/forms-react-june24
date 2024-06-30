
import './App.css'
import ControlledInput from './components/ControlledInput'
import ControlledForm from './components/ControlledForm'
import UncontrolledForm from './components/UncontrolledForm'
import ReactHookForm from './components/ReactHookForm'
import ReactHookCreatorForm from './components/ReactHookCreatorForm'

function App() {

 
  return (
    <div>
      <h1>Hello Forms</h1>
      <ControlledInput/>
      <hr />
      <ControlledForm/>
      <hr />
      <UncontrolledForm/>
      <hr />
      <ReactHookForm/>
      <hr />
      <ReactHookCreatorForm/>
     
    </div>
  )
}

export default App
