import logo from './logo.svg';
import './App.css';  
import { Tasks } from './component/tasks';
import { Navbar } from './component/Navbar';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import { About } from './component/About';
function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <header>
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Tasks/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </main>
    </div>
   </BrowserRouter>
  )
}

export default App;
