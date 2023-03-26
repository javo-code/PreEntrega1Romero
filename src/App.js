import './App.css';
import NavBar from  './components/navBar/NavBar'
import ItemListContainer from './itemListContainer/ItemListContainer';

//import Slider from '../components/Slider'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <ItemListContainer greeting={'BIENVENID@S !'} />
    </div>
  );
}

export default App;