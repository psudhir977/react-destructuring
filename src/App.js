import logo from './logo.svg';
import './App.css';
import './Components/Greet';
import Greet from './Components/Greet';
import Welcom from './Components/Welcom';

function App() {
  return (
    <div className="App">
      <Greet name="Sudhir"></Greet>
      <Welcom name="Welcome sudhir" message="Its react !!"></Welcom>
    </div>
  );
}

export default App;
