
import './App.css';
import Menu from './Components/Menu';
import { routes } from './Router/Route';
function App() {
  return (
    <div>
     
      <Menu />
     
     
       {routes}
     
    </div>
  );
}

export default App;
