import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ListData from './pages/listData/ListData';
import AddData from './pages/AddData/AddData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/list' element={<ListData/>}/>
        <Route path='/addData' element={<AddData/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
