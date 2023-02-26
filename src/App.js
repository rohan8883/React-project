import './App.css';
import Homecrud from './Components/Homecrud';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Createusers from './Components/Createusers';
import Users from './Components/Users';
import EditUsers from './Components/EditUsers';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Homecrud/> 
      <Routes>
        <Route path='/' element={<Createusers/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/edit/:index' element={<EditUsers/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
