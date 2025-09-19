import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './Components/FunctionalComponent';
import ClassComponent from './Components/ClassComponent';

function App() {

  const obj={
    functional:"properties sent as properties = {obj}"
  }

  return (
    <div className="App">
     <FunctionalComponent properties = {obj}/>
     <ClassComponent/>
    </div>
  );
}

export default App;
