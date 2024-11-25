import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";
import image from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonComponent buttonText="Ciao, sono un bottone!" />
        <ImageComponent imgSrc={image} imgAlt="logo" />
      </header>
    </div>
  );
}

export default App;
