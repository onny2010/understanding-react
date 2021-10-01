import { useEffect, useState } from 'react';
import './App.css';
import Books from './components/Books/Books';
import Device from './components/Device/Device';

function App() {
  const [steps, setSteps] = useState(0);
  const books = [
    { name: 'Small giants', author: 'bo' },
    { name: 'build to sell', author: 'jhon' },
    { name: 'Grind it', author: 'Ray' },
    { name: 'Shoe dog', author: 'bo' }
  ]
  const handleIncreaseSteps = () => {
    const newStepsCount = steps + 1;
    setSteps(newStepsCount);
  }

  useEffect(() => {
    console.log(steps)
  }, [steps])

  return (
    <div className="App">
      <h3 title="My Awesome Tooltip">My Steps: {steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk</button>
      <Device name="phone" steps={steps} price="13000"></Device>
      <Books books={books}></Books>
    </div>
  );
}

export default App;
