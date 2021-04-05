import logo from './logo.svg';

import DateSelector from './date-picker/date-picker';
import DateChecker from './date-checker/date-checker';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className='highlight'>RFC 3339 Helper</p>
      </header>
      <div className='container'>
        <DateSelector />
        <DateChecker />
      </div>
    </div>
  );
}

export default App;
