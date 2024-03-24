import "./App.css";
import Router from "./config/Router";
import Footer from "./components/footer/Footer";


function App() {
 
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Router/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
