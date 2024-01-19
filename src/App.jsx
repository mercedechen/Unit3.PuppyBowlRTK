// root files
import './App.css'

// react
import {Routes, Route} from 'react-router-dom'

// components
import Navigation from './components/Navigation.jsx';
import Players from './components/Players.jsx';
import SinglePlayer from './components/SinglePlayer.jsx';

function App(){

  return (
    <>
      <nav>
        <h1>Puppy Bowl React</h1>
        <Navigation />
      </nav>
      <Routes>
        <Route path='/' element={<Players />} />
        <Route path='/players' element={<Players />} />
        <Route path='/players/:id' element={<SinglePlayer />} />
      </Routes>
    </>
  )
}

export default App;