import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <ToastContainer position="bottom-center" />
    </>
  );
}

export default App;
