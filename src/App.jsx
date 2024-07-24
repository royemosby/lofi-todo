import "./App.css";
import { Footer } from "./shared/Footer";
import { Header } from "./shared/Header";
import { Todos } from "./features/Todos";

function App() {
  return (
    <>
      <Header />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
