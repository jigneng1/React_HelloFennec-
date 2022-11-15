import "./App.css";
import ResponsiveAppBar from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <ResponsiveAppBar />
      <Footer />
    </div>
  );
}
export default App;
