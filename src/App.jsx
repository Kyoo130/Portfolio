import "./css/App.css";
import {
  About,
  Footer,
  Header,
  Home,
  Projects,
  Skills,
  Career
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Career />
      </main>
      <Footer />
    </div>
  );
}

export default App;
