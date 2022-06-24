import "./css/App.css";
import {useState} from "react";
import {
  About,
  Footer,
  Header,
  Home,
  Projects,
  Skills,
  Career,
} from "./components";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const openModalEvent = (e) => {
    setOpenModal(e)
  }

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home
          openModalEvent={openModalEvent}
        />
        <About />
        <Skills />
        <Projects />
        <Career />
      </main>
      {
        openModal
        ? <Modal
            openModal={openModal}
            openModalEvent={openModalEvent}
          />
        : null
      }
      <Footer />
    </div>
  );
}

export default App;
