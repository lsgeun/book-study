import './App.css';
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const handleSetCount = value => {
    setCount(count + value);
  };
  const handleChangeText = e => {
    setText(e.target.value);
  };

  return (
    <>
      <div className='app'>
        <h1>Simple Counter</h1>
        <section>
          <input value={text} onChange={handleChangeText} />
        </section>
        <section>
          <Viewer count={count} />
          {count % 2 === 0 && <Even />}
        </section>
        <section>
          <Controller handleSetCount={handleSetCount} />
        </section>
      </div>
    </>
  );
}

export default App;
