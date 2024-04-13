import './App.css';
import {Route, Routes} from 'react-router-dom'
import SideMenu from './components/SideMenu'
import Discover from './components/Discover'

const App = ()=>(
  <Routes>
    <Route path="/" element={<SideMenu />}>
      <Route index element={<Discover />}/>
    </Route>
  </Routes>
)

export default App;
