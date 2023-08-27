
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Comp/Home';
import MovieDertails from './Comp/MovieDertails';
function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='movie/:id' element={<MovieDertails/>}/>
    <Route path='/*' element={<h1>Error Page</h1>}/>
  </Routes>
  </>
  );
}

export default App;
