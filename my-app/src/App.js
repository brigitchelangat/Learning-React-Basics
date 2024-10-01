import logo from './logo.svg';
import './App.css';

const Person = (props) =>{
  return (
    <>
    <h1>Name: {props.namewa }</h1>
    <h2>LastName: Chelangat</h2>
    <h2>Age: 20</h2>
    </>

  )
}
function App() {
  const name = 'Brigit'
  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <Person name = "Brigit"/>
      <Person name = "Evans"/>
      <Person name = "Brian"/>
    </div>
  );
}

export default App;
