import './App.css';
import Consumer from './Consumer';
import { TestProvider } from './TestProvider';

function App() {
  return (
    <div className='App'>
      <TestProvider>
        <Consumer />
      </TestProvider>
    </div>
  );
}

export default App;
