import './App.css'
import Dashboard from './components/Dashboard';
import { ThemeProvider } from './hooks/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
}
export default App
