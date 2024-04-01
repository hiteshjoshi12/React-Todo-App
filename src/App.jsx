import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import TodoApp from './components/TodoApp';

function App() {
  return (
    // proving the redux store at the root level so that is can be avilable in whole application
    <Provider store={store}> 
      <main className='h-screen p-4 w-screen'>
        {/* calling the main component */}
        <TodoApp /> 
      </main>
    </Provider>
  );
}

export default App;
