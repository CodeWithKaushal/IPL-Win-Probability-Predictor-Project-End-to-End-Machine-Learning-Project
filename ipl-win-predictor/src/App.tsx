import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PredictorForm from "./components/PredictorForm";
import About from "./components/About";
import Teams from "./components/Teams";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <PredictorForm />
        <About />
        <Teams />
      </main>
      <Footer />
    </div>
  );
}

export default App;
