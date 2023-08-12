import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import { styled } from 'styled-components';

function App() {
  return (
    <Div className="App">

<Todo/>
    </Div>
  );
}

export default App;
const Div=styled.div`

    background-image: url('https://static.vecteezy.com/system/resources/previews/004/257/968/original/abstract-purple-fluid-wave-background-free-vector.jpg');
    color: white;
    height: 100vh;


`