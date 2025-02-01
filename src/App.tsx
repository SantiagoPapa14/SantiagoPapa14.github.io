import "./App.css";
import { useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Ofrecemos } from "./components/ofrecemos";
import { About } from "./components/about";
import { Team } from "./components/team";
import { Contacto } from "./components/contacto";
import { Clientes } from "./components/clientes";
import { Instalaciones } from "./components/instalaciones";

function App() {
  useEffect(() => {
    document.title = "DashHome";
  }, []);
  return (
    <div>
      <Navigation />
      <Header />
      <Ofrecemos />
      <About />
      <Instalaciones />
      <Clientes />
      <Team />
      <Contacto />
    </div>
  );
}

export default App;
