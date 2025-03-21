import SearthPokemons from './components/searth/searthPokemons';

import ImageIntro from './assests/png/intro.png';

import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="div-img">
          <img className="image-intro" src={ImageIntro} alt="intro" />
        </div>
        <SearthPokemons />
      </header>
    </div>
  );
}

export default App;
