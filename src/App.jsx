import "./css/App.css";
import {About, Header, Home, Projects, Skills} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  );
}

export default App;
