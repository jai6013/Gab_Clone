import "./App.css";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { Theme } from "./Styles/Theme";

function App() {
  return (
    <div className="App">
      <Theme>
        <Navbar />
        <Home />
      </Theme>
    </div>
  );
}

export default App;
