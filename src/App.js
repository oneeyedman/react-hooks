import React, {useState} from 'react';
import './App.css';
import Buttons from './components/Buttons';


const App = props => {
  const [total, setTotal] = useState(100);
  const [text, setText] = useState('');

  const getButtonContent = event => {
    const value = event.target.value;
    const total = parseInt(value) === 1 ? 100: parseInt(value);
    setTotal(total);
    setText(value);
  };
  
  return (
    <div className="app">
      <p>{text}</p>
      <Buttons total={total} action={getButtonContent}/>
    </div>
  );
}

export default App;
