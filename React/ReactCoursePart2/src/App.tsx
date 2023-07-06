import { useReducer } from 'react';
import './App.css';
import NavBar from './state-management/NavBar';
import taskReducer from './state-management/reducers/taskReducer';
import HomePage from './state-management/HomePage';
import TasksContext from './state-management/contexts/tasksContext';
import authReducer from './state-management/reducers/authReducer';
import AuthContext from './state-management/contexts/authContext';
import AuthProvider from './state-management/AuthProvider';

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <AuthProvider>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <HomePage />
      </TasksContext.Provider>
    </AuthProvider>
  );
}

export default App;
