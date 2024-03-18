import "./App.css";
import Router from "./config/Router";


function App() {
 
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Router/>
      </div>
  
    </div>
  );
}

export default App;
