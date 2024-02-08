import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PlayAllButton from './components/playAll/PlayAllButton';
import TrackNumber from './components/track/TrackNumber';
import AddAllButton from './components/addAll/AddAllButton';

function App() {
  return (
    <div className="App">
      <header>
        <div className='first'>
          <PlayAllButton />
          <AddAllButton />
        </div>
        <div className='second'>
          <TrackNumber />
          <div className='filter'>
            <FontAwesomeIcon icon={faSearch} className='iconsearch' />
            <input type='text' placeholder='Filter' />
          </div>
        </div>
      </header>
      <div className='song'>
        <div className='box1'></div>
        <div className='box2'>Song Name</div>
        <div className='box2'>Artist Name</div>
        <div className='box3'>Track</div>
        <div className='box4'></div>
      </div>
    </div>
  );
}

export default App;
