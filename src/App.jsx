import "./css/App.css";
import { About, Header, Home } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
