import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Theme } from "./Styles/Theme";

function App() {
  return (
    <div className="App">
      <Theme>
        <Navbar />
      </Theme>
    </div>
  );
}

export default App;
