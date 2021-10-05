import logo from './logo.svg';
import './App.css';

const compromissos = ['Lavar loça', 'Estender roupa', 'Lavar roupa', 'Tomar banho']
const Task = (value) => {
  return (
    value.map((element) => <li>{element}</li>)
  );
}

function App() {
  return (
    <div>
      <ol>{Task(compromissos)}</ol>
    </div>
  );
}

export default App;
